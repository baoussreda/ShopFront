import React, { useReducer, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSignup, onGetProducts  } from '../store/actions'
import {  Button, Badge, Row, Col, Container, Image, ButtonGroup, Card } from "react-bootstrap";

const Home = () => {
  
    const { categories, products } = useSelector(state => state.shoppingReducer);

    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(onGetProducts())      
    },[]);

    const listOfcategories = () => {
       return <ButtonGroup aria-label="Basic example">
          {categories.map(item => {
              return <Button variant="warning" size="lg" text="dark">
               {item.toUpperCase()}
             </Button>
          })}
      </ButtonGroup>
    }

    const productCard = ({banner, available, price, name, desc, type}) => {

      return <Col className="col-3">
            <Card style={{ width: '15rem', height: '25rem' }}>
              <Card.Img variant="top" src={banner} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {desc}
                </Card.Text>
                <Button variant="warning">add</Button>
                <Button variant="warning">fav</Button>
              </Card.Body>
            </Card>
        </Col>      
    }

    const listOfProducts = () => {

     return products.map((item) => {
          return productCard(item)
      })
      
    }

    return (
      <Container className="container-fluid">
        <Image src="bg.jpg" fluid />
        <Row>
          <Col>{categories && listOfcategories()}</Col>
        </Row>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
            {products && listOfProducts()}
        </div>
      </Container>
    )
    
    

}


export { Home };

 