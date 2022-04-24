import React from 'react'
import { Col, Button, Card, Row, Container } from 'react-bootstrap'
import petshopObj from '../PetShop.json'
import { Link } from 'react-router-dom'
import './PetShop.css'
// import background from '../../../Image/bg-img-2.jpg'

export default function PetShop() {
  return (
    <div className='shop-pet-kennel' style={{ backgroundImage: "url(/Image/bg-img-2.jpg)" }}>
      <h1 className='pet-shop-heading'>You can buy Healthy Pet from our kennel and firm.</h1>
      <div className='kennel-section'>
        <Container>
          <Row xs={1} md={4} className="g-4">
            {
              petshopObj.PetShop.map((prod) => (
                <Col key={prod.Pet_Id} >
                  <Card style={{ width: '16rem' }}>

                    <Card.Body className='card-kennel'>
                      <Card.Title>{prod.PetshopName}</Card.Title>
                      <Card.Text>
                        {prod.Pet_Desc}
                      </Card.Text>
                      <Button variant="outline-warning">
                        <Link to={`/petSubShop/${prod.PetshopName}`} className='kennel-btn'>View Kennel</Link></Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    </div>
  )
}
