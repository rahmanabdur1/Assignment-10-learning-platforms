import React from 'react';
import { useContext, useState } from 'react';


import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
const Profile = () => {
    const { user } = useContext(AuthContext)
    const [name, setName] = useState(user.displayName)

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChange = e => {
        setName(e.target.value)
    }

    return (
        <div>


            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={handleChange} defaultValue={name} name="name" type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control defaultValue={user?.photoURL} type="text" name="photoURL" placeholder="Enter photoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly type="email" defaultValue={user?.email} name='email' placeholder="Enter email" required />
                </Form.Group>
            </Form>

        </div>
    );
};

export default Profile;