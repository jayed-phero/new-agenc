import React from 'react';
import CountUp from 'react-countup';
import Button from '../../../components/Button';

const ShortDetails = () => {
    const details = [
        {
            number: "05",
            title: "Year of Experience",
            bgColor: "bg-purple-100",
        },
        {
            number: "201",
            title: "Successful projects",
            bgColor: "",
        },
        {
            number: "15",
            title: "Team members",
            bgColor: "",
        },
        {
            number: "150",
            title: "Satisfied clients",
            bgColor: "bg-purple-100",
        },
    ]
    return (
        <div>
            <div class="max-w-6xl flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:pt-11 md:mb-20 mb-11 lg:flex-row lg:items-center">
                <div class="w-full lg:w-1/2 md:pr-16 ">
                    <div class="">
                        <h1 class="text-2xl font-semibold text-purple-800 capitalize lg:text-3xl pb-5 dark:text- ">About US</h1>
                    </div>
                    <h3 className='text-3xl md:text-5xl font-bold'>We are digital and creative team</h3>
                    <p className=' text-gray-400 pt-5'>Driven by innovation and human behavior, our web design agency is changing the way brands connect with audiences in a digital world. Discover why market leaders choose our enterprise solutions. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                            quia tempore delect</p>
                    <div className='mt-11'>
                        <Button
                            title={"Learn More"}
                        />
                    </div>
                </div>

                <div class="mt-8 md:mt-0 w-full h-96 lg:w-1/2 grid grid-cols-2">
                    {
                        details.map(data =>
                            <div className={`w-full flex items-center flex-col justify-center group hover:bg-purple-800 px-5  py-7 sm:px-11 sm:py-16 ${data.bgColor}`}>
                                <div className='flex items-start gap-3'>
                                    <h3 className=' text-3xl sm:text-5xl font-semibold pb-5 group-hover:text-white'>
                                    <CountUp end={data.number} duration={5} enableScrollSpy />
                                    </h3>
                                    <i class="fa-solid fa-plus text-purple-500 font-bold group-hover:text-white"></i>
                                </div>
                                <h3 className='text-xl text-gray-400 group-hover:text-white'>{data.title}</h3>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ShortDetails;