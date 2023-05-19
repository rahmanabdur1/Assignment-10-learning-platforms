import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Education from '../../EducationCard/Education';

import './Category.css'
const Category = () => {
    const educations = useLoaderData();

    return (
        <div >
            <h4 className='category'>Selecte Your Course</h4>
            {
                educations.map(education => <Education
                    key={education._id}
                    education={education}


                ></Education>


                )
            }
        </div>
    );
};

export default Category;