import axios from "axios";
import { useEffect, useState } from "react";
import CartForm from "./CartForm";
import CartItem from "./CartItem";

const Cart = () => {
    const [ orderedGames, setOrderedGames] = useState([])
    let totalPrice = 0;

    const getData = () => {
        axios.post("http://localhost:3001/cart", { cartId: localStorage.getItem('cartId') }).then(res => {
        setOrderedGames(res.data)
    });
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div id="wrapper-cart">
            <h2>Objednávka:</h2>
            {orderedGames.map(game => {
                totalPrice += parseInt(game.price)
                return <CartItem game={game} onRemove={getData} />
            })}
            <div id="price-wrapper">
                <p id="price">Celková cena: {totalPrice},00 Kč</p>
            </div>
            <CartForm items={orderedGames.length} />
        </div>
    );
}

export default Cart;