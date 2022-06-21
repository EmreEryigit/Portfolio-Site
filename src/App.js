import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='about' element={<About />} />
        <Route path="/blog/:id" element={<SinglePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
