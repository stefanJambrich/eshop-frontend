import { Nav } from "react-bootstrap";

const NavBotResp = () => {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link id="bot-link" href="/playstation/1">PLAYSTATION</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="bot-link" href="/xbox/1">XBOX</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="bot-link" href="/pc/1">PC</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="bot-link" href="/nintendo/1">NINTENDO</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavBotResp;