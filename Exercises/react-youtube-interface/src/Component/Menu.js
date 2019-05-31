import React from  'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Img from  'react-bootstrap/Image';
import gksd from "../assets/youtube.png";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

class Menu extends React.Component{

    state={
        keyword:''
    }

    handleChange = evt =>{
       // console.log(evt.target.value)
        this.setState(
            {keyword:evt.target.value}
        )
    }
  
    render(){

        return(<Row>
            <Col sm={2}>
            <Img src = {gksd}/>
            </Col>
            <Col sm={6}>
            <Form onSubmit={this.props.handleSubmit(this.state.keyword)}>
            <Form.Control type ="text" value={this.state.keyword} onChange={this.handleChange}/>
            <ListGroup>
  <ListGroup.Item></ListGroup.Item>
  <ListGroup.Item variant="primary"></ListGroup.Item>
  <ListGroup.Item variant="secondary"></ListGroup.Item>
  <ListGroup.Item variant="success"></ListGroup.Item>
  <ListGroup.Item variant="danger"></ListGroup.Item>
  <ListGroup.Item variant="warning"></ListGroup.Item>
  <ListGroup.Item variant="info"></ListGroup.Item>
  <ListGroup.Item variant="light"></ListGroup.Item>
  <ListGroup.Item variant="dark"></ListGroup.Item>
</ListGroup>
           
            <Button type="button"  size ="lg" />
            </Form>
           
            
            </Col>
            <Col sm={4}>
            
            </Col>
    
            </Row>);
    }
}

export default Menu;