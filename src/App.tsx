import React, { FC } from 'react';
import Form from './components/Form';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Services from './components/Services';
import About from './components/About';

const App: FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Carousel />
      <Form />
      <Footer />
    </div>
  );
}

export default App
