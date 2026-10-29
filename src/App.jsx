import { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Skills from './pages/skills.jsx';
import Contact from './pages/contact.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('raz-theme') === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('raz-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`website ${darkMode ? 'dark-mode' : 'light-mode'}`}>

      <nav className="navbar">

        <Link to="/" className="brand-link">
          <h2>RAZ<span> VERMA</span></h2>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-actions">

          <button
            className={`theme-toggle ${darkMode ? 'is-dark' : 'is-light'}`}
            onClick={toggleTheme}
            type="button"
            role="switch"
            aria-checked={darkMode}
            aria-label="Toggle dark and light mode"
          >
            <span className="toggle-label sleep-label">Light</span>
            <span className="toggle-label work-label">Dark</span>
            <span className="toggle-knob">
              {darkMode ? '☾' : '☀'}
            </span>
          </button>

          <Link className="nav-btn" to="/contact">
            Let's Talk ↗
          </Link>

        </div>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        © 2026 RAZ VERMA. ALL RIGHTS RESERVED.
      </footer>

    </div>
  );
}

export default App;