import React from 'react';

const Services = () => {
    // const services = [
    //     {
    //         logo: <i class="fa-solid fa-wand-magic-sparkles"></i>,
    //         title: "Digital",
    //         title2: "Marketing"
    //     },
    //     {
    //         logo: <i class="fa-brands fa-slack"></i>,
    //         title: "Web",
    //         title2: "Development"
    //     },

    //     {
    //         logo: <i class="fa-brands fa-squarespace"></i>,
    //         title: "Graphics",
    //         title2: "Design"
    //     },
    //     {
    //         logo: <i class="fa-brands fa-wordpress"></i>,
    //         title: "Wordpress",
    //         title2: "Customization"

    //     },
    //     {
    //         logo: <i class="fa-brands fa-google"></i>,
    //         title: "SEO",
    //         title2: "Optimization"
    //     },

    //     {
    //         logo: <i class="fa-solid fa-pen-to-square"></i>,
    //         title: "Content",
    //         title2: "Writing and Design"
    //     },
    // ]

    const services = [
        {
            logo: <i class="fa-solid fa-desktop"></i>,
            title: "Web Development",
            desc: ""
        },
        {
            logo: <i class="fa-solid fa-bag-shopping"></i>,
            title: "eCommerce",
            desc: ""
        },
        {
            logo: <i class="fa-solid fa-chart-simple"></i>,
            title: "Digital Marketing",
            desc: ""
        },
        {
            logo: <i class="fa-solid fa-chart-line"></i>,
            title: "SEO Optimization",
            desc: ""
        },
    ]
    return (
        <div className='py-7 md:py-11'>
            <div class="text-center">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Our Services</h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                quia tempore delect
            </p>
        </div>
            <div className='max-w-7xl mx-auto px-5 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
                {
                    services.map(service =>
                        <div className='w-full border border-purple-800 group flex flex-col items-center justify-center p-11 hover:bg-purple-800 cursor-pointer '>
                            <h3 className='text-5xl font-bold pb-9 text-purple-800 group-hover:text-white'>{service.logo}</h3>
                            <p className='text-2xl text-gray-900 font-semibold group-hover:text-white pb-7'> {service.title}</p>
                            {/* <p className='text-4xl text-gray-900 font-bold pb-5'> {service.title2}</p> */}
                            <h4 className='text-gra-400 text-center group-hover:text-white'>We pioneered the agency concept by launching our own unit.</h4>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;