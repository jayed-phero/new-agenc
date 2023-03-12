import React from 'react';

const CTA = () => {
    return (
        <div>
            <section class="bg-gray-100 my-11 dark:bg-gray-900">
                <div class="max-w-6xl  xl:px-0 px-5 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
                    <div className=''>
                        <h2 class="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                            Join us and get the update from anywhere
                        </h2>

                        <div class="mt-8 lg:mt-4">
                            <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2 w-full">
                                <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 " placeholder="Email Address" />

                                <button class="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    Get Started
                                </button>
                            </div>

                            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300">Attention! Offer expires in 30 days. Make sure not to miss this opportunity</p>
                        </div>
                    </div>

                    <img className='h-56 md:w-80 rounded-2xl w-full' src='https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' />
                </div>
            </section>
        </div>
    );
};

export default CTA;