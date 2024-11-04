import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {

    return(
        <Routes>
            <Route path='/' element={<h1>HomePage</h1>}/>
            <Route path='/profile' element={<h1>ProfilePage</h1>}/>
        </Routes>
    )
}
export default AppRoutes