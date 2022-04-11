import { Nav } from "react-bootstrap";

const NavBotResp = () => {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link id="bot-link">PLAYSTATION</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="bot-link">XBOX</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="bot-link">PC</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="bot-link">NINTENDO</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavBotResp;