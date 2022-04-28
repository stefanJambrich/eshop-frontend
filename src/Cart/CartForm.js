import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const CartForm = (props) => {
    const navigate = useNavigate();
    
    const handleClearCart = (e) => {
        e.preventDefault()
        console.log(props.items)
        if (props.items > 0) {
            console.log('in if')
            axios.post("http://localhost:3001/cart/ordered", {
                cartId: localStorage.getItem('cartId')
            })
            navigate('/cart/ordered');
        }
    }

    return (
        <div id="cart-form-wrapper">
            <div>
                <h3>Doprava:</h3>
                <ul>
                    <li>
                        <p>Vyzvednutí na kamenné prodejně</p>
                        <p>Zdarma</p>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Platba:</h3>
                <ul>
                    <li>
                        <p>Při předání zásilky</p>
                        <p>Zdarma</p>
                    </li>
                </ul>
            </div>
                <h3>Doručovací informace:</h3>
            <div id="form">
                <Form id="form-wrapper">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Jméno</Form.Label>
                        <Form.Control type="text" placeholder="Jméno" id="input" required/>
                        <Form.Text className="text-muted">
                            *Toto pole je povinné
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSurname">
                        <Form.Label>Příjmení</Form.Label>
                        <Form.Control type="text" placeholder="Příjmení" id="input" required/>
                        <Form.Text className="text-muted">
                            *Toto pole je povinné
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Emailová adresa</Form.Label>
                        <Form.Control type="email" placeholder="Email" id="input" required/>
                        <Form.Text className="text-muted">
                            *Toto pole je povinné
                        </Form.Text>
                    </Form.Group>
                    
                    <Button onClick={handleClearCart.bind(this)} variant="success">Odeslat objednávku</Button>
                </Form>
            </div>
        </div>
    );
}

export default CartForm;