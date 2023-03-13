import React from 'react';
import './ShortDetails.css'
import CountUp from 'react-countup';

const ShortDetails = () => {
    const shortdata = [
        {
            id: 1,
            cover: "https://img.icons8.com/ios/80/ffffff/macbook-idea--v3.png",
           
            data: "5",
            title: "EXPERIENCE",
        },

        {
            id: 2,
            cover: "https://img.icons8.com/ios/80/ffffff/athlete.png",
            data: "25",
            title: "TEAM MEMBER",
        },
        {
            id: 3,
            cover: "https://img.icons8.com/external-outline-icons-maxicons/80/ffffff/external-calender-insurance-outline-outline-icons-maxicons.png",
            data: "0251",
            title: "SUCCESS PROJECTS",
        },
        {
            id: 4,
            cover: "https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/80/ffffff/external-graduation-education-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png",
            data: "151",
            title: "SATISFIED CLIENTS",
        },
    ]
    return (
        <div className='shortDetails bg-gray-900 w-full'>
          
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9  px-5 xl:px-0 py-11 md:my-11'>
                {
                    shortdata.map((details, i) =>
                        <div key={i} className=' relative w-full h-full border border-dotted rounded-xl px-7 py-7'>
                            {/* <p className='text-7xl text-regal-orange pb-2'>{details.c}</p> */}
                            <img src={details.cover} alt="" />
                            <h3 className='text-white text-xl font-semibold'>{details.title}</h3>
                            <h1 className='text-4xl md:text-5xl pt-3 font-bold text-white '>
                                <CountUp end={details.data} duration={5} enableScrollSpy />
                            </h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShortDetails;