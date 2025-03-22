
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Bem-vindo à nossa aplicação!</h1>
      <div className="mt-4">
        <Link to="/usuarios">
          <Button variant="primary" className="m-2">Ver Usuários</Button>
        </Link>
        <Link to="/produtos">
          <Button variant="success" className="m-2">Ver Produtos</Button>
        </Link>
      </div>
    </Container>
  );
};
