import { Routes, Route } from 'react-router-dom'
import { Usuarios } from '../pages/Usuarios'
export default function AppRouter() {

    return(
        <>

            <Routes>
                <Route path="/" element={<Usuarios />} />
            </Routes>   
        </>
    )
}