import { Routes, Route } from 'react-router-dom'
import ProfilePage from '../components/header'

const AppRoutes = () => {

    return(
        <Routes>
            <Route path='/' element={<h1>HomePage</h1>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
    )
}
export default AppRoutes