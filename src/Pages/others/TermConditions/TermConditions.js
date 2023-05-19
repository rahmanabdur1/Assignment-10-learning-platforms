import React from 'react';
import { Link } from 'react-router-dom';

const TermConditions = () => {
    return (
        <div style={{ marginTop: '100px', marginLeft: '100PX' }}>
            <h3>Here is our TermConditions</h3>
            <p>Go back to: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermConditions;