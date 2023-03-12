import React from 'react';
import Heading from '../../../components/Heading';

const Testiminial = () => {
    return (
        <div >
            <div className='max-w-7xl mx-auto px-5 xl:px-0'>
                <Heading
                    title={"Clents Feedback"}
                />
                <h3 className='lg:text-5xl font-bold text-3xl text-center max-w-xl mx-auto'>3,000+ Positive reviews by our satisfied clients</h3>
                <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        [1, 2, 3].map(data =>
                            <div class="p-12 border rounded-lg dark:border-gray-700">
                                <div className='h-12 w-12 mb-5 rounded-full bg-orange-400 text-white text-2xl font-bold flex items-center justify-center'>
                                <i class="fa-solid fa-quote-right"></i>
                                </div>
                                <p class="leading-loose text-gray-800 dark:text-gray-400">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero doloribus expedita.
                                </p>

                                <div class="flex items-center mt-8 -mx-2">
                                    <img class="object-cover mx-2 rounded-full w-16 shrink-0 h-16 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                    <div class="mx-4">
                                        <h1 class="font-semibold text-blue-500 text-xl dark:text-white">Robert</h1>
                                        <span class="text-s text-gray-700 dark:text-gray-400">CTO, Robert Consultency</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>
            </div>
        </div>
    );
};

export default Testiminial;