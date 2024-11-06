import { Routes, Route } from 'react-router-dom'
import ProfilePage from '../pages/profilePage'
import HomePage from '../pages/home'

const AppRoutes = () => {

    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/profile/:user' element={<ProfilePage/>}/>
        </Routes>
    )
}
export default AppRoutes