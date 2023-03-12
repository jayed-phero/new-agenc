import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({title}) => {
    return (
        <div>
            <Link className='text-purple-800 border border-purple-800 px-9 py-3 uppercase hover:bg-purple-800 transition duration-300 ease-in hover:text-white'>{title}</Link>
        </div>
    );
};

export default Button;