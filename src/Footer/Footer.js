import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'
// import {FontAwesomeIcon} from 'react-icons' 

export default function Footer() {
    return (
        <div className='main-footer'>
            <hr />
            <Container>
                <Row>
                    <Col >
                        {/* column:1  */}
                        <h4>PetCare</h4>
                        <ul className='list-unstyled'>
                            <li className='my-text'>(123)-2256-4458</li>
                            <li className='my-text'>Kolkata,India</li>
                            <li className='my-text'>25,Salt lake sector3,<br /> Newtown Kolkata-001</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className='quick-links'>Quick Links</h4>
                        <ul className='list-unstyled'>
                            <li className='my-text'><Link as={Link} to="/petproduct" className='pharma'><span>Pharmacy</span></Link></li>
                            <li className='my-text'><Link as={Link} to="/petshop" className='pharma'>Shop by Pet</Link></li>
                            <li className='my-text'><Link as={Link} to="/contact" className='pharma'>Contact Us</Link></li>
                        </ul>
                    </Col>
                    <Col>
                    <h4>Social Links</h4>
                        <ul className='list-unstyled'>
                            <li className='footer-icon'><i class="fa-brands fa-facebook"></i></li>
                            <li className='footer-icon'><i class="fa-brands fa-instagram"></i></li>
                            <li className='footer-icon'><i class="fa-brands fa-twitter"></i></li>
                            <li className='footer-icon'><i class="fa-brands fa-pinterest"></i></li>
                        </ul>
                    </Col>
                    <Col>
                        <Link as={Link} to="/home"><Image src='../../../Image/PetCare-logo.png' className='logo'></Image></Link>
                    </Col>
                </Row>
                <Row className='company'>
                    <Col>
                        <p className='my-text'>
                            &copy;{new Date().getFullYear()} PetCare INC
                        </p>
                    </Col>
                    <Col>
                        <p className='my-text'>
                            | All right reserved | Terms Of Services | Privacy
                        </p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
