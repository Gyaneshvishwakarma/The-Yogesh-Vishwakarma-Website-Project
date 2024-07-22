import React from 'react';
import authorPhoto from '../assets/image_2_png.png'; // Update the path to your photo
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ContactSection from './ContactSection';

const About = () => {
  return (
    <>
    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[40rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
        <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
          <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
          <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
          <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
          <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
        </div>

        <div className="max-w-lg lg:mx-12 lg:order-2">
            
            <div className='my-4'>
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                Why You Should Choose Us ?
            </h1>
            <div class="flex mx-auto mt-6">
                    <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>
            <p className="mt-4 text-gray-600">
            We offer a variety of courses, including soap making, skincare cosmetic making, household product making, homecare product making, and many more. We provide the best training across all of Youtube. Our goal is to empower candidates to become independent so they can earn using their skills.
            With our comprehensive teaching approach, you will learn in an easy and engaging way. We will not only train you with the latest techniques but also help you specialize in your chosen field so you can start your own business.
          </p>

          <div className='my-4'>
                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                    About Us 
                </h1>

                <div class="flex mx-auto mt-6">
                    <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>
          <p className="mt-4 text-gray-600">
          Hello, I'm Yogesh Vishwakarma, and I bring over 7 years of experience in the product creation and business development industry. Throughout my career, I have successfully developed a diverse range of high-quality products.
          </p>

          
        </div>
      </div>

      

      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full max-w-sm rounded-md"
          src={authorPhoto}
          alt="Author image"
        />
      </div>
    </div>
    <hr />
    <ContactSection />

    </>
  );
};

export default About;
