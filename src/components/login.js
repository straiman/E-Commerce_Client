import React from 'react';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function Login(props) {
    return <Form>
        <FloatingLabel
            controlID="floatingInput"
            label="Email address"
            classname="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
            controlID="floatingPassword"
            label="Password">
                <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button variant="primary" type="button">
            Log In
        </Button>
    </Form>;
}
export default Login;