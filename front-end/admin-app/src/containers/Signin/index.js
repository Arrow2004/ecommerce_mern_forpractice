import React from "react";
import Layout from "../../components/Layouts";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../UI/Input";
export default function Signin() {
  return (
    <Layout>
      <Container className="me-auto ">
        <Row style={{marginTop: '50px'}}>
          <Col md={{span: 6, offset: 3}}>
            <Form>
              <Input label="Email address" type="email" placeholder="Enter email" errMessage="We'll never share your email with anyone else." value="" onChange={()=>{}} />
              <Input label="Password" type="password" placeholder="Password" errMessage="" value="" onChange={()=>{}} />
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
