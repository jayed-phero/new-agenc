import React from 'react';
import './HomeContent.css'

const HomeContent = () => {
    return (
        <div>
            <header class="bg-white dark:bg-gray-900">

                <div class="max-w-7xl flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center xl:px-0">
                    <div class="w-full lg:w-1/2 ">
                        <div class="lg:max-w-lg">
                            <h2 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Build Your New <span class="text-blue-600 dark:text-blue-400">Idea</span></h2>

                            <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                            <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                               <a href="#" class="block px-7 py-5 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform w-48 h-16 rounded-3xl border-2 border-green-400 hover:bg-green-400">Get Started</a>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full h-96 lg:w-1/2 ">
                        <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80" alt="glasses photo" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HomeContent;