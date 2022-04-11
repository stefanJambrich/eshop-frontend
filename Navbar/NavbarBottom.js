import { Navbar } from "react-bootstrap";
import NavBotResp from "./NavBotResp";

const NavbarBottom = ({props}) => {
    return (
        <Navbar collapseOnSelect expand="lg" className="nav-bottom">
            <Navbar.Collapse>
                <NavBotResp />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarBottom;