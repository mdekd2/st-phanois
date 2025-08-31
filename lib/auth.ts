import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from './firebase'

export interface UserData {
  firstName: string
  lastName: string
  email: string
  phone: string
  createdAt: Date
  updatedAt: Date
}

// Sign up with email and password
export const signUp = async (email: string, password: string, userData: Omit<UserData, 'createdAt' | 'updatedAt'>) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Save additional user data to Firestore
    const userDoc = {
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    await setDoc(doc(db, 'users', user.uid), userDoc)

    return { user, userData: userDoc }
  } catch (error: any) {
    throw new Error(getErrorMessage(error.code))
  }
}

// Sign in with email and password
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Get user data from Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid))
    const userData = userDoc.data() as UserData

    return { user, userData }
  } catch (error: any) {
    throw new Error(getErrorMessage(error.code))
  }
}

// Sign out
export const signOutUser = async () => {
  try {
    await signOut(auth)
  } catch (error: any) {
    throw new Error('Erreur lors de la déconnexion')
  }
}

// Get current user data
export const getCurrentUserData = async (uid: string): Promise<UserData | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid))
    if (userDoc.exists()) {
      return userDoc.data() as UserData
    }
    return null
  } catch (error) {
    console.error('Error getting user data:', error)
    return null
  }
}

// Update user data
export const updateUserData = async (uid: string, userData: Partial<UserData>) => {
  try {
    const updateData = {
      ...userData,
      updatedAt: new Date()
  }
    await updateDoc(doc(db, 'users', uid), updateData)
  } catch (error: any) {
    throw new Error('Erreur lors de la mise à jour des données')
  }
}

// Auth state listener
export const onAuthStateChange = (callback: (user: FirebaseUser | null) => void) => {
  return onAuthStateChanged(auth, callback)
}

// Error message helper
const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'Cette adresse email est déjà utilisée'
    case 'auth/invalid-email':
      return 'Adresse email invalide'
    case 'auth/operation-not-allowed':
      return 'L\'authentification par email/mot de passe n\'est pas activée'
    case 'auth/weak-password':
      return 'Le mot de passe est trop faible'
    case 'auth/user-disabled':
      return 'Ce compte a été désactivé'
    case 'auth/user-not-found':
      return 'Aucun compte trouvé avec cette adresse email'
    case 'auth/wrong-password':
      return 'Mot de passe incorrect'
    default:
      return 'Une erreur est survenue lors de l\'authentification'
  }
}
