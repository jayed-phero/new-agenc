import React from 'react';

const MoreButton = ({title, classes}) => {
    return (
        <div className={`text-md font-semibold px-5 py-3 bg-blue-500 text-white hover:bg-gray-900 transition duration-200 rounded w-auto cursor-pointer ${classes}`}>
            {title}
            <i class="fa-solid fa-angles-right pl-2"></i>
        </div>
    );
};

export default MoreButton;