import React from 'react'
import { Row, Card, Button, Col,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PetProductObj from '../Pharmacy.json';
import './PetProduct.css'

export default function PetProduct() {
    return (
        <div className='pet-product'>
            <h1>Pet-Catagories are shown here</h1>
            <Container>
                <Row xs={1} md={3} lg={4}>
                    {
                        PetProductObj.PetProduct.map((prod) => (
                            <Col key={prod.Pet_ID}>
                                <Card style={{ width: '15rem' }} className="my-card">
                                    <Card.Img variant="top" className='pet-img' src={prod.Pet_Img} />
                                    <Card.Body>
                                        <Card.Title>{prod.PetName}</Card.Title>
                                        <Card.Text>
                                            {prod.Pet_Desc}
                                        </Card.Text>
                                        <Button variant="danger"><Link to={`/petsubproduct/${prod.PetName}`}className='view-med'>View Medicine</Link></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}
