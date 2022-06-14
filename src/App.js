import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { WaProvider } from './context/WaContext';
import React from 'react';
import AnimationRoutes from './AnimationRoutes';


function App() {
  return (
    <div>
      <WaProvider>
        <NavBar />
        <AnimationRoutes />
        <Footer />
      </WaProvider>
    </div>
  )
}

export default App;
