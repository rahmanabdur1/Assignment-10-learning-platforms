import { useContext, useState } from 'react';
// import { FaGoogle } from "react-icons/fa"
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Login = () => {
    const { providerLogin, signIn, setLoading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const form = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(form, { replace: true });
                console.log(user);
            })
            .catch(error => console.log(error))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')

                if (user.emailVerified) {
                    navigate(form, { replace: true });
                }
                else {
                    toast.error('Your email not verified.')
                }
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submits
                </Button>
                <Form.Text className='text-danger'>{error}</Form.Text>
                <br />
            </Form>
            <Button className='mt-3' onClick={handleGoogleSignIn} variant='outline-primary'>Login width Google</Button>
        </div>
    );
};

export default Login;
