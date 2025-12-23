import HOME from './pages/homepage/HOME.jsx'
import Navbar from './components/header/Navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Contact from './pages/contact/Contact.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Services from './pages/services/Services.jsx';
import Blog from './pages/blog/Blog.jsx';
import Portfolio from './pages/portfolio/Portfolio.jsx';

import { Route , Routes } from 'react-router-dom';


function APP(){

  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HOME />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default APP;