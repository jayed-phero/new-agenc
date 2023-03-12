import React from 'react';

const Pricing = () => {
    const pricing = [
        {
            offerName: "Casual"
        },
        {
            offerName: "Professional"
        },
        {
            offerName: "Expert"
        }
    ]
    return (
        <div>
            <div class="bg-white dark:bg-gray-900">
                <div class="max-w-6xl xl:px-0 px-6 py-8 mx-auto">
                    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Pricing Plan</h1>

                    <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas magni libero consequuntur voluptatum velit amet id repudiandae ea, deleniti laborum in neque eveniet.
                    </p>

                    <div class="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0 mt-8">
                        <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-purple-400 rounded-lg lg:mx-4 dark:bg-gray-900 hover:border-purple-700">
                            <div class="flex-shrink-0">
                                <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-purple-800 uppercase rounded-lg bg-purple-100 dark:bg-gray-700">
                                    Casual
                                </h2>
                            </div>

                            <div class="flex-shrink-0">
                                <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    Free
                                </span>
                            </div>

                            <ul class="flex-1 space-y-4">
                                <li class="text-gray-500 dark:text-gray-400">
                                    Up to 5 projects
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    Up to 10 collaborators
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    2Gb of storage
                                </li>
                            </ul>

                            <button class="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-purple-500 rounded-lg hover:bg-purple-700 focus:outline-none">
                                Start free
                            </button>
                        </div>

                        <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-purple-200 rounded-lg lg:mx-4 dark:bg-gray-900 hover:border-purple-700">
                            <div class="flex-shrink-0">
                                <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-purple-800 uppercase rounded-lg bg-purple-100 dark:bg-gray-700">
                                    Professional
                                </h2>
                            </div>

                            <div class="flex-shrink-0">
                                <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    $24.90
                                </span>

                                <span class="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>

                            <ul class="flex-1 space-y-4">
                                <li class="text-gray-500 dark:text-gray-400">
                                    Up to 10 projects
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    Up to 20 collaborators
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    10Gb of storage
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    Real-time collaborations
                                </li>
                            </ul>

                            <button class="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-purple-500 rounded-lg hover:bg-purple-700 focus:outline-none">
                                Start free trial
                            </button>
                        </div>

                        <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-purple-200 rounded-lg lg:mx-4 dark:bg-gray-900 hover:border-purple-700">
                            <div class="flex-shrink-0">
                                <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-purple-800 uppercase rounded-lg bg-purple-100 dark:bg-gray-700">
                                    Expert
                                </h2>
                            </div>

                            <div class="flex-shrink-0">
                                <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    $49.90
                                </span>

                                <span class="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>

                            <ul class="flex-1 space-y-4">
                                <li class="text-gray-500 dark:text-gray-400">
                                    Unlimited projects
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    Unlimited collaborators
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    Unlimited storage
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    Real-time collaborations
                                </li>

                                <li class="text-gray-500 dark:text-gray-400">
                                    24x7 Support
                                </li>
                            </ul>

                            <button class="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-purple-500 rounded-lg hover:bg-purple-700 focus:outline-none">
                                Start free trial
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;