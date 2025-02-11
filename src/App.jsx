import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './index.jsx';
import Car from './components/leranClass';
import Garage from './components/garage';
import Header from './components/header.jsx';
import Colour from './components2/useState.jsx';
import Bick from './components2/bick.jsx';
import List from './components2/list.jsx';
import Timer from './components3/useEffect.jsx';
import MyForm from './components4/form.jsx';
import Home from './components5/home.jsx';
import Contact from './components5/contect.jsx';
import About from './components5/about.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      {/* Other components that are always visible */}
      <Header />
      <Index />
      <Car />
      <Garage />
      <Colour />
      <Bick />
      <List />
      <Timer />
      <MyForm />
    </Router>
  );
}

export default App;
