import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Home, Stories, Features, Pricing, Footer } from './Index';
import { MyContext } from './components/MyContext';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resetOpenMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <MyContext.Provider value={{ isMenuOpen, resetOpenMenu, setIsMenuOpen }}>
      <div className='page-container d-flex flex-col align-center'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/features' element={<Features />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </MyContext.Provider>
  );
};

export default App;
