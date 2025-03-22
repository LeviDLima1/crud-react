import Button from 'react-bootstrap/Button'
import { useEffect } from 'react'
import { api } from '../routes/api'
import { useNavigate, useParams } from 'react-router-dom';
export default function EditList() {

      const navigate = useNavigate();

      const { id } = useParams();
    
      function handleUpdateList(event) {
        event.preventDefault(); // Evita o recarregamento da página
    
        const formData = new FormData(event.target); // Captura os dados do formulário
        const updatedUser = {
            name: formData.get("name"),
            email: formData.get("email"),
            role: formData.get("role")
        };
    
        api.put(`/users/${id}`, updatedUser)
            .then(() => {
                alert("Usuário atualizado com sucesso!");
                navigate("/"); // Redireciona após a atualização
            })
            .catch(error => console.error("Erro ao atualizar usuário:", error));
    }

      useEffect(() => {
            api.get(`/users/${id}`)
                   .then(response => console.log(response.data))
      }, []);
      
    return(
        <>
        <div className='container w-25 mt-5'>
            <div>
                <Button variant='outline-dark' onClick={() => navigate('/')}>Voltar</Button>
            </div>
            <form onSubmit={handleUpdateList}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome:</label>
                    <input type="text" className="form-control" id="name" name="name" />

                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Email:</label>
                    <input type="text" className="form-control" id="email" name="email" />
                </div>
                <label htmlFor="category" className="form-label">Categoria:</label>
                <select className='form-select' name="role" id="role">
                    <option  value="">Selecionar Categoria</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Convidado">Convidado</option>
                    <option value="Usuário">Usuário</option>
                    <option value="Outro">Outro</option>
                </select>
                
                <Button variant='primary' type='submit'>Atualizar</Button>
                

            </form>
        </div>
            
        </>
    )
}