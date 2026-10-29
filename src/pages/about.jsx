import { Link } from 'react-router-dom';

function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="about-glow glow-one"></div>
        <div className="about-glow glow-two"></div>

        <div className="about-heading">
          <span className="about-tag">GET TO KNOW ME</span>

          <h1>
            More Than Just
            <br />
            <span>A Developer.</span>
          </h1>

          <p>
            Every great journey begins with curiosity.
            Here's a little story about mine.
          </p>
        </div>

        <div className="about-profile">
          <div className="profile-letter">R</div>
          <h2>RAZ VERMA</h2>
          <p>ASPIRING WEB DEVELOPER</p>
          <span className="profile-line"></span>
          <small>LEARN • CREATE • INNOVATE</small>
        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="about-introduction">

        <div className="section-label">01 / INTRODUCTION</div>

        <div className="intro-content">

          <h2>
            Hello, I'm <span>Raz.</span>
            <br />
            A curious mind who loves technology.
          </h2>

          <div className="intro-paragraphs">

            <p>
              I'm an aspiring Web Developer with a strong interest
              in technology, programming and creative problem-solving.
              I enjoy exploring how websites and applications work,
              understanding the logic behind them and turning ideas
              into interactive digital experiences.
            </p>

            <p>
              My journey started with learning the fundamentals of
              web development. I began exploring HTML and CSS to
              understand how websites are structured and designed.
              Gradually, I moved towards JavaScript and React to learn
              how modern websites become interactive and dynamic.
            </p>

            <p>
              Along with web development, I am also exploring
              programming languages like Python and C. I enjoy
              experimenting with different technologies, trying
              new tools and understanding how software can solve
              practical problems.
            </p>

            <p>
              For me, learning is not limited to watching tutorials
              or reading documentation. I believe in building things,
              making mistakes, debugging problems and improving
              through practice. Working on projects like AnnaRakshak
              has helped me understand how different parts of a
              software project connect with each other.
            </p>

            <p>
              I'm still learning, experimenting and growing every
              day. My goal is to become a skilled developer who can
              create useful, accessible and meaningful digital
              products. I believe consistency, curiosity and the
              willingness to learn are more important than knowing
              everything from day one.
            </p>

          </div>

        </div>

      </section>

      {/* MY JOURNEY */}
      <section className="journey-section">

        <div className="section-label">02 / MY JOURNEY</div>

        <h2>
          Learning Today.
          <span> Building Tomorrow.</span>
        </h2>

        <div className="journey-list">

          <div className="journey-card">
            <span className="journey-number">01</span>
            <div>
              <h3>Web Development</h3>
              <p>
                Started learning HTML and CSS to understand website
                structure, layouts, styling and responsive design.
              </p>
              <span className="journey-status">FOUNDATION</span>
            </div>
          </div>

          <div className="journey-card">
            <span className="journey-number">02</span>
            <div>
              <h3>Programming & Logic</h3>
              <p>
                Exploring JavaScript, Python and C to improve
                programming fundamentals and problem-solving skills.
              </p>
              <span className="journey-status">EXPLORING</span>
            </div>
          </div>

          <div className="journey-card">
            <span className="journey-number">03</span>
            <div>
              <h3>React & Projects</h3>
              <p>
                Learning React and building practical projects
                to understand components, routing and application flow.
              </p>
              <span className="journey-status">BUILDING</span>
            </div>
          </div>

          <div className="journey-card">
            <span className="journey-number">04</span>
            <div>
              <h3>Future Vision</h3>
              <p>
                Exploring new technologies, improving development
                skills and working towards building complete
                real-world applications.
              </p>
              <span className="journey-status">IN PROGRESS</span>
            </div>
          </div>

        </div>

      </section>

      {/* INTERESTS */}
      <section className="interests-section">

        <div className="section-label">03 / WHAT I LOVE</div>

        <h2>
          Things That <span>Drive Me.</span>
        </h2>

        <div className="interest-grid">

          <div className="interest-card">
            <span className="interest-icon">&lt;/&gt;</span>
            <h3>Development</h3>
            <p>Building websites and learning how applications work.</p>
          </div>

          <div className="interest-card">
            <span className="interest-icon">01</span>
            <h3>Programming</h3>
            <p>Understanding logic and solving problems through code.</p>
          </div>

          <div className="interest-card">
            <span className="interest-icon">AI</span>
            <h3>Artificial Intelligence</h3>
            <p>Exploring AI tools and discovering new possibilities.</p>
          </div>

          <div className="interest-card">
            <span className="interest-icon">✦</span>
            <h3>Creative Thinking</h3>
            <p>Turning simple ideas into creative digital experiences.</p>
          </div>

        </div>

      </section>

      {/* PERSONAL PHILOSOPHY */}
      <section className="philosophy-section">

        <p className="about-tag">MY MINDSET</p>

        <h2>
          "Don't just learn technology.
          <br />
          <span>Build something with it."</span>
        </h2>

        <p>
          Every project is a new opportunity to learn,
          experiment and become better.
        </p>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <div>
          <span className="about-tag">LET'S CONNECT</span>
          <h2>Have an idea? Let's build it.</h2>
          <p>I'm always interested in learning and exploring new ideas.</p>
        </div>

        <div className="about-cta-buttons">
          <Link to="/contact" className="primary-btn">
            Contact Me ↗
          </Link>

          <Link to="/skills" className="secondary-btn">
            Explore Skills
          </Link>
        </div>

      </section>

    </main>
  );
}

export default About;