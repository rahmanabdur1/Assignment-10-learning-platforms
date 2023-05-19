import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Education from '../EducationCard/Education';
const Home = () => {
    const educations = useLoaderData();
    return (
        <div className='home'>
            <h3 className='title'>Show Yours Best Category</h3>
            {
                educations.map(education => <Education
                    key={education._id}
                    education={education}
                ></Education>)
            }
        </div>

    );
};

export default Home;