import React from 'react'
import { CheckCircle } from 'lucide-react'

const Cards = () => {
  return (
    <>

        <div className="flex flex-col items-center justify-center md:flex-row lg:col-span-7">
          <div className="w-full p-5 md:w-1/2">
            <div className="rounded-md border bg-white bg-opacity-90">
              <div className=" border-b">
                <div className="px-9 py-7">
                  <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">Training Program</h3>
                  <p className="font-medium leading-relaxed text-gray-500">
                  You will receive more than 100+ hands-on product training in this course.
                  </p>
                </div>
              </div>
              <div className="px-9 pb-9 pt-8">
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
                <p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
                  <span className="ml-2 text-gray-900"> Fees - ₹2000</span>
                </p>
                
              </div>
            </div>
          </div>
          <div className="w-full p-5 md:w-1/2">
            <div className="rounded-md border bg-white bg-opacity-90">
              <div className=" border-b">
                <div className="px-9 py-7">
                  <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">Product Formula Book Pdf</h3>
                  <p className="font-medium leading-relaxed text-gray-500">
                  More than 250 product creation techniques are included in The Product Formula Book.
                  </p>
                </div>
              </div>
              <div className="px-9 pb-9 pt-8">
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
                <p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
                  <span className="ml-2 text-gray-900">Price - ₹500</span>
                </p>
                
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Cards