import React from 'react';

const LeftHeading = ({title}) => {
    return (
        <div>
            <div className='flex items-end gap-5 pb-5 justify-left '>
                {/* <div className='flex items-center gap-1'>
                    <p className='h-1 w-1 rounded-full bg-blue-500'></p>
                    <p className='h-1 w-1 rounded-full bg-blue-500'></p>
                    <p className='h-1 w-1 rounded-full bg-blue-500'></p>
                </div> */}
                <h3 className='text-xl font-bold text-blue-500 border-b-2 border-blue-500 pb-1'>{title}</h3>
                <div className='flex items-center gap-1'>
                    <p className='h-1 w-1 rounded-full bg-blue-500'></p>
                    <p className='h-1 w-1 rounded-full bg-blue-500'></p>
                    <p className='h-1 w-1 rounded-full bg-blue-500'></p>
                </div>
            </div>
        </div>
    );
};

export default LeftHeading;