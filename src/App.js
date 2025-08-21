import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

// Placeholder components for other pages
const Portfolio = () => <div className="container mt-5"><h1>Portfolio</h1><p>Portfolio page content will go here.</p></div>;
const Team = () => <div className="container mt-5"><h1>Our Team</h1><p>Team page content will go here.</p></div>;
const Blog = () => <div className="container mt-5"><h1>Blog</h1><p>Blog page content will go here.</p></div>;

function App() {
  return (
    <>
      <BrowserRouter>
        {/* ToastContainer */}
        <ToastContainers />

        {/* Routes */}
        <Routes>
          {/* Web Routes */}
          <Route path='/' element={<Base><Home/></Base>} />
          <Route path='/about' element={<Base><About/></Base>} />
          <Route path='/services' element={<Base><Services/></Base>} />
          <Route path='/portfolio' element={<Base><Portfolio/></Base>} />
          <Route path='/team' element={<Base><Team/></Base>} />
          <Route path='/blog' element={<Base><Blog/></Base>} />
          <Route path='/contact' element={<Base><Contact/></Base>} />

          <Route path='*' element={<PageNotFound404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
