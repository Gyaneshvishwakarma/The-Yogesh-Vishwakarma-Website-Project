
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import bookImage from '../assets/3.png'; // Update the path to your image
import { CheckCircle } from 'lucide-react'
import ContactForm from './ContactForm';

const Training = () => {

  return (
    <section className="bg-white">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex  lg:gap-12">
        <div className="wf-ull ">
          <p className="text-sm font-medium text-blue-500">Training Progarm</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Join the Hand on Practical Training Program</h1>
          <p className="mt-4 text-gray-500">
          "We specialize in providing comprehensive training for creating a wide range of products, including cosmetics, household cleaning items, and more. Our expert-led courses equip you with the skills and knowledge to craft high-quality products, and we also offer 250 unique formulations for you to use, ensuring you have everything you need to succeed in your product creation journey."
          </p>
          <div className="pb-2 pt-4">
          <p className="mb-6 font-medium leading-relaxed text-gray-600">Extra Services</p>
                <ul className="mb-11">
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">Certificate</p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">Product Formula Book</p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">Business Registration</p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">NOC Certificate</p>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">Business Support</p>
                  </li>
                </ul>
              </div>

          <div className="flex items-center gap-x-3">
            <Link
              to="tel:+919106766593"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100"
            >
              <span>Call Us</span>
            </Link>

          </div>
        </div>

        <div className="relative w-full mt-8 lg:w-100 lg:mt-0">
          <img
            className="w-100 lg:h-100 rounded-lg object-cover"
            src={bookImage}
            alt="Book Img"
          />
        </div>
      </div>
        <ContactForm />
    </section>
  );
};

export default Training;
