import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">AXIOS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Tabelas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/usuarios">Usuários</NavDropdown.Item>
                            <NavDropdown.Item href="/produtos">Produtos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Extra Button
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;