import firebase from "firebase/compat/app"
import { auth, githubProvider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth"
import { setSession } from "./useSession"

export interface CustomUser extends firebase.User{
    reloadUserInfo: {
        screenName: string
    }
}

type Props = {
    callback?: (user: string) => void
}

export const signIn = ({callback}: Props) => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {
        const user = result.user as CustomUser
        setSession(user.reloadUserInfo.screenName)
        
        if (callback) callback(`${user.reloadUserInfo.screenName}`)
    })
    .catch((error) => {
        console.log(error)
    })
}