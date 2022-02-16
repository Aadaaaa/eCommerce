import { Card, Container } from 'react-bootstrap';
import img2 from '../assets/img2.jpg'
import classes from './Home.module.css';

const Home = () => {
    return (
        <div>
            <Card className="bg-dark text-white border-0">
                <Card.Img src={img2} alt="Background" />
                <Card.ImgOverlay>
                    <Container>
                        <Card.Title className={classes.title}>NEW SEASON ARRIVALS</Card.Title>
                        <Card.Text className={classes.text}>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text className={classes.text}>Last updated 3 mins ago</Card.Text>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Home