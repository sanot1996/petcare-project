import React from 'react'
import { Container, Row ,Card,Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import petshopObj from '../PetShop.json'
import './PetSubShop.css'

export default function PetSubShop() {

    let value=useParams();
    console.log("Received by petsub Shop : ",value);

    let petshopData=petshopObj.PetShop.find((y)=>y.PetshopName===value.petProdname)
    console.log("Pet shop : ",petshopData);
  return (
    <div className='pet-sub-shop' style={{ backgroundImage: "url(/Image/bg-img-3.jpg)" }}>
       <h1>Best Kennel.</h1>
      <div className='detail-pet'>
        <Container>
          <Row xs={1} md={4}>
            {
              petshopData.PetShop_sub.map((psub)=>(
                <Col key={psub.SubShop_id}>
                <Card >
                <Card.Img variant="top" className='petsub-img' src={psub.SubShop_img} />
                <Card.Body>
                  <Card.Title>{psub.SubShop_name}</Card.Title>
                  <Card.Title>{psub.SubShop_Price}</Card.Title>
                  <Card.Text>
                    {psub.SubShop_desc}
                  </Card.Text>
                </Card.Body>
                <Button type='submit'>Add to Cart</Button>
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
