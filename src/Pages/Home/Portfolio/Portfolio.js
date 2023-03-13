import React from 'react';
import Heading from '../../../components/Heading';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div>
            <section class="portfolioBG dark:bg-gray-900 py-11">
                <Heading
                    title={"Out Awesome Portfolio"}
                />
                <h3 className='lg:text-5xl font-bold text-3xl text-center text-white'>See Our Awesome Portfolio</h3>
                <div class="max-w-7xl xl:px-0 px-6 pt-10 mx-auto">

                    <div class="grid grid-cols-1 gap-8 mt-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group ImageIII"
                        >
                            <div
                                class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 class="mt-4 text-xl font-semibold text-white capitalize">Best website collections</h2>
                                <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p>
                            </div>
                        </div>

                        <div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group ImageII"
                        >
                            <div
                                class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 class="mt-4 text-xl font-semibold text-white capitalize">Block of Ui kit collections</h2>
                                <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Ui kit</p>
                            </div>
                        </div>

                        <div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group ImageI"
                        >
                            <div
                                class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 class="mt-4 text-xl font-semibold text-white capitalize">Ton’s of mobile mockup</h2>
                                <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Mockups</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;