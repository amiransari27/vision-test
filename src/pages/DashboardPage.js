import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function DashboardPage() {

    const users = useSelector(state => state.users);

    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Total Users</Card.Title>
                        <Card.Text>
                            {users.items.length}
                  </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default DashboardPage;
