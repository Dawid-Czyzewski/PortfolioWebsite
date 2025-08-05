import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import RefinansePage from './pages/projects/RefinansePage';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/project/refinanse' element={<RefinansePage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
