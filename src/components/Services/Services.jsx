import './Services.css';

function Services() {
  return (
    <>
      {/* -- Hero Section -- */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Business with Digital Excellence
            </h1>
            <p className="hero-subtitle">
              Strategic technology solutions for sustainable growth and innovation
            </p>
            <div className="hero-cta">
              <a href="#contact" className="cta-button">
                Start Now
              </a>
              <a href="#services" className="cta-button secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/src/components/img/jera.jpeg" alt="Digital transformation" loading="lazy" />
          </div>
        </div>
      </section>

    </>
  );
}

export default Services;
