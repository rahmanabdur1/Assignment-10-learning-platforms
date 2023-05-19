import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Checkout.css';
import { DarkModeContext } from '../../Contexts/AuthProvider/AuthProvider';
import jsPDF from 'jspdf';

const Checkout = () => {
    const { darkMode } = useContext(DarkModeContext);
    const education = useLoaderData();
    const { title, image_url, price, duration } = education;

    const handleDownload = () => {
        // Create a new jsPDF instance
        const doc = new jsPDF();

        // Add content to the PDF
        doc.text(title, 10, 10);
        doc.text(`Price: ${price}`, 10, 20);
        doc.text(`Duration: ${duration}`, 10, 30);

        // Save the PDF file
        doc.save(`${title}.pdf`);
    };

    return (
        <div className='educations'>
            <Card style={{ width: '21rem' }} className={` shadow ${darkMode ? 'bg-dark' : ''}`}>
                <Card.Img src={image_url} style={{ height: '250px' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className='text-warning'>Price: {price}</Card.Text>
                    <Card.Text className='text-warning'>Duration: {duration}</Card.Text>
                    <div className='text-center'>
                        <Button variant='primary' onClick={handleDownload}>Download</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkout;
