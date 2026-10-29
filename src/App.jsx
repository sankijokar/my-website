import './App.css'

function App() {
  return (
    <div className="website">

      <nav className="navbar">
        <h2>RAZ<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-btn" href="#contact">Let's Talk ↗</a>
      </nav>

      <main id="home" className="hero">
        <div className="hero-content">
          <p className="tag">CREATIVE DEVELOPER & DESIGNER</p>

          <h1>
            Building Digital
            <br />
            <span>Experiences.</span>
          </h1>

          <p className="description">
            Hi, I'm Raz. I create modern websites,
            creative designs and digital experiences
            with technology.
          </p>

          <div className="buttons">
            <a href="#contact" className="primary-btn">
              Explore My Work ↗
            </a>
            <a href="#about" className="secondary-btn">
              About Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-circle">R</div>
          <p>RAZ VERMA</p>
          <span>WEB DEVELOPER</span>
          <div className="card-bottom">CREATIVE MIND • DIGITAL WORLD</div>
        </div>
      </main>

      <section id="about" className="about">
        <p className="tag">INTRODUCTION</p>
        <h2>Turning Ideas Into Reality.</h2>
        <p>
          I love exploring technology, building websites
          and creating innovative digital experiences.
        </p>
      </section>

      <section id="skills" className="skills">
        <p className="tag">WHAT I DO</p>
        <h2>My Skills</h2>
        <div className="skill-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React JS</span>
          <span>UI Design</span>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="tag">LET'S CONNECT</p>
        <h2>Have a Project in Mind?</h2>
        <a href="mailto:hello@example.com">Get In Touch ↗</a>
      </section>

      <footer>© 2026 RAZ VERMA. ALL RIGHTS RESERVED.</footer>

    </div>
  )
}

export default App