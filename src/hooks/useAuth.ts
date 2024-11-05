import { auth, githubProvider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth"

export const signIn = () => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {
        console.log(result.user)
    })
    .catch((error) => {
        console.log(error)
    })
}