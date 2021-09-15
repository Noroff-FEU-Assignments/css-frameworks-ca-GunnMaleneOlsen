import React from "react";
import { Button, Form } from "react-bootstrap";

function Forms() {
   /* const input = document.getElementById('formBasicUrl').value;
    console.log(input); 
    function validateUrl(value) {
        try {
            const currentUrl = new URL(value);
            const { protocol } = currentUrl;

            if (protocol !== 'http:' && protocol !== 'https:') {
                currentUrl.protocol = 'http:';
                return currentUrl.toString();
            }
        } catch(e) {
            return `http://${value}`;
        }
    */
  // const protocol = "https:/";
  return (    
      
    <div className="form">
      <h1 className="form__header">Submit your details</h1>
      <Form className="form__input-wrapper">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUrl">
          <Form.Label>Website</Form.Label>
          <Form.Control type="url" ></Form.Control>
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
