import HOME from './pages/homepage/HOME.jsx'
import Navbar from './components/header/Navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Contact from './pages/contact/Contact.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Services from './pages/services/Services.jsx';
import Blog from './pages/blog/Blog.jsx';
import Portfolio from './pages/portfolio/Portfolio.jsx';
import About from './pages/aboutPage/About.jsx';

import { Route , RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './rootLayout/RootLayout.jsx';



function APP(){

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>

        <Route index element={<HOME />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="Services" element={<Services />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path='about' element={<About />}/>

      </Route>
    )
  )

  return(
    <div>
      <RouterProvider  router={router}/>
    </div>
  )
}

export default APP;