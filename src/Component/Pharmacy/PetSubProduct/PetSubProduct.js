import React from 'react'
import { useParams } from 'react-router-dom'
import PetProductObj from '../Pharmacy.json'
import { Card, Button, Col,Container,Row } from 'react-bootstrap';
import './PetSubProduct.css'

export default function PetSubProduct() {

    let data = useParams()
    console.log("Received values in subcat", data)

    let ProductData = PetProductObj.PetProduct.find((x) => x.PetName === data.prodname)
    console.log("Product: ", ProductData);
    return (
        <div className='sub-med'>
            <h3 className='sub-Med-heading'>Medicine Details are here.{ProductData.PetName}</h3>
            <div className='subMed-detail'>
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {
                        ProductData.Pet_Sub.map((psub) => (
                            <Card style={{ width: '18rem' }}>
                                <Col key={psub.Med_ID}  className='med-card'>
                                    <Card.Img variant="top" src={psub.Med_Img} />
                                    <Card.Body>
                                        <Card.Title>{psub.Pet_Med}</Card.Title>
                                        <Card.Title>{psub.Med_price}</Card.Title>
                                        <Card.Text>
                                           {psub.Med_desc}
                                        </Card.Text>
                                        <Button variant="primary">Buy Now</Button>
                                        <Button variant="primary">Add to Cart</Button>

                                    </Card.Body>
                                </Col>
                            </Card>
                        ))
                    }
                </Row>
            </Container>
            </div>
        </div>
    )
}
