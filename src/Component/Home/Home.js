import React from 'react'
import { Carousel, Container, Card, Row, Button } from 'react-bootstrap'
import './Home.css'
import {Link} from 'react-router-dom'
export default function Home() {

    const dog = "Dog_Medicine";
    const bird = "Birds_Medicine";
    const cat = "Cat_Medicine";
    const fish = "Fish_Medicine";
    return (
        <div>
            <div className='heading'>
                <Link as={Link} to="petshop"  className='shop-online'><h1>Shop Online...... & You can get free Home Delivery. Shop Now</h1></Link>
            </div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner-img"
                        src="../../../Image/banner-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Earn a exciting Treatbox</h3>
                        <p>When you shop RS1000 for first time</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 banner-img"
                        src="../../../Image/Banner-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Get 50% off for first order</h3>
                        <p>And also get a exciting gift from our Petcare company</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="../../../Image/banner-3.jpg"
                        alt="Third slide"

                    />
                    <Carousel.Caption>
                        <h3>Don't think to Much</h3>
                        <p>Shop now for exciting prizes for your pet</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <div className='shop-by-pet'>
                    <h3>Shop by Pet</h3>
                    <div className='card-section'>
                        <Row xs={1} md={4} className="g-4">
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='pet-img' src="../../../Image/DogFace.jpg" />
                                <Card.Body>
                                   
                                    <Button variant="outline-success" className='med-button'>
                                            <Link to={`/petsubproduct/${dog}`} className="link-Pet">Dog</Link></Button>
                                </Card.Body>

                            </Card>
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='pet-img' src="../../../Image/Bird.jpg" />
                                <Card.Body>
                                    
                                    <Button variant="outline-success" className='med-button'>
                                            <Link to={`/petsubproduct/${bird}`} className="link-Pet">Bird</Link></Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='pet-img' src="../../../Image/catFace.jpg" />
                                <Card.Body>
                                <Button variant="outline-success" className='med-button'>
                                            <Link to={`/petsubproduct/${cat}`} className="link-Pet">Cat</Link></Button>
                                </Card.Body>
                                
                            </Card>
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='pet-img' src="../../../Image/fish.jpg" />
                                <Card.Body>
                                <Button variant="outline-success" className='med-button'>
                                            <Link to={`/petsubproduct/${fish}`} className="link-Pet">Fish</Link></Button>
                                </Card.Body>
                               
                            </Card>
                        </Row>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='banner'>
                    <h2>Pets are happy when you leave them with Us</h2>
                    <Button className='know-more'>Visit Now to Know More</Button>
                </div>
            </Container>
            <Container>
                <div className='featured-brand'>
                    <h3>Featured Brand</h3>
                    <div className='featured-section'>
                        <Row xs={2} md={6} className="g-4">
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='product-img' src="../../../Image/FeaturedBrand/Cat-food.jpg" />
                                <Card.Body>
                                    <Card.Link href="#" className='featured-product'>Cat Food</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='product-img' src="../../../Image/FeaturedBrand/dog-belt.jpg" />
                                <Card.Body>
                                    <Card.Link href="#" className='featured-product'>Dog Belt</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='product-img' src="../../../Image/FeaturedBrand/fish-food.jpg" />
                                <Card.Body>
                                    <Card.Link href="#" className='featured-product'>Fish Food</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='product-img' src="../../../Image/FeaturedBrand/Organix.jpg" />
                                <Card.Body>
                                    <Card.Link href="#" className='featured-product'>Organix</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='product-img' src="../../../Image/FeaturedBrand/PetNest.jpg" />
                                <Card.Body>
                                    <Card.Link href="#" className='featured-product'>Pet Nest</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='product-img' src="../../../Image/FeaturedBrand/royel-canin.jpg" />
                                <Card.Body>
                                    <Card.Link href="#" className='featured-product'>Royel Canin</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='product-img' src="../../../Image/FeaturedBrand/pet-higgies.jpg" />
                                <Card.Body>
                                    <Card.Link href="#" className='featured-product'>Pet Huggies</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='product-img' src="../../../Image/DogsMed/Atopica.jpg" />
                                <Card.Body>
                                    <Card.Link href="#" className='featured-product'>Atopica</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='product-img' src="../../../Image/DogsMed/trazodone.jpg" />
                                <Card.Body>
                                    <Card.Link href="#" className='featured-product'>Trazodone</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }} className='card-img'>
                                <Card.Img variant="top" className='product-img' src="../../../Image/BirdMed/beaphor.png" />
                                <Card.Body>
                                    <Card.Link href="#" className='featured-product'>Beaphor</Card.Link>
                                </Card.Body>
                            </Card>

                        </Row>
                    </div>
                </div>
            </Container>
        </div >
    )
}
