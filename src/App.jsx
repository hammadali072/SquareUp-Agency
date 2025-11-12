import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/landing-page/landing-page';
import ServicesPage from './pages/services-page/services-page';
import AboutPage from './pages/about-page/about-page';
import ProcessPage from './pages/process-page/process-page';
import BlogPage from './pages/blog-page/blog-page';
import CareerPage from './pages/career-page/career-page';
import ContactPage from './pages/contact-page/contact-page';

import './App.scss';
import ScrollToTop from './components/scrollToTop/scrollToTop';

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/service' element={<ServicesPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='process' element={<ProcessPage />} />
        <Route path='work' element={<BlogPage />} />
        <Route path='career' element={<CareerPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
