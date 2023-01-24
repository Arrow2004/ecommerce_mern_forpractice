import React from 'react'
import Layout from '../../components/Layouts'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from '../UI/Input';
export default function Signup() {
  return (
    <Layout>
        <Container className="me-auto ">
        <Row style={{marginTop: '50px'}}>
          <Col md={{span: 6, offset: 3}}>
            <Form>
                <Row>
                    <Col md={{span: 6, offset: 0}}>
                        <Input label="First name" type="text" placeholder="First Name" errMessage="" value="" onChange={()=>{}}/>
                    </Col>
                    <Col md={{span: 6, offset: 0}}>
                        <Input label="Last name" type="text" placeholder="Last name" errMessage="" value="" onChange={()=>{}}/>
                    </Col>
                </Row>
              <Input label="Email address" type="email" placeholder="Enter email" errMessage="We'll never share your email with anyone else." value="" onChange={()=>{}}/>
              <Input label="Password" type="password" placeholder="Password" errMessage="" value="" onChange={()=>{}}/>
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
  )
}
