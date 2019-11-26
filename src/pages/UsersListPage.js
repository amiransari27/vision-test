import React from 'react';
import { Col, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function UsersListPage() {

    
    const users = useSelector(state => state.users);

    return (
        <>
            <Col>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             users.items.map((obj,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{obj.username}</td>
                                        <td>{obj.email}</td>
                                        <td>{obj.phoneNumber}</td>
                                        <td>{obj.city}</td>
                                        <td>{obj.state}</td>
                                        <td>{obj.zipcode}</td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </Table>
            </Col>
        </>
    );
}

export default UsersListPage;
