const RecentGame = (props) => {
    const imagePath = `http://localhost:3001/${props.game.img}`

    return (
        <div id="game">
            <img src={imagePath}/>
            <div id="content">
                <h1>{props.game.name}</h1>
                <p>{props.game.genre}</p>
                <p>{props.game.description}</p>
                <p>{props.game.price}Kč</p>
            </div>
        </div>
    );
}
 
export default RecentGame;