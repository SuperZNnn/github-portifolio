import firebase from "firebase/compat/app"
import { auth, githubProvider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth"

interface CustomUser extends firebase.User{
    reloadUserInfo: {
        screenName: string
    }
}

export const signIn = () => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {
        const user = result.user as CustomUser
        console.log(user.reloadUserInfo.screenName)
    })
    .catch((error) => {
        console.log(error)
    })
}