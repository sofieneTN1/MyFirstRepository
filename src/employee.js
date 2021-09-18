import React from 'react';
import ReactDOM from 'react-dom';
import {Container,Row,Form, Col,Jumbotron,Button, FormGroup} from 'react-bootstrap'


function Employee() {
    
//   const [showMessage, setShowMessage] = useState(false);

return (

    <Form>
    <Form.Group className="mb-3" controlId="email1">
      <Form.Label>Email address:</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="Password1">
      <Form.Label>Password:</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="Checkbox1">
      <Form.Check type="checkbox" label="Check test" />
    </Form.Group>
    <Button  type="submit">
      Submit
    </Button>
  </Form>
);
}
   
  export default Employee;