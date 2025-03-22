import { useState, useEffect } from 'react'
import { api } from '../routes/api'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ListView() {

    const [Usuarios, setUsuarios] = useState([])

    console.log(Usuarios)

    useEffect(() => {
        api.get('/users')
            .then(response => {
                setUsuarios(response.data)
            })
            .catch(error => {
                console.error(error)
            })

            
            
    }, [])

    const navigate = useNavigate()

    async function deleteUser(id) {
        await api.delete(`/users/${id}`)
            .then(() => {
                setUsuarios(Usuarios.filter(user => user.id !== id));
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th colSpan={2}>Cargo</th>
                    </tr>
                </thead>
                <tbody>
                    {Usuarios.map((user) => {
                        return (
                            <tr key={user.id} className='align-middle'>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                
                                    <td className='text-center'>
                                        <Button className='mx-2' variant='outline-primary' onClick={() => navigate(`/editlist/${user.id}`)}>Editar</Button>
                                        <Button variant='outline-danger' onClick={() => deleteUser(user.id)}>Deletar</Button>                                    </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
    </>
    );
}

export default ListView;