import axios from "axios";

const CartItem = (props) => {
    const imagePath = `http://localhost:3001/${props.game.img}`

    const handleRemoveFromCart = (itemId) => {
        axios.post("http://localhost:3001/cart/delete", {
            cartId: localStorage.getItem('cartId'),
            itemId: itemId
        })
        window.location.reload(false);
    }

    return (
        <div id="game">
            <img src={imagePath} />
            <div id="content">
                <h1>{props.game.name}</h1>
                <p>{props.game.price}Kč</p>
                <button id="btn-remove" onClick={handleRemoveFromCart.bind(this, props.game._id)}>Odebrat z košíku</button>
            </div>
        </div>
    );
}

export default CartItem;