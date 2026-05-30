import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Trainers } from './components/Trainers';
import { Membership } from './components/Membership';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Membership />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
