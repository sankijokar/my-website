import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const roles = [
    'Web Developer.',
    'Creative Designer.',
    'Frontend Developer.',
    'Tech Enthusiast.'
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>

      {/* HERO SECTION */}
      <section id="home" className="hero">

        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            AVAILABLE FOR NEW PROJECTS
          </div>

          <p className="tag">
            HELLO, I'M RAZ VERMA
          </p>

          <h1>
            Building Digital
            <br />
            <span>Experiences.</span>
          </h1>

          <h2 className="typing-text">
            I'm a {roles[roleIndex]}
          </h2>

          <p className="description">
            I build modern websites, explore new technologies
            and turn creative ideas into beautiful digital
            experiences. Currently learning and improving
            my skills every day.
          </p>

          <div className="buttons">

            <Link to="/skills" className="primary-btn">
              Explore My Skills ↗
            </Link>

            <Link to="/contact" className="secondary-btn">
              Let's Connect
            </Link>

          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
          </div>

        </div>

        {/* PROFILE CARD */}
        <div className="hero-card">

          <div className="card-top">
            <span>MY PROFILE</span>
            <span className="profile-status">ONLINE</span>
          </div>

          <div className="card-circle">
            R
          </div>

          <h2>RAZ VERMA</h2>

          <p>WEB DEVELOPER</p>

          <div className="card-line"></div>

          <div className="card-bottom">
            CREATIVITY • CODE • INNOVATION
          </div>

        </div>

        <div className="scroll-indicator">
          SCROLL TO EXPLORE
          <span>↓</span>
        </div>

      </section>

      {/* STATS SECTION */}
      <section className="stats-section">

        <div className="stat-box">
          <h2>01</h2>
          <p>Creative Mind</p>
        </div>

        <div className="stat-box">
          <h2>05+</h2>
          <p>Technologies Exploring</p>
        </div>

        <div className="stat-box">
          <h2>∞</h2>
          <p>Ideas to Build</p>
        </div>

      </section>

      {/* INTRO SECTION */}
      <section className="home-intro">

        <p className="tag">WHAT I DO</p>

        <h2>
          Turning Ideas Into
          <span> Digital Reality.</span>
        </h2>

        <p>
          From writing clean code to designing user-friendly
          interfaces, I enjoy creating digital experiences
          that are simple, useful and meaningful.
        </p>

        <Link to="/about" className="primary-btn">
          Know More About Me ↗
        </Link>

      </section>

    </main>
  );
}

export default Home;