import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div className='bg-sky-400 py-2 w-full '>
            <div className='max-w-7xl mx-auto flex items-center lg:justify-between justify-center'>
                <div className='flex items-center gap-5 text-sm font-semibold text-white hidden lg:flex'>
                    <Link>About</Link>
                    <Link>Service</Link>
                    <Link>Faq</Link>
                </div>
                <div className='flex items-center gap-5 text-sm font-semibold text-white'>
                    <Link>example@gmail.com</Link>
                    <Link>+88019000000</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;