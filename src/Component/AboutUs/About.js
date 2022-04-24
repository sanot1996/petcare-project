import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './About.css'

export default function About() {
  return (
    <div className='about-section'>
      <h1>About Us</h1>
      <Container>
        <Row>
          <Col>
            <Image className='About-banner' src="../../../Image/About-banner.jpg"></Image>
          </Col>
          <Col>
            <div className='about-petcare'>
              <span>ThePetCare is your one-stop online pet supply store, where you can find high-quality pet supplies, which helps your pet at every life-stage. ThePetCare will help you choose the most appropriate dog food, supplements, treats, toys, dog accessories. Not only that but also for cats, rabbits, hamsters, turtles, birds & aquatic animals. At “ThePetCare” we believe in a safe and happy world where pets get their way every day. This means enabling your pet to live life to its fullest.
                <br />
                Our Mission is not only to provide you with best products for your lovely pets but also a great service. We have experts which work round the clock to answer your queries & to help you provide your pet what they deserve, "A Happy & healthy life". We are just a message away. Contact us on "+91-8309412517" anytime 24*7. We ourselves being Pet Parents know you want best for pets & we would help you get that.
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
