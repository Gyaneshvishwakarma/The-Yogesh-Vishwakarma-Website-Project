import React from 'react';
import exampleImage from '../assets/image_1.jpg'; // Update the path as needed

const CTASection = () => {
  return (
    <section className="bg-white">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div className="flex justify-center xl:w-1/2">
          <img 
            className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" 
            src={exampleImage} 
            alt="Example"
          />
        </div>

        <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
            Contact With Us 
          </h2>

          <p className="block max-w-2xl mt-4 text-gray-500">
          We're here to help you create high-quality products. Whether you're interested in our hands-on training programs or our book containing unique product formulations, we're just a call or a click away.
          </p>

          <div className="mt-6 sm:-mx-2">
            <a 
              href="tel:+919106766593#" 
              className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              <span className="mx-2">
                Call Us
              </span>
            </a>

            <a 
              href="contactform" 
              className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >

              <span className="mx-2">
                Enroll Now
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
