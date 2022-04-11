import { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import { AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import NavbarBottom from "./NavbarBottom";
import NavBotResp from "./NavBotResp";

const NavbarMain = () => {
    const [collapse, setCollapse] = useState(false)

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
                <Container>
                    <Navbar.Brand href="#home">SoyGamer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => { setCollapse(!collapse) }} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="me-auto">
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Hledat"
                                    className="me-2 search-input"
                                    aria-label="Search"
                                    htmlSize={50}
                                />
                                <Button bsPrefix="search-btn">
                                    <AiOutlineSearch />
                                </Button>
                            </Form></Nav>
                        <Nav>
                            <Nav.Link href="" className="cart"><FiShoppingCart />  Košík</Nav.Link>
                        </Nav>
                        {collapse && <NavBotResp />}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <NavbarBottom/>
        </>
    );
}

export default NavbarMain;