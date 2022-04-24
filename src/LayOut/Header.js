import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Image, Row, Button, FormControl,Dropdown, Col} from 'react-bootstrap'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs'

export default function Header() {

    
    const navigate = useNavigate();
    const logOut = () => {
        window.sessionStorage.clear()
        alert("You have successfully loggrd out");
        navigate('/login');
    }
    const authToken = window.sessionStorage.getItem('TokenValue');

    return (
        <div>
            <div className='uper-nav'>
                {/* <Container> */}
                    <Row>
                        <Col className='img-box'>
                            <Navbar.Brand as={Link} to="/"><Image src='../../../Image/PetCare-logo.png' className='logo'></Image></Navbar.Brand>
                        </Col>
                        <Col className='user-box'>
                            <NavDropdown title="User" id="basic-nav-dropdown" className='user-element'>
                                {
                                    !authToken ?
                                (<NavDropdown.Item as={Link} to="/login">Log In</NavDropdown.Item>)
                                :
                                (<Button onClick={logOut}>Log Out</Button>)
                            }
                            </NavDropdown>
                        </Col>
                        <Col className="cart-box">
                            <Nav className='cart'>
                                <Dropdown alignRight>
                                    <Dropdown.Toggle varient="success">
                                        <BsCart4 color="white" fontsize="25px" />
                                        {/* <Badge>{10}</Badge> */}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{ minWidth: 370 }}>
                                        <span style={{ padding: 10 }}>Cart is Empty</span>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Col>
                        <Col className='search-box'>
                            <Navbar.Text className='search'>
                                <FormControl
                                    style={{ width: 300 }}
                                    placeholder="Search Products"
                                    className='m-auto'
                                />

                            </Navbar.Text>
                        </Col>
                    </Row>
                {/* </Container> */}
            </div>
            <Navbar className='navbar'>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" className='Nav-Element'>HOME</Nav.Link>
                    <Nav.Link as={Link} to="/about" className='Nav-Element'>ABOUT US</Nav.Link>
                    <Nav.Link as={Link} to="/petproduct" className='Nav-Element'>PHARMACY</Nav.Link>
                    <Nav.Link as={Link} to="/petshop" className='Nav-Element'>SHOP BY PET</Nav.Link>


                    <NavDropdown title="Help" id="basic-nav-dropdown" className='Help-Element'>
                        <NavDropdown.Item as={Link} to="/contact">Contact_US</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/tracking">Track Your Order</NavDropdown.Item>
                    </NavDropdown>

                </Nav>

            </Navbar>
        </div>
    )
}
