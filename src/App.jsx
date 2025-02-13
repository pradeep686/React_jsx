import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
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
import User from './components6/routerparameter.jsx';
import Users from './components6/routerparameter.jsx';
import OldBook from './components6/oldBok.jsx';
import NewBook from './components6/newBok.jsx';
import Books from './components6/book.jsx';
import Login from './components7/login.jsx';
import Dashboard from './components7/dashboard.jsx';

function App() {
  return (
    <Router>
      {/* Navigation */}
      <ul>
        <br /><h3>Without reload, the components will change</h3>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact-us</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/user/1'>User 1</Link></li>
        <li><Link to='/user/2'>User 2</Link></li>
        <li><Link to='/books'>Books</Link></li>
        <li><Link to='/books/old_books'>Old Books</Link></li>
        <li><Link to='/books/new_books'>New Books</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>

      <Routes>
        {/* Home Route: Include Global Components */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Home />
              <Index />
              <Car />
              <Garage />
              <Colour />
              <Bick />
              <List />
              <Timer />
              <MyForm />
            </>
            
          } 
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/user/:id' element={<Users />} />

        {/* Books Route with Nested Routes */}
        <Route path='/books' element={<Books />}>
          <Route path='old_books' element={<OldBook />} />
          <Route path='new_books' element={<NewBook />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
