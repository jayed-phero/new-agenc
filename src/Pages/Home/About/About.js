import React from 'react';
import Heading from '../../../components/Heading';
import LeftHeading from '../../../components/LeftHeading';
import MoreButton from '../../../components/MoreButton';

const About = () => {
    return (
        <div id='about'>
            <div class="max-w-7xl xl:px-0 px-6 py-16 mx-auto">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            {/* <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to choose <br /> your <span class="text-blue-500 ">clothes</span></h1> */}
                            <LeftHeading title={"About Digital Solutions"} />
                            <h3 className='lg:text-5xl font-bold text-3xl'>We are here for your best Partner</h3>
                            <p class="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio. consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio</p>

                           <div className='mt-7'><MoreButton title={"Know More About US"}
                           classes={'w-56'}
                           /></div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-full h-full lg:max-w-3xl" src="https://img.freepik.com/free-photo/3d-render-code-testing-functional-test-usability_107791-16607.jpg?size=626&ext=jpg&ga=GA1.2.1817583408.1678734770&semt=sph" alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;