import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState, useContext } from 'react';
import './LeftSideNav.css'
import { DarkModeContext } from '../../Contexts/AuthProvider/AuthProvider';
const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    const { darkMode } = useContext(DarkModeContext);
    useEffect(() => {
        fetch('http://localhost:5000/educations-categories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])
    return (

        <ListGroup as="ol" numbered className=' sideNav custom-list-group shadow rounded'>

            {categories.map(category => (
                <ListGroup.Item as="li" key={category.id} className={`  ${darkMode ? 'bg-dark ' : ''}`}>
                    <h3><Link className='side-nav' to={`/category/${category.id}`}>{category.name}</Link></h3>
                </ListGroup.Item>
            ))}
        </ListGroup>

    );
}
export default LeftSideNav;