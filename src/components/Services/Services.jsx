import './Services.css';
import { LuArrowUpRight } from "react-icons/lu";

// Assets
import backgroundImage from '../img/loading.png';
// import aboutImage2 from '../img/jera.jpeg';
// import ceoHomepage from "../img/assets/Home/ceo home page .svg"
import svg1 from '../img/assets/Home/Contract Drafting and Review mac.svg'
import svg2 from '../img/assets/Home/Legal Consultation mac.svg'
import svg3 from '../img/assets/Home/Company Formation and Registration mac.svg'
import svg4 from '../img/assets/Home/Trademark and Intellectual Property Registration mac.svg'
import svg5 from '../img/assets/Home/Company Formation and Registration mac.svg'
import svg6 from '../img/assets/Home/Debt Collection mac.svg'
import svg7 from '../img/assets/Home/Litigation and Court Documents mac .svg'
import svg8 from '../img/assets/Home/Dispute Resolution mac .svg'
import svg9 from '../img/assets/Home/Contract Review and Analysis mac.svg'
import svg10 from '../img/assets/Home/Real Estate Legal Support mac .svg'
import svg11 from '../img/assets/Home/Tax and Financial Legal Services mac.svg'
import svg12 from '../img/assets/Home/Regulatory and Legal Compliance mac.svg'

function Services() {
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
      



{/* -- Services Section -- */}
<section className="services" id="services">
  <div className="container mx-auto px-4 py-16">
    {/* Services Header */}
    <div className="services-header flex items-center mb-12">
      <span className="w-1 h-10 bg-gray-400 mr-3"></span>
      <h2 className="services-title">
        Our Services
      </h2>
    </div>

    {/* Services Grid */}
    <div className="services-grid">
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
                      <div className="service-item bg-gray-200 p-6 rounded-xl relative shadow-md hover:shadow-lg transition-transform duration-300 mx-2">
                        <div className="service-icon flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-lg mb-4">
                          <img 
                            src={service.icon} 
                            alt={service.title}
                            className="w-full h-full p-2 object-contain"
                            style={{ color: "white" }} // Pass color to SVG
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

    </>
  );
}

export default Services;
