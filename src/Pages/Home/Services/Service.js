import React from 'react';
import Heading from '../../../components/Heading';

const Service = () => {
    const services = [
        {
            title: "React.JS Development",
            icon: <i class="fa-brands fa-react"></i>
        },
        // {
        //     title: "Content Writing",
        //     icon: <i class="fa-solid fa-pen-to-square"></i>
        // },
        {
            title: "SEO Optimization",
            icon: <i class="fa-solid fa-chart-line"></i>,
        },
        {
            title: "Digital Marketing",
            icon: <i class="fa-solid fa-chart-simple"></i>,
        },
        {
            title: "eCommerce",
            icon: <i class="fa-solid fa-bag-shopping"></i>,
        },
        {
            title: "Web Development",
            icon: <i class="fa-solid fa-desktop"></i>,
        },
        {
            title: "Graphics Design",
            icon: <i class="fa-regular fa-object-ungroup"></i>
        },
        {
            title: "Wordpress",
            icon: <i class="fa-brands fa-wordpress-simple"></i>
        },
        {
            title: "Business Ambasedor",
            icon: <i class="fa-solid fa-business-time"></i>
        },
    ]
    return (
        <div>
            <div className='max-w-7xl mx-auto px-5 xl:px-0 my-16 md:mb-28'>
            <Heading
                    title={"Our Popular Services"}
                />
                <h3 className='lg:text-5xl font-bold text-3xl text-center '>Amazing Web Design Service</h3>
                <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 lg:grid-cols-2 xl:grid-cols-4">
                    {
                        services.map(data =>
                            <div class="p-9 shadow-2xl group hover:bg-blue-500 rounded-lg dark:border-gray-700 teansition duration-200 flex flex-col items-center justify-center cursor-pointer ">
                                <div className='group-hover:text-white text-6xl text-blue-500 pb-5'>{data.icon} </div>
                                <h3 className='text-xl font-bold group-hover:text-white'>{data.title}</h3>
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