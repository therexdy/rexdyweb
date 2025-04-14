import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import IntroSection from './components/IntroSection';
import Projects from './components/Projects';
import Socials from './components/Socials';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-black">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/rexdyweb" element={<IntroSection />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Socials" element={<Socials />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
