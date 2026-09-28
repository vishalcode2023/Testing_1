
const App = () => {
  const features = [
    {
      number: "01",
      title: "Modern Design",
      description:
        "Beautiful, intuitive interfaces designed to make your brand stand out and keep visitors engaged.",
      icon: "✳",
    },
    {
      number: "02",
      title: "Fast Performance",
      description:
        "Lightning-fast experiences with responsive layouts and optimized performance on every device.",
      icon: "⚡",
    },
    {
      number: "03",
      title: "Built to Scale",
      description:
        "Flexible solutions that grow alongside your business, from your first customer to your next milestone.",
      icon: "↗",
    },
  ];

  const stats = [
    ["10+", "Projects delivered"],
    ["100%", "Commitment"],
    ["24/7", "Ideas in motion"],
    ["∞", "Possibilities"],
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <header className="header container">
        <a href="#" className="logo">
          <div className="logo-icon">A</div>
          <span>Aether.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero container">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              Creative digital studio
            </div>

            <h1>
              Build something
              <span className="highlight">remarkable.</span>
            </h1>

            <p className="hero-description">
              We turn ambitious ideas into meaningful digital experiences.
              Thoughtful design, smart technology, and a little creativity go a
              long way.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="button button-primary">
                Start a project <span>↗</span>
              </a>

              <a href="#about" className="button button-secondary">
                Explore more <span>↓</span>
              </a>
            </div>

            <div className="social-proof">
              <div className="avatar-group">
                <div className="avatar avatar-one">J</div>
                <div className="avatar avatar-two">M</div>
                <div className="avatar avatar-three">S</div>
              </div>

              <div>
                <p className="proof-title">Ideas become reality</p>
                <p className="proof-subtitle">
                  Design with purpose. Build with care.
                </p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hero-visual">
            <div className="glow glow-top"></div>
            <div className="glow glow-bottom"></div>

            <div className="image-frame">
              <div className="hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85"
                  alt="Sunlight streaming through a lush green forest"
                  className="hero-image"
                />

                <div className="image-overlay"></div>

                <div className="image-caption">
                  <p>Our approach</p>
                  <h2>Inspired by nature. Made for tomorrow.</h2>
                </div>
              </div>
            </div>

            <div className="floating-card">
              <div className="floating-icon">✦</div>
              <div>
                <p>Creative thinking</p>
                <strong>Made with purpose</strong>
              </div>
            </div>

            <div className="floating-stat">
              <p>Every detail matters</p>
              <strong>01 — 100%</strong>
            </div>
          </div>
        </section>

        {/* About / Stats */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="about-intro">
              <div>
                <p className="section-label">Who we are</p>
                <h2>A fresh perspective for a digital world.</h2>
              </div>

              <div>
                <p className="about-description">
                  Great things happen when creativity meets clarity. We help
                  businesses find their voice, build their presence, and create
                  experiences that people remember.
                </p>
              </div>
            </div>

            <div className="stats-grid">
              {stats.map(([number, label]) => (
                <div className="stat-item" key={label}>
                  <p className="stat-number">{number}</p>
                  <p className="stat-label">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="services-section container">
          <div className="services-heading">
            <div>
              <p className="section-label dark-label">What we do</p>
              <h2>Thoughtful by design.</h2>
            </div>

            <p className="services-intro">
              From the first spark of an idea to the final launch, we make every
              step count.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-top">
                  <span className="feature-number">{feature.number}</span>

                  <span className="feature-icon">{feature.icon}</span>
                </div>

                <h3>{feature.title}</h3>

                <p className="feature-description">{feature.description}</p>

                <a href="#contact" className="learn-more">
                  Learn more <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="contact-section container">
          <div className="contact-card">
            <p className="section-label dark-label">Have a project in mind?</p>

            <h2>
              Let's create something
              <span> extraordinary.</span>
            </h2>

            <p className="contact-description">
              Have an idea, a challenge, or a big dream? We'd love to hear about
              it. Let's make it happen together.
            </p>

            <a
              href="mailto:hello@example.com"
              className="button button-primary contact-button"
            >
              Get in touch <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <a href="#" className="logo footer-logo">
            <div className="logo-icon footer-logo-icon">A</div>
            <span>Aether.</span>
          </a>

          <p className="copyright">
            © {new Date().getFullYear()} Aether Studio. All rights reserved.
          </p>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
