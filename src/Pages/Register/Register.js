import React from 'react';
import { useContext, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Register = () => {
    const { createUser, updateCurrentUser, verifyEmail } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email, photoURL)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset()
                handleUpdateUserProfile(name, photoURL)
                handleEmailUser()
                toast.success('Please verify your email address before login.')
            })
            .catch(e => console.error(e))
        setError(e.message)
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            disPlayName: name,
            photoURL: photoURL
        }
        updateCurrentUser(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleEmailUser = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => console.er(e))
    }
    const handleChecked = (e) => {
        setAccepted(e.target.checked)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Enter photoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleChecked} label={<>Accept <Link to='/terms'>Term and Conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Registration
                </Button>
                <Form.Text className='text-danger'>{error}</Form.Text>
                <br />
            </Form>

        </div>
    );
};

export default Register;