import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


function LoginDetailForm(props) {
    
    const [validated, setValidated] = useState(false);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }else{
            props.onSubmit({username,email,password})    
        }
        setValidated(true);
        
      };

    return (
        <Form 
            className={!props.isActive && 'd-none'} 
            noValidate 
            validated={validated} 
            onSubmit={handleSubmit}
        >
            <Form.Group controlId="formGroupUsername">
                <Form.Label>Username: </Form.Label>
                <Form.Control
                    required
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={ (e)=>{setUsername(e.target.value)} } 
                />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    required 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={ (e)=>{setEmail(e.target.value)} } 
                />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={ (e)=>{setPassword(e.target.value)} } 
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Next
            </Button>
        </Form>
    );
}

export default LoginDetailForm;
