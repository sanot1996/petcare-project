import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Form, Button,Image } from 'react-bootstrap';
import './Contact.css'

export default function Feedback() {

    const vaildateEmail = RegExp('^([a-z0-9._]+)@([a-z]{5,12}).([a-z.]{2,20})$');
    // exapmple: abc11@gmail.com
    const validatePwd = RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#%&*]).{4,15}$')
    // example : aB1@ 
    const validatePhn = RegExp('[6789]{1}[0-9]{9}')

    const [inputState, setInputState] = useState({
        isError: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phone: ''

        }
    })

    const handleChange = (event) => {
        event.persist();
    
        let { name, value } = event.target;
        let isErr = { ...inputState.isError };
        switch (name) {
            case "firstname":
                isErr.firstname =
                    value.length < 4 ? "* Atleast 4 character required" : "";
                break;
            case "lastname":
                isErr.lastname =
                    value.length < 4 ? "* Atleast 4 character required" : "";
                break;
            case "email":
                isErr.email = vaildateEmail.test(value) ? "" : "wrong pattern";
               
                break;
            case "password":
                isErr.password = validatePwd.test(value) ? "" : "wrong pattern";
                
                break;
            case "phone":
                isErr.phone = validatePhn.test(value) ? "" : "wrong pattern";
               
                break;
            default: break;
        }
        setInputState({ ...inputState, [name]: value, isError: isErr })
        console.log("Errors : ", inputState.isError);
        
    }
    const submitHandler = (event) => {
        event.preventDefault()
        console.log("After submition Received value is : ", inputState);
    }
    return (
        <div  className="form-class">
         
            <Row>
                <Col>
                <Image className='contact-img' src="../../../Image/bg-img-2.jpg"></Image>
                </Col>
            <Col >
                
                    <div className='form-section'>
                        <Form onSubmit={submitHandler}>

                            <Form.Group className="mb-3" controlId="formBasicFirstName" >
                                <Form.Label>First_Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your F_name" name="firstname" onChange={handleChange} className='box-width'/>
                                {inputState.isError.firstname.length > 0 &&
                                    <span className='error'>({inputState.isError.firstname})</span>}
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label>Last_Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your l_name" name="lastname" onChange={handleChange} className='box-width'/>
                                {inputState.isError.lastname.length > 0 &&
                                    <span className='error'>({inputState.isError.lastname})</span>}
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} className='box-width'/>
                                {inputState.isError.email.length > 0 &&
                                    <span className='error'>({inputState.isError.email})</span>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="*******" name="password" onChange={handleChange} className='box-width'/>
                                {inputState.isError.password.length > 0 &&
                                    <span className='error'>({inputState.isError.password})</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="+910000000000" name="phone" maxLength={10} onChange={handleChange} className='box-width'/>
                                {inputState.isError.phone.length > 0 &&
                                    <span className='error'>({inputState.isError.phone})</span>}
                            </Form.Group>

                            <Button variant="primary" type="submit" className='btn-button'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                
            </Col>
            </Row>
        </div>
    )
}
