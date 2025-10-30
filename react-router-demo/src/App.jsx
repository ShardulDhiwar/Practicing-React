
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Submit from './pages/Submit';
function App() {

  return (
    <>
      <Router>
        <nav className="p-5 gap-5 bg-gray-200 flex justify-between items-center">
          <h1 className="text-3xl">React Router Demo</h1>
          <ul className="flex justify-center gap-25 mx-100">
            <li className="hover:text-cyan-800 hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-cyan-800 hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-cyan-800 hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-cyan-800 hover:underline">
              <Link to="/submit">Submit</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Submit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
