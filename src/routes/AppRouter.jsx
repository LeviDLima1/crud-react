import { Routes, Route } from 'react-router-dom'
import { Usuarios } from '../pages/Usuarios'
import EditList from '../Pages/EditList'
export default function AppRouter() {

    return(
        <>

            <Routes>
                <Route path="/" element={<Usuarios />} />
                <Route path='/editlist/:id' element={<EditList />} />
            </Routes>   
        </>
    )
}