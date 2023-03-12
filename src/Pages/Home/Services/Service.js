import React from 'react';
import Heading from '../../../components/Heading';

const Service = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto px-5 xl:px-0 mb-11 md:mb-24'>
            <Heading
                    title={"Our Popular Services"}
                />
                <h3 className='lg:text-5xl font-bold text-3xl text-center '>Amazing Web Design Service</h3>
                <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 lg:grid-cols-2 xl:grid-cols-4">
                    {
                        [1, 2, 3,4,5,6,7,8].map(data =>
                            <div class="p-9 shadow-2xl group hover:bg-blue-500 rounded-lg dark:border-gray-700 teansition duration-200 flex flex-col items-center justify-center cursor-pointer ">
                                <div className='group-hover:text-white text-6xl text-blue-500 pb-5'><i class="fa-brands fa-react"></i></div>
                                <h3 className='text-xl font-bold group-hover:text-white'>React js Development</h3>
                                <p className='text-gray-500 py-5 group-hover:text-white text-center'>Focus provide beautiful layout client look make import</p>
                                <div className='flex items-center gap-2 text-lg font-semibold group-hover:text-white'>
                                    <h3 className='border-b'>Contact US</h3>
                                    <i class="fa-solid fa-angles-right"></i>
                                </div>
                            </div>
                        )
                    }
                </section>
            </div>
        </div>
    );
};

export default Service;