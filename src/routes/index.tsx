import { Routes, Route } from 'react-router-dom'
import ProfilePage from '../pages/profilePage'
import HomePage from '../pages/home'
import { useEffect, useState } from 'react'
import { getSession } from '../hooks/useSession'

const AppRoutes = () => {

    const [user, setUser] = useState<string | null>()
    
    const verifySession = () => {
        const session = getSession()
        if (session.login){
            setUser(session.login)
        }
        else{
            setUser(null)
        }
    }

    useEffect(verifySession, [])

    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/profile/:user' element={<ProfilePage updateUser={verifySession} userLogged={user}/>}/>
        </Routes>
    )
}
export default AppRoutes