import axios from "axios";

const RecentGame = (props) => {
    const imagePath = `http://localhost:3001/${props.game.img}`

    const handleAddToCart = (itemId) => {
        axios.post(`http://localhost:3001/${props.address}`, {
            itemId: itemId,
            cartId: localStorage.getItem('cartId')
        })
    }

    const renderButton = () => {
        if (!props.renderButton) {
            return <button id="btn-add" onClick={handleAddToCart.bind(this, props.game._id)}>Přidat do košíku</button>
        }
    }

    return (
        <div id="game">
            <img src={imagePath}/>
            <div id="content">
                <h1>{props.game.name}</h1>
                <p><strong>Žánry:</strong> {props.game.genre}</p>
                <p><strong>Popisek:</strong> {props.game.description}</p>
                <p><strong>Cena:</strong> {props.game.price}Kč</p>
                {renderButton()}
            </div>
        </div>
    );
}

export default RecentGame;