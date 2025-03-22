import List from '../Components/List'
import FormUser from '../Components/FormUser.jsx'
import ModalForm from '../Components/ModalForm.jsx'
export function Usuarios() {

    
    
    return (
        <>
            <div className='container'>
                <div className='my-4 '>
                <ModalForm>
                    <FormUser />
                </ModalForm>
                </div>
                
                <h1>Listado de Usuarios</h1>
                <List/>
                
                
            </div>
        </>
    )
}

