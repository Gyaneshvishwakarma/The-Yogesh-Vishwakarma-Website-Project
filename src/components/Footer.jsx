import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-white py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold text-blue-700">Yogesh Vishwakarma</h1>
          <div className="flex mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-800">Quick Links</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>
        </div>
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-lg font-semibold text-gray-700">Contact Details</p>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
            <li><Link to="tel:+919106766593">+91 9106766593</Link></li>
            <li><Link to="mailto:yogeshvish2010@gmail.com">Yogeshvish2010@gmail.com</Link></li>
            <li>Narsinghpur, Madhya Pradesh, India 482001</li>
          </ul>
        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div className="inline-flex items-center">
          <p className="ml-4 text-sm font-medium text-gray-500 pb-4"><Link to="https://www.linkedin.com/in/gyanesh-vishwakarma-01a159245/" target='_blank' >Design & Developed By - Gyanesh Vishwakarma</Link></p>
        </div>
        <div className="mt-4 md:mt-0 pb-4">
          <p className="text-sm font-medium text-gray-500">© {currentYear} Yogesh Vishwakarma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
