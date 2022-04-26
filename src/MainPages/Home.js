import { Row } from "react-bootstrap";
import CarouselMain from "../Carousel/CarouselMain";
import RecentGamesList from "../RecentGames/RecentGamesList";

const Home = () => {
    return (
        <>
            <Row>
                <CarouselMain />
            </Row>
            <Row>
                <RecentGamesList />
            </Row>
        </>
    );
}

export default Home;