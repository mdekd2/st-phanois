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

// Error message helper with more detailed messages
const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'Cette adresse email est déjà utilisée. Veuillez utiliser une autre adresse email ou vous connecter avec votre compte existant.'
    case 'auth/invalid-email':
      return 'Adresse email invalide. Veuillez vérifier le format de votre adresse email.'
    case 'auth/operation-not-allowed':
      return 'L\'authentification par email/mot de passe n\'est pas activée. Veuillez contacter l\'administrateur du site.'
    case 'auth/weak-password':
      return 'Le mot de passe est trop faible. Il doit contenir au moins 6 caractères.'
    case 'auth/user-disabled':
      return 'Ce compte a été désactivé. Veuillez contacter l\'administrateur du site.'
    case 'auth/user-not-found':
      return 'Aucun compte trouvé avec cette adresse email. Veuillez vérifier votre adresse email ou créer un nouveau compte.'
    case 'auth/wrong-password':
      return 'Mot de passe incorrect. Veuillez vérifier votre mot de passe et réessayer.'
    case 'auth/too-many-requests':
      return 'Trop de tentatives de connexion. Veuillez attendre quelques minutes avant de réessayer.'
    case 'auth/network-request-failed':
      return 'Erreur de connexion réseau. Veuillez vérifier votre connexion internet et réessayer.'
    case 'auth/invalid-credential':
      return 'Identifiants invalides. Veuillez vérifier votre email et mot de passe.'
    case 'auth/account-exists-with-different-credential':
      return 'Un compte existe déjà avec cette adresse email mais avec une méthode de connexion différente.'
    case 'auth/requires-recent-login':
      return 'Cette opération nécessite une connexion récente. Veuillez vous reconnecter.'
    default:
      return 'Une erreur inattendue s\'est produite. Veuillez réessayer ou contacter le support.'
  }
}
