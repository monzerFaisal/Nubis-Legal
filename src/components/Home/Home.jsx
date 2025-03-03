// External Libraries
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Internal Components
import ImageComponent from '../ImageComponent/ImageComponent';
import { LuArrowUpRight } from "react-icons/lu";
import { IoMdQuote } from "react-icons/io";
import { FaRegMap } from "react-icons/fa";
import { useAnimation } from '../animations/useIntersectionObserver';

// Assets
import backgroundImage from '../img/loading.png';
import ceo from "../img/assets/Home/ceo home page .svg";
import aboutImage2 from '../img/jera.jpeg';
import svg1 from '../img/assets/Home/Contract Drafting and Review mac.svg';
import svg2 from '../img/assets/Home/Legal Consultation mac.svg';
import svg3 from '../img/assets/Home/Company Formation and Registration mac.svg';
import svg4 from '../img/assets/Home/Trademark and Intellectual Property Registration mac.svg';
import svg5 from '../img/assets/Home/Company Formation and Registration mac.svg';
import svg6 from '../img/assets/Home/Debt Collection mac.svg';
import svg7 from '../img/assets/Home/Litigation and Court Documents mac .svg';
import svg8 from '../img/assets/Home/Dispute Resolution mac .svg';
import svg9 from '../img/assets/Home/Contract Review and Analysis mac.svg';
import svg10 from '../img/assets/Home/Real Estate Legal Support mac .svg';
import svg11 from '../img/assets/Home/Tax and Financial Legal Services mac.svg';
import svg12 from '../img/assets/Home/Regulatory and Legal Compliance mac.svg';

// Styles
import './Home.css';

// رابط WordPress API مع جلب أحدث خمس مقالات
const WORDPRESS_API_URL = 'https://nubislegal.com/wp-json/wp/v2/posts?_embed&order=desc&orderby=date&per_page=5';

function Home() {
  const fadeUpRef = useAnimation('fadeUp');
  const testimonials = [
    {
      name: "Maria Smantha",
      role: "Web Developer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
    },
    {
      name: "Lisa Cudrow",
      role: "Graphic Designer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      testimonial:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
    {
      name: "John Smith",
      role: "Marketing Specialist",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      testimonial:
        "At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia mollitia animi id laborum et dolorum fuga.",
    },
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // حالة لتخزين المقالات القادمة من WordPress
  const [blogPosts, setBlogPosts] = useState([]);

  // جلب المقالات من WordPress باستخدام axios مع الرابط المعدل لجلب أحدث خمس مقالات
  useEffect(() => {
    axios
      .get(WORDPRESS_API_URL)
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  return (
    <>
      {/* -- Hero Section -- */}
      <section className="hero">
        <div className="hero-image-container">
          <img 
            src={backgroundImage} 
            alt="Decorative background" 
            className="hero-bg"
            role="presentation" // For screen readers (since it's decorative)
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">
            <span className="highlight">
              NUBIS LEGAL CONSULTANCY SERVICES.<br /> YOUR TRUSTED LEGAL PARTNER.
            </span>
          </h1>
          <p className="hero-subtitle">
            Where Innovation Meets Expertise <br />Delivering Smarter Legal Solutions
          </p>
          <div className="hero-cta">
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </section>

      {/* -- About Us Section -- */}
      <section className="about-us" id="about" ref={fadeUpRef} data-animation="fadeUp">
        <div className="about-us-container">
          <div className="about-us-content">
            {/* Left Image Blocks */}
            <div className="about-us-blocks">
              <img src={aboutImage2} alt="About Us 2" />
            </div>
            {/* Right Text Section */}
            <div className="about-us-text">
              <h2 className="about-us-title">ABOUT US</h2>
              <p>
                &quot;At Nubis legal consultancy, we combine legal expertise with a modern, client-focused approach. Our team of seasoned professionals with experience in corporate, commercial, and civil law is dedicated to providing innovative, tailored solutions for businesses and individuals alike. We pride ourselves on delivering clarity, efficiency, and results in every case.&quot;
                <br />
                When you choose Nubis, you&apos;re choosing a strategic partner committed to easing your burden, navigating the complexity of your matter, and achieving success...
              </p>
              <button className="about-us-btn">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* -- Features Section -- */}
      <section className="features">
        <div className="features-container">
          <div className="feature-header">
            <h2>
              <span className="features-title">OUR FEATURES</span>
            </h2>
          </div>
          <div className="features-layout">
            {[
              { 
                icon: <FaRegMap />,
                title: "Experienced Legal Professionals ",
                text: "Decades of combined expertise.",
              },
              {
                icon: <FaRegMap />,
                title: "Client-Focused Approach",
                text: "Tailored solutions for your unique needs.",
              },
              {
                icon: <FaRegMap />,
                title: "Modern Legal Solutions",
                text: "Leveraging technology for efficiency",
              },
              { 
                icon: <FaRegMap />,
                title: "Transparent Pricing",
                text: "Clear, upfront costs with no hidden fees",
              },
            ].map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CEO Section -- */}
      <section className="ceo" id="ceo">
        <div className="ceo-container">
          {/* Right Text Section */}
          <div className="ceo-text">
            <p>
              &quot; The legal world is constantly evolving, and so are we. At Nubis Legal Consultancy, we believe that every individual and business deserves access to top-tier legal services, we believe that legal services should be more than just transactions—they should be partnerships built on trust, clarity, and commitment. We founded this firm to provide businesses and individuals with reliable, strategic, and results-driven legal solutions...&quot;
            </p>
            <h2 className="ceo-title">CEO</h2>
          </div>
          {/* Left Image Blocks */}
          <div className="ceo-blocks">
            <img src={ceo} alt="CEO" />
          </div>
        </div>
      </section>

      {/* -- Meta Section -- */}
      <ImageComponent
        headings={[
          "Experience the future",
          "Blend virtual objects with your physical space",
          "Transform your reality"
        ]}
        imageUrl={backgroundImage}
      />

      {/* -- Services Section -- */}
      <section className="services" id="services">
        <div className="container mx-auto px-4 py-16">
          {/* Services Header */}
          <div className="services-header flex items-center mb-12">
            <span className="w-1 h-10 bg-gray-400 mr-3"></span>
            <h2 className="services-title">Our Services</h2>
          </div>
          {/* Scroll Container */}
          <div className="scroll-container">
            {[
              {
                title: "Contract Drafting and Review",
                description: "Clear, Strong, and Legally Sound Contracts for Your Business, Maximize business value from contracts.",
                text:" with experts in strategy, implementation, and operational support.",
                icon: svg1
              },
              {
                title: "Legal Consultation",
                description: "Expert Legal Advice, Personalized for You",
                text:' and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                icon: svg2
              },
              {
                title: "Company Formation and Registration",
                description: "Start Your Business the Right Way",
                text:'Take advantage of well-deployed technology and work with the experts at Nubis.',
                icon: svg3
              },
              {
                title: "Trademark and Intellectual Property Registration",
                description: "Protect Your Brand and Innovations",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                icon: svg4
              },
              {
                title: "Legal Document Preparation",
                description: "Protect your digital assets with enterprise-grade security",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                icon: svg5
              },
              {
                title: "Debt Collection",
                description: "Transform your business with data-driven decisions",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                icon: svg6
              },
              {
                title: "Litigation and Court Documents",
                description: "Full-stack technical support and maintenance",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                icon: svg7
              },
              {
                title: "Dispute Resolution",
                description: "Protect your digital assets with enterprise-grade security",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                icon: svg8
              },
              {
                title: "Contract Review and Analysis",
                description: "Transform your business with data-driven decisions",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                icon: svg9
              },
              {
                title: "Real Estate Legal Support",
                description: "Full-stack technical support and maintenance",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                icon: svg10
              },
              {
                title: "Tax and Financial Legal Services",
                description: "Protect your digital assets with enterprise-grade security",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                icon: svg11
              },
              {
                title: "Regulatory and Legal Compliance",
                description: "Protect your digital assets with enterprise-grade security",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                icon: svg12
              },
            ].map((service, index) => (
              <div key={index}>
                <div className="service-item">
                  <div className="service-icon flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-lg mb-4">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-full h-full p-2 object-contain"
                      style={{ color: "white" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{service.description}</p>
                  <p className="text-base text-gray-700 leading-relaxed">{service.text}</p>
                  <div className="absolute bottom-4 right-4 text-gray-700 text-2xl">
                    <LuArrowUpRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Image Section -- */}
      <section className="image-section">
        <div
          className="image-section-bg"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="overlay"></div>
          <div className="text-container">
            <h1>LOREM IPSUIM</h1>
            <h2>LOREM IPSUIMMMM.</h2>
          </div>
          <div className="circle"></div>
        </div>
      </section>

      {/* -- Blog Section -- */}
      <section className="blog-section" id="blog">
        {/* Blog Header */}
        <div className="blog-header">
          <h2 className="blog-title">
            OUR <span className="uppercase">BLOG</span>
          </h2>
        </div>
        {/* Blog Cards Grid */}
        <div className="blog-grid">
          {blogPosts.length ? (
            blogPosts.map((post, index) => (
              <div
                key={index}
                className="blog-item bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300"
              >
                <div className="blog-image rounded-lg overflow-hidden mb-4">
                  {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                    <img
                      src={post._embedded["wp:featuredmedia"][0].source_url}
                      alt={post.title.rendered}
                      className="w-full h-40 object-cover"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
                      No Image
                    </div>
                  )}
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <h3
                  className="text-xl font-bold mt-2 mb-4"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                ></h3>
                <p
                  className="text-base text-gray-700 leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                ></p>
              </div>
            ))
          ) : (
            <p>Loading posts...</p>
          )}
        </div>
      </section>

      {/* ----------- Testimonials ----------- */}
      <section className="testimonials">
        <div className="container my-5 py-5">
          <h1 className="testimonials-title">TESTIMONIAL</h1>
          <div className="testimonial-wrapper position-relative">
            <div className="position-absolute top-0 start-50 translate-middle">
              <img
                src={testimonials[activeTestimonial].image}
                className="avatar rounded-circle border-4 border-white"
                alt={testimonials[activeTestimonial].name}
                style={{ width: '96px', height: '96px', objectFit: 'cover' }}
              />
            </div>
            <div className="testimonial-card bg-primary rounded-4 p-5 pt-5 position-relative">
              <span className="quote-mark fs-1 text-warning text-center d-block mb-3">
                <IoMdQuote />
              </span>
              <div className="testimonial-content">
                <p className="testimonial-text text-white text-center lh-base mb-0">
                  {testimonials[activeTestimonial].testimonial}
                </p>
                <div className="client-info text-center mt-4">
                  <h4 className="client-name text-white mb-1">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="client-role text-light mb-0">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
              <div className="dots d-flex justify-content-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot rounded-pill ${index === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(index)}
                    style={{
                      width: index === activeTestimonial ? '32px' : '8px',
                      height: '8px',
                      backgroundColor: index === activeTestimonial ? '#2563eb' : '#e5e5e5',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
