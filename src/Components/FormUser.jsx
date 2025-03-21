import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { api } from '../routes/api'
export default function FormUser() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          console.log('falso')
        }
        else {
            // Fazendo o POST na API
            api.post('/users', {
                name: event.target.name.value,
                email: event.target.email.value,
                role: event.target.role.value
            })
            .then(() => {
                alert('Formulário enviado com sucesso!');
                console.log('Formulário enviado com sucesso!');
            })
            .catch((error) => {
                console.error('Erro ao enviar formulário:', error);
            });
        }
        setValidated(true);
      };
    


    return(
        <>
        <div className=''>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Seu Nome</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter name" 
                    name='name'
                    required/>
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Seu Email</Form.Label>
                    <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            required 
                            name="email" // Adicionando o 'name' para acessar o valor do input
                        />
                    <Form.Text className="text-muted">
                        Nós nunca iremos compartilhar seu email com ninguem.
                    </Form.Text>
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicRole">
                    <Form.Label>Defina o cargo</Form.Label>
                    <Form.Select 
                    name="role"
                    required>
                        <option value="admin">Administrador</option>
                        <option value="user">Usuario</option>
                        <option value="guest">Convidado</option>
                        <option value="other">Outro</option>
                    </Form.Select>
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
            
        </>
    )
}