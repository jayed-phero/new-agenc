import React from 'react';
import Heading from '../../../components/Heading';

const OurTeam = () => {
    const sociald = [
        {
            name: "Jhon Doe",
            desig: ""
        }
    ]
    const social = [
        <i class="fa-brands fa-facebook-f"></i>,
        <i class="fa-brands fa-twitter"></i>,
        <i class="fa-brands fa-instagram"></i>,
        <i class="fa-brands fa-linkedin-in"></i>
    ]
    return (
        <div className='max-w-7xl mx-auto px-5 xl:px-0'>
            <Heading
                title={"Our Team Member"}
            />
            <h3 className='lg:text-5xl font-bold text-3xl text-center'>Exclusive Team Member</h3>

            <div className='grid grid-cols-1 gap-8 mt-8 md:mt-11  xl:mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    [1, 2, 3, 4].map(data =>
                        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">arthur melo</h1>

                                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">design director</p>
                                <div className='flex items-center gap-3 justify-center mt-5'>
                                    {
                                        social.map(icon =>
                                            <div className='h-10 transition duration-200 w-10 flex items-center justify-center rounded-full border hover:bg-blue-500 hover:text-blue-500 text-xl hover:bg-white'>
                                                {icon}
                                            </div>
                                        )
                                    }
                                </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OurTeam;

                        {/* <div className='border p-12 transition hover:shadow-2xl hover:border-non flex flex-col items-center justify-center rounded-xl'>
                            <img class="object-cover w-44 h-44 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                            <h1 class="mt-8 text-3xl font-semibold text-gray-700 dark:text-white">John Doe</h1>

                            <p class="mt-2 text-blue-500 text-lg capitalize font-semibold">Full stack developer</p>
                            <div className='flex items-center gap-3 justify-center mt-5'>
                                {
                                    social.map(icon =>
                                        <div className='h-10 transition duration-200 w-10 flex items-center justify-center rounded-full border hover:bg-blue-500 hover:text-white text-xl'>
                                            {icon}
                                        </div>
                                    )
                                }
                            </div>
                        </div> */}