import axios from "axios";

const RecentGame = (props) => {
    const imagePath = `http://localhost:3001/${props.game.img}`

    const handleAddToCart = (itemId) => {
        axios.post(`http://localhost:3001/${props.address}`, {
            itemId: itemId,
            cartId: localStorage.getItem('cartId')
        })
    }

    return (
        <div id="game">
            <img src={imagePath}/>
            <div id="content">
                <h1>{props.game.name}</h1>
                <p>Žánry: {props.game.genre}</p>
                <p>{props.game.description}</p>
                <p>{props.game.price}Kč</p>
                <button id="btn-add" onClick={handleAddToCart.bind(this, props.game._id)}>Přidat do košíku</button>
            </div>
        </div>
    );
}
 
export default RecentGame;