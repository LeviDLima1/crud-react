import { useState, useEffect } from 'react'
import { api } from '../routes/api'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

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

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cargo</th>
                        <td colSpan={2}></td>
                    </tr>
                </thead>
                <tbody>
                    {Usuarios.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                
                                    <td>
                                        <Button  variant='outline-primary'>Editar</Button>
                                        <Button variant='outline-danger'>Deletar</Button>
                                    </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
    </>
    );
}

export default ListView;