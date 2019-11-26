import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function PersonalDetailForm(props) {
    const [validated, setValidated] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            props.onSubmit({ phoneNumber, address, city, state, zipcode })
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
            <Form.Group as={Row} controlId="formPlaintextUsername">
                <Form.Label column sm="2">
                    Username
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={props.userFormDetail.username} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={props.userFormDetail.email} />
                </Col>
            </Form.Group>
            <br />
            <Form.Group controlId="formGroupPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => { setPhoneNumber(e.target.value) }}
                />
            </Form.Group>
            <Form.Group controlId="formGroupAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    required
                    as="textarea"
                    rows="3"
                    value={address}
                    onChange={(e) => { setAddress(e.target.value) }}
                />
            </Form.Group>
            <Form.Group controlId="formGroupCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => { setCity(e.target.value) }}
                />
            </Form.Group>
            <Form.Group controlId="formGroupState">
                <Form.Label>State</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={(e) => { setState(e.target.value) }}
                />
            </Form.Group>
            <Form.Group controlId="formGroupZipcode">
                <Form.Label>Zip code</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Zip code"
                    value={zipcode}
                    onChange={(e) => { setZipcode(e.target.value) }}
                />
            </Form.Group>

            <Button variant="secondary" type="button" onClick={props.onBack}>
                Back
            </Button>
            <Button variant="primary" type="submit">
                Next
            </Button>
        </Form>
    );
}

export default PersonalDetailForm;
