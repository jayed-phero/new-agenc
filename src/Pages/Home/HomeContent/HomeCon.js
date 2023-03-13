import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

const HomeCon = () => {
    return (
        <div>
            <div class="w-full bg-center bg-cover h-[38rem] portfolioBG">
            <div class="max-w-7xl flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-20 lg:flex-row lg:items-center lg:justify-center xl:px-0">
                    <div class="w-full lg:w-1/2 ">
                        <div class="lg:max-w-lg">
                            <Link className='text-lg font-semibold px-5 py-3 border-l-4 border-green-500 rounded bg-blue-500 hover:bg-blue-600 transition duration-300 text-white'>More Five Years of Experience</Link>
                            <h3 className='lg:text-5xl font-bold text-3xl py-7 text-white'>Creative agency for your best choice.</h3>
                            <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base border-l-4 border-green-500 pl-7 mb-11">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                            <a href='#service' className='text-lg font-semibold px-5 py-3  rounded bg-blue-500 hover:bg-blue-600 transition duration-300 text-white uppercase'>Get Started</a>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full h-96 lg:w-1/2 ">
                        <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://img.freepik.com/free-vector/robot-human_53876-90440.jpg?size=626&ext=jpg&ga=GA1.2.1817583408.1678734770&semt=sph" alt="glasses photo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCon;
