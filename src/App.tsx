import React, { FC } from 'react';
import Form from './components/Form';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Form />
      <Footer />
    </div>
  );
}

export default App
