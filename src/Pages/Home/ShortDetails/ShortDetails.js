import React from 'react';
import './ShortDetails.css'
import CountUp from 'react-countup';
import Heading from '../../../components/Heading';

const ShortDetails = () => {
    const shortdata = [
        {
            id: 1,
            cover: <i class="fa-solid fa-trophy"></i>,

            data: "5",
            title: "EXPERIENCE",
        },

        {
            id: 2,
            cover: <i class="fa-solid fa-people-group"></i>,
            data: "25",
            title: "EXPERT TEAM MEMBER",
        },
        {
            id: 3,
            cover: <i class="fa-solid fa-rocket"></i>,
            data: "0251",
            title: "SUCCESS PROJECTS",
        },
        {
            id: 4,
            cover: <i class="fa-solid fa-globe"></i>,
            data: "151",
            title: "SATISFIED CLIENTS",
        },
    ]
    return (
        <div className='shortDetails portfolioBG w-full py-11 md:py-16'>
            <div className='max-w-6xl mx-auto'>


                <Heading
                    title={"Company Statistics"}
                />
                <h3 className='lg:text-5xl font-bold text-3xl text-center text-white max-w-3xl mx-auto'>We're the best web development agency</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9  px-5 xl:px-0 pt-11 md:mt-11'>
                    {
                        shortdata.map((details, i) =>
                            <div key={i} className=' relative w-full h-full px-7 py-7 border'>
                                {/* <p className='text-7xl text-regal-orange pb-2'>{details.c}</p> */}
                                <h3 className='text-5xl text-blue-500 mb-7'>{details.cover}</h3>
                                <h1 className='text-4xl md:text-5xl pb-5 font-bold text-white '>
                                    <CountUp end={details.data} duration={5} enableScrollSpy />+
                                </h1>
                                <h3 className='text-white text-lg font-semibold'>{details.title}</h3>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ShortDetails;