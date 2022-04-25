import axios from "axios";
import { useEffect, useState } from "react";
import RecentGame from "./RecentGame";

const RecentGamesList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/').then(res => {
            setGames(res.data);
        });
    }, []);

    return (
        <>
            <h2 id="games-list-title">Nejpopulářnější hry: </h2>
            <div id="games-list">
                {games.map((game) => (
                    <RecentGame game={game} />
                ))}
            </div>
        </>
    );
}

export default RecentGamesList;