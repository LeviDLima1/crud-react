import { Routes, Route } from 'react-router-dom'
import { Usuarios } from '../pages/Usuarios'
import EditList from '../Pages/EditList'
import Header from '../layout/Header'
import Home from '../pages/Home'
export default function AppRouter() {

    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/usuarios' element={<Usuarios />} />
                <Route path='/editlist/:id' element={<EditList />} />
            </Routes>   
        </>
    )
}