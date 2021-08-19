import React from 'react';
import { Col, Card, Button } from "react-bootstrap";


export const AddressComponent = (address) => {

    const addressCard = ({}) => {

        return <Col className="col-3">
              <Card style={{ width: '15rem', height: '14rem' }}>
                <Card.Body>
                  <Card.Title>Address</Card.Title>
                  <Card.Text>
                   Address Details
                  </Card.Text>
                  <Button variant="warning">edit</Button>
                  <Button variant="warning">delete</Button>
                </Card.Body>
              </Card>
          </Col>      
      }
  
      const listOfAddress = () => {
  
       return address.map((item) => {
            return addressCard(item)
        });
        
      }


    return  <div className="d-flex flex-row flex-nowrap overflow-auto">
        {Array.isArray(address) && listOfAddress()}
    </div>


}