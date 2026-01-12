import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import NeoCasinoPage from './pages/projects/NeoCasinoPage';
import AnkietDevPage from './pages/projects/AnkietDevPage';
import DevLinkPage from './pages/projects/DevLinkPage';
import ExperienceDetailPage from './pages/experience/ExperienceDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HashRouter>
        <Header />
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/ankietDev" element={<AnkietDevPage />} />
            <Route path="/project/neoCasino" element={<NeoCasinoPage />} />
            <Route path="/project/devLink" element={<DevLinkPage />} />
            <Route path="/experience/:id" element={<ExperienceDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;