import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xzzpdzkk");

  if (state.succeeded) {
    return <div class="flex w-full max-w-sm overflow-hidden bg-gray-950 rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-center w-12 bg-emerald-500">
        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
        </svg>
    </div>

    <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
            <span class="font-semibold text-emerald-500 dark:text-emerald-400">Success</span>
            <p class="text-sm text-gray-600 dark:text-gray-200">Your Messege Send Sucessfully !</p>
        </div>
    </div>
</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-gray-50 shadow-lg rounded-md"
      action="https://formspree.io/f/xzzpdzkk"
      method="POST">
        <h2 className="text-2xl font-bold mb-6 text-center">Enroll Now</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input 
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input 
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input 
            type="text"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
          <select
            id="subject"
            name="subject"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="" disabled>Select a subject</option>
            <option value="training">Training</option>
            <option value="book">Book</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea 
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div className="flex items-center justify-center">
          <button 
            type="submit"
            disabled={state.submitting}
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
