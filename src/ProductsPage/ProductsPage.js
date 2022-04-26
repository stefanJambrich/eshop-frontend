import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useParams } from "react-router-dom";
import RecentGame from "../RecentGames/RecentGame";

const ProductsPage = (props) => {
    const [games, setGames] = useState([]);
    let { page } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3001/playstation').then(res => {
            setGames(res.data);
        });
    }, []);

    return (
        <div id="wrapper">
            <h2 id="products-title">{props.title}</h2>
            <div id="game-list">
                {games.slice(10 * (page - 1), 10 * page).map((game) => (
                    <RecentGame game={game} key={game.id}/>
                ))}
            </div>
            <Pagination>
                    {
                        [...Array(Math.ceil(games.length / 10)).keys()].map((num) => {
                            num++;
                            return (
                                    <Pagination.Item active={page === num} href={`/${props.address}/${num}`}>
                                        {num}
                                    </Pagination.Item>
                            );
                        })
                    }
                </Pagination>
        </div>
    );
}

export default ProductsPage;