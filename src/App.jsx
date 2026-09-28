import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Founder from './components/Founder';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Fixed Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Solutions />
        <Projects />
        <Stats />
        <Process />
        <WhyUs />
        <Founder />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
