import React, { useContext } from 'react';

import Card from 'react-bootstrap/Card';

import './Education.css'
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../Contexts/AuthProvider/AuthProvider';

const Education = ({ education }) => {
    const { darkMode } = useContext(DarkModeContext); // Access darkMode from DarkModeContext
    const { _id, title, details, enroll, image_url, name } = education;

    return (
        <Card
            style={{ width: '100%' }}
            className={`education shadow ${darkMode ? 'bg-dark' : ''}`}
        >
            <Card.Img variant="top" src={image_url} style={{ height: '260px' }} />
            <Card.Body>
                <h4>
                    <Card.Text className={`text-${darkMode ? 'light' : 'info'}`}>
                        Name: {name}
                    </Card.Text>
                </h4>
                <Card.Title className={`text-${darkMode ? 'light' : 'info'}`}>{title}</Card.Title>
                <Card.Text>Total Enrollment: {enroll}</Card.Text>
                <Card.Text className={`text-${darkMode ? 'light' : 'info'}`}>{details}</Card.Text>
            </Card.Body>
            <Card.Body className='course-info'>
                <Link to={`/education/${_id}`} className={`checkout fs-3 ${darkMode ? 'text-light' : ''}`}>
                    Checkout
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Education;