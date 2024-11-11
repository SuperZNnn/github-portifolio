import { initializeApp } from "firebase/app"
import { getAuth, GithubAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAHvQxDyqnjRpDYT2I7I7HVUXcXlINEjlA",
  authDomain: "git-port-c55c7.firebaseapp.com",
  projectId: "git-port-c55c7",
  storageBucket: "git-port-c55c7.firebasestorage.app",
  messagingSenderId: "38354659538",
  appId: "1:38354659538:web:6c614f88f39bd2185d250b",
  measurementId: "G-NHXWF08Z2V"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const githubProvider = new GithubAuthProvider()

export { auth, githubProvider }