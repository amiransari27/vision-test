import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import LoginDetailForm from '../components/LoginDetailForm';
import PersonalDetailForm from '../components/PersonalDetailForm';
import { useDispatch } from "react-redux";
import { registerUser } from '../store/actions/usersActions';
import { useHistory } from "react-router-dom";


function RegisterNewUserPage() {
    let history = useHistory();
    const initialState = {
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
    }
    const [activeForm, setActiveForm] = useState(1)
    const [userFormDetail, setUserFormDetail] = useState(initialState)

    
    const dispatch = useDispatch();

    function handelLoginFormSubmit(loginFormData) {
        const state = { ...userFormDetail, ...loginFormData };
        setUserFormDetail(state);
        setActiveForm(2);
        
    }

    function handelPersonalFormSubmit(personalFormData) {
        const state = { ...userFormDetail, ...personalFormData };
        setUserFormDetail(state);
        dispatch(registerUser(state))
        history.push("/users-list");
    }

    function handleBack() {
        setActiveForm(1);
    }

    return (
        <Col>
            <LoginDetailForm
                onSubmit={handelLoginFormSubmit}
                isActive={activeForm === 1}
            />
            <PersonalDetailForm
                onSubmit={handelPersonalFormSubmit}
                onBack={handleBack}
                userFormDetail={userFormDetail}
                isActive={activeForm === 2}
            />
        </Col>
    );
}

export default RegisterNewUserPage;
