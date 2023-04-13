import React, { FC } from 'react';
import { useWindowDimensions } from './utils';

import Form from './components/Form';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import MobileGallery from './components/MobileGallery';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';

const App: FC = () => {
  const width = useWindowDimensions();
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <FAQ />
      <About />
      {width > 768 ? <Carousel /> : <MobileGallery />}
      <Form />
      <Footer />
    </div>
  );
}

export default App
