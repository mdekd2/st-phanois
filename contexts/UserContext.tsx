'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User as FirebaseUser } from 'firebase/auth'
import { signUp, signIn, signOutUser, onAuthStateChange, getCurrentUserData, updateUserData, UserData } from '@/lib/auth'

interface User {
  uid: string
  firstName: string
  lastName: string
  email: string
  phone: string
  isLoggedIn: boolean
}

interface UserContextType {
  user: User | null
  loading: boolean
  signUpUser: (email: string, password: string, userData: Omit<UserData, 'createdAt' | 'updatedAt'>) => Promise<void>
  signInUser: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  updateUser: (userData: Partial<UserData>) => Promise<void>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        // User is signed in
        const userData = await getCurrentUserData(firebaseUser.uid)
        if (userData) {
          setUser({
            uid: firebaseUser.uid,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phone: userData.phone,
            isLoggedIn: true
          })
        }
      } else {
        // User is signed out
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signUpUser = async (email: string, password: string, userData: Omit<UserData, 'createdAt' | 'updatedAt'>) => {
    try {
      const { user: firebaseUser, userData: savedUserData } = await signUp(email, password, userData)
      setUser({
        uid: firebaseUser.uid,
        firstName: savedUserData.firstName,
        lastName: savedUserData.lastName,
        email: savedUserData.email,
        phone: savedUserData.phone,
        isLoggedIn: true
      })
    } catch (error: any) {
      throw error
    }
  }

  const signInUser = async (email: string, password: string) => {
    try {
      const { user: firebaseUser, userData } = await signIn(email, password)
      setUser({
        uid: firebaseUser.uid,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        isLoggedIn: true
      })
    } catch (error: any) {
      throw error
    }
  }

  const logout = async () => {
    try {
      await signOutUser()
      setUser(null)
    } catch (error: any) {
      throw error
    }
  }

  const updateUser = async (userData: Partial<UserData>) => {
    if (!user) {
      throw new Error('Utilisateur non connecté')
    }

    try {
      await updateUserData(user.uid, userData)
      
      // Update local state
      setUser(prev => prev ? {
        ...prev,
        ...userData
      } : null)
    } catch (error: any) {
      throw error
    }
  }

  const value = {
    user,
    loading,
    signUpUser,
    signInUser,
    logout,
    updateUser
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
