import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Services from './pages/Services';

/**
 * App defines the six portfolio routes required by the assignment.
 * Layout keeps the navigation and footer consistent on every page.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
