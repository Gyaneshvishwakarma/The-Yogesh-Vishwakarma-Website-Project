import React from 'react';
import { Link } from 'react-router-dom';
import blogImage1 from '../assets/training_certificate.png';
import blogImage2 from '../assets/image.png';

const BlogSection = () => {
  return (
    
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">Services</h1>
          <p className="max-w-xl mx-auto mt-4 text-gray-500">
          We offer a variety of courses, including soap making, skincare cosmetic making, household product making, homecare product making, and many more. We provide the best training across all of Youtube. Our goal is to empower candidates to become independent so they can earn using their skills.
          With our comprehensive teaching approach, you will learn in an easy and engaging way. We will not only train you with the latest techniques but also help you specialize in your chosen field so you can start your own business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <img className="relative z-10 object-cover w-full rounded-md h-96" src={blogImage1} alt="Blog 1" />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow">
              <Link to="training" className="font-semibold text-gray-800 hover:underline md:text-xl">
                Practical Training Program
              </Link>
              <p className="mt-3 text-sm text-gray-500 md:text-sm">
              "Join our hands-on practical training program to master the creating cosmetics and household cleaning products. Learn from experts, gain real-world experience, and access 250 unique formulations book. Enroll today to enhance your skills and start your journey towards becoming a successful product creator."
              </p>
              <p className="mt-3 text-sm text-blue-500"><Link to="training">Know More</Link></p>
            </div>
          </div>

          <div>
            <img className="relative z-10 object-cover w-full rounded-md h-96" src={blogImage2} alt="Blog 2" />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow">
              <Link to="book" className="font-semibold text-gray-800 hover:underline md:text-xl">
                Formulation Book
              </Link>
              <p className="mt-3 text-sm text-gray-500 md:text-sm">
              "Unlock your potential with our book featuring 200 product formulations for creating cosmetics and household cleaning items. Available in both eBook and hard copy, this comprehensive guide offers expert insights and practical recipes. Get your copy today and start crafting high-quality products with ease and confidence."
              </p>
              <p className="mt-3 text-sm text-blue-500"><Link to="book">Know More</Link></p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default BlogSection;
