import React, { useReducer, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSignup, onLogin, onViewProfile  } from '../store/actions'
import { Container, Form, Button, Row, Tabs, Tab, Col } from "react-bootstrap";
import { AddressComponent } from "../components/Address-comp";

//load Shopping profile

const Login = () => {

    const { user, profile } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const { id, token } = user;

    const { address, whishlist, orders } = profile;
    

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    useEffect(() => {
        if(token){
            dispatch(onViewProfile())
        }
    },[token])
 
    const userSignup = () => {
        //call Signup
    }
 
    const userLogin = () => {
        dispatch(onLogin({email, password}));
    }
 
    const checkShoppingProfile = () => {
        if(token){
            return shoppingProfile()
        }else{
            return loginForm();
        }
    }

    const shoppingProfile = () => {
        return <Row >
                <h1> Shopping Profile </h1>

            <Row style={{ height: '15rem' }}>
                <label>Your Delivery Address </label>
                <AddressComponent address={address} />
            </Row>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    profile
                </Tab>
                <Tab eventKey="contact" title="Contact">
                   contact
                </Tab>
            </Tabs>
             
        </Row>
    }

    const loginForm = () => {
        return <Row>
            <h1> Login </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={() => userLogin()} type="button">
                    Login
                </Button>
                <Button variant="primary" type="button">
                    Signup
                </Button>
            </Form>
        </Row>

    }

    const signUpForm = () => {
        return <Row>
            <h1> Signup </h1>
             
        </Row>

    }


 
    return <Container>
            {checkShoppingProfile()}  
        </Container>


}


export { Login };