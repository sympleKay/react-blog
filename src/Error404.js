import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <h1>Sorry! Page Not Found</h1>
            <Link to='/'>
                <p>Click to go home</p>
            </Link>
        </div>
    )
}

export default Error404
