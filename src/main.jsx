import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import BlogSection from './components/BlogSection'
import Book from './components/Book'
import ContactForm from './components/ContactForm'
import Training from './components/Training'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='services' element={<BlogSection />} />
      <Route path='book' element={<Book />} />
      <Route path='services/book' element={<Book />} />
      <Route path='services/training' element={<Training />} />
      <Route path='contactform' element={<ContactForm />} />
      <Route path='training' element={<Training />} />

      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
