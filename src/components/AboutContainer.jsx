import React from 'react'
import userImage from '../assets/image_1.jpg';

const AboutContainer = () => {
  return (
    <div><section className="w-full flex justify-center py-10 px-4">
    <div className="max-w-4xl bg-indigo-700 text-white rounded-lg p-8 shadow-lg">
      <div className="flex flex-col items-center">
        <div className="text-6xl mb-4">&ldquo;</div>
        <p className="text-center text-sm md:text-2xl font-medium mb-6">
        Hello, I'm Yogesh Vishwakarma, and I bring over 7 years of experience in training and product creation. Throughout my career, I have successfully developed a diverse range of high-quality products, including cosmetics and household cleaning items.
        </p>
        <img 
          src={userImage} 
          alt="Yogesh Vishwakarma" 
          className="w-16 h-16 rounded-full mb-4"
        />
        <div className="text-center">
          <p className="text-lg font-semibold">The Yogesh Vishwakarma</p>
          <p className="text-sm">Business Trainer | Manufacturer</p>
        </div>
      </div>
    </div>
  </section>
  <hr />
  </div>
  )
}

export default AboutContainer