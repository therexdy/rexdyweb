import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import IntroSection from './components/IntroSection';
import Projects from './components/Projects';
import Socials from './components/Socials';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<IntroSection />} />
            <Route path="/Projects.html" element={<Projects />} />
            <Route path="/Socials.html" element={<Socials />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
