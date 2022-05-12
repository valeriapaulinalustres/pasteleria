import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Service from './components/Service/Service';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Error from './components/Error/Error';



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>

  )
}

export default App;
