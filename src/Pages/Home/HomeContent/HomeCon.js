import React from 'react';
import Button from '../../../components/Button';

const HomeCon = () => {
    return (
        <div>
            <div class="w-full bg-center bg-cover h-[38rem] homeCon">
                <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <div class="text-center">
                        <div class="max-w-lg mx-auto">
                            <h1 class="text-3xl font-semibold text-white lg:text-4xl">Create beautiful website layout with BrandName.</h1>

                            <p class="mt-6 text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
                            </p>

                            <div class="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
                                <form class="flex flex-col md:flex-row">
                                    <input type="email" placeholder="Enter your email address" class="flex-1 h-10 px-4 py-2 m-1 placeholder-gray-400 bg-transparent border-none appearance-none text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                                    <button type="button" class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-purple-500 rounded-md hover:bg-purple-400 focus:outline-none focus:bg-blue-400">
                                        Join Us
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCon;