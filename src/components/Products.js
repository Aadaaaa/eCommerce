import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = useRef(true);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted.current) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted.current = false
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <div>
                <Skeleton height={350} />
            </div>
        );
    };

    const filterProduct = (e) => {
        const updatedList = data.filter((i) => i.category === e);
        setFilter(updatedList)

    }

    const Showproducts = () => {
        return (
            <div>
                <Container className="buttons d-flex justify-content-center mb-5 pb-5">
                    <Button className="btn btn-light btn-outline-dark me-2" onClick={() =>
                        setFilter(data)}> All </Button>
                    <Button className="btn btn-light btn-outline-dark me-2" onClick={() =>
                        filterProduct("men's clothing")}> Men's clothing</Button>
                    <Button className="btn btn-light btn-outline-dark me-2" onClick={() =>
                        filterProduct("women's clothing")}> Women's clothing</Button>
                    <Button className="btn btn-light btn-outline-dark me-2" onClick={() =>
                        filterProduct("jewelery")}> Jewelery</Button>
                    <Button className="btn btn-light btn-outline-dark me-2" onClick={() =>
                        filterProduct("electronics")}> Electronics</Button>
                </Container>

                <Container>
                    <Row>
                        {filter.map((product) => {
                            return (
                                <Col className="col-md-4 mb-3" key={product.id}>
                                    <Card className="h-90 w-auto text-center p-4">
                                        <Card.Img variant="top" src={product.image} alt={product.title} height="300px" />
                                        <Card.Body>
                                            <Card.Title className="mb-0">{product.title.substring(0, 12)}...</Card.Title>
                                            <Card.Text className="card-text lead fw-bold">
                                                {product.price} €
                                            </Card.Text>
                                            <Card.Link href="#" className="btn btn-light btn-outline-dark">Buy now</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    };

    return (
        <div>
            <Container className="container my-5 py-5">
                <Row className="row">
                    <Col className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center" > Latest products </h1>
                    </Col>
                </Row>
                <Row className="row justify-content-center">
                    {loading ? <Loading /> : <Showproducts />}
                </Row>
            </Container>
        </div>
    )
}

export default Products