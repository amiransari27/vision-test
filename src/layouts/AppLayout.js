import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NavBar from './NavBar';
import { Route, Redirect } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import UsersListPage from '../pages/UsersListPage';
import RegisterNewUserPage from '../pages/RegisterNewUserPage';

function AppLayout() {
    return (
        <Container>
            <Row className="nav-bar">
                <NavBar />
            </Row>
            <Row>
                <Redirect exact from="/" to="dashboard" />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/users-list" component={UsersListPage} />
                <Route path="/register-new-user" component={RegisterNewUserPage} />
            </Row>
        </Container>
    );
}

export default AppLayout;
