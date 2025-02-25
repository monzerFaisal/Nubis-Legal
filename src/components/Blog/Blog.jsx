// External Libraries
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Assets
import backgroundImage from '../img/loading.png';

// Styles
import './Blog.css';

function Blog() {
  return (
    <>
      {/* -- Hero Section -- */}
      <section className="hero">
        <div className="hero-image-container">
          <img 
            src={backgroundImage} 
            alt="Decorative background" 
            className="hero-bg"
            role="presentation"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">
            <span className="highlight">NUBIS LEGAL CONSULTANCY SERVICES.<br /> YOUR TRUSTED LEGAL PARTNER.</span>
          </h1>
          <p className="hero-subtitle">
            Where Innovation Meets Expertise <br />Delivering Smarter Legal Solutions
          </p>
          <div className="hero-cta">
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </section>

      {/* -- Blog Section -- */}
      <section className="blog-section">
        <h2 className="blog-heading">BLOG</h2>
        <div className="blog-heading-line"></div>
        
        <article className="blog-post">
          <div className="blog-image"><img src="" alt="" /></div>
          <div className="blog-content">
            <h3 className="blog-title">Lorem ipsum lorem.</h3>
            <div className="blog-date">2/17/2025</div>
            <p className="blog-excerpt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="read-more">
              READ MORE
              <span className="read-more-icon">
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
          
        </article>
        <div className="blog-buttom-line"></div>
      </section>
    </>
  );
}

export default Blog;