import { Nav } from "react-bootstrap";

const NavBotResp = () => {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link id="bot-link" href="/playstation">PLAYSTATION</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="bot-link" href="/xbox">XBOX</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="bot-link" href="/pc">PC</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="bot-link" href="/nintendo">NINTENDO</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavBotResp;