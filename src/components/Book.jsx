
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import bookImage from '../assets/image.png'; // Update the path to your image
import { CheckCircle } from 'lucide-react'
import ContactForm from './ContactForm';

const Book = () => {

  return (
    <section className="bg-white">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex  lg:gap-12">
        <div className="wf-ull ">
          <p className="text-sm font-medium text-blue-500">Formulation Book</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Get The 200 Formulation Book</h1>
          <p className="mt-4 text-gray-500">
          "Unlock your potential with our book featuring 200 product formulations for creating cosmetics and household cleaning items. Available in both eBook and hard copy, this comprehensive guide offers expert insights and practical recipes. Get your copy today and start crafting high-quality products with ease and confidence."
          </p>
          <div className="pb-2 pt-4">
                <p className="mb-6 font-medium leading-relaxed text-gray-600">Book included:</p>
                <ul className="mb-11">
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">Lifetime Support</p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">High Quality Formulation</p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">250+ Product Formulation</p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">Soft & Hard Copy Available </p>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">Lowest Price in the Market</p>
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

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <img
            className="w-50 lg:h-1/2 rounded-lg object-cover"
            src={bookImage}
            alt="Book Img"
          />
        </div>
      </div>
        <ContactForm />
    </section>
  );
};

export default Book;
