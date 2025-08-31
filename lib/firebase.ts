import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgXtBgqNYhu8J6VWar773sl29GAc-E_lY",
  authDomain: "stephanois-bd287.firebaseapp.com",
  projectId: "stephanois-bd287",
  storageBucket: "stephanois-bd287.firebasestorage.app",
  messagingSenderId: "1060394238912",
  appId: "1:1060394238912:web:bc6a160a6ca52fff79fe25",
  measurementId: "G-FV6WXWR8GV"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

export default app
