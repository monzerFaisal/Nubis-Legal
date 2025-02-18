// External Libraries
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Internal Components
import ImageComponent from '../ImageComponent/ImageComponent';

// Assets
import backgroundImage from '../img/loading.png';
import aboutImage2 from '../img/jera.jpeg';

// Styles
import './Home.css';

function Home() {
  const testimonials = [
    {
      name: "Maria Smantha",
      role: "Web Developer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem. Est, exercitationem id ipsa ipsum laboriosam perferendis.",
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
      <span className="highlight">Innovative Digital Solutions </span>
    </h1>
    <p className="hero-subtitle">
      Transforming ideas into exceptional digital experiences
    </p>
    <div className="hero-cta">
      <button className="cta-button">Get Started</button>
    </div>
  </div>
</section>




      {/* -- Features Section -- */}
      <section className="features">
        <div className='features-container'>
        <div className="feature-header">
          <h2>
            <span className="line"></span>
            <span className="features-title">OUR <br />FEATURES</span>
          </h2>
        </div>
        <div className="features-layout">
          {[
            { 
              icon: "fa-shield-alt",
              title: "Military-Grade Security",
              text: "Advanced encryption protocols and multi-layered protection for your sensitive data.",
            },
            {
              icon: "fa-rocket",
              title: "Lightning Fast Performance",
              text: "Optimized infrastructure delivering 99.99% uptime and instant response times.",
            },
            {
              icon: "fa-infinity",
              title: "Scalable Architecture",
              text: "Flexible solutions that grow seamlessly with your business needs.",
            },
            { 
              icon: "fa-headset",
              title: "24/7 Expert Support",
              text: "Round-the-clock assistance from certified technical specialists.",
            },
          ].map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
        </div>
      </section>




     {/* -- About Us Section -- */}
     <section className="about-us" id="about">
        <div className="about-us-container">
          <div className="about-us-content">
            {/* Left Image Blocks */}
            <div className="about-us-blocks">
          
              
                <img src={aboutImage2} alt="About Us 2" />
              

            </div>

            {/* Right Text Section */}
            <div className="about-us-text">
              <h2 className="about-us-title">ABOUT US</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis,
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                eget feugiat magna rhoncus.</p><br />
                <button className="about-us-btn">Get Started</button>
            </div>
            
          </div>
          
        </div>
      </section>



           {/* -- CEO Section -- */}
     <section className="about-us" id="about">
        <div className="about-us-container">
          <div className="about-us-content"></div>
           {/* Right Text Section */}
           <div className="about-us-text">
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis,
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                eget feugiat magna rhoncus.</p><br />
                <h2 className="ceo-title">CEO</h2>
            </div>
            
          </div>
           {/* Left Image Blocks */}
           <div className="ceo-blocks">
          
              
          <img src={aboutImage2} alt="About Us 2" />
        

      </div>



          </section>



      {/* -- meta Section -- */}
      
      <ImageComponent />








      {/* -- Services Section -- */}
      <section className="services" id="services">
        <div className="container mx-auto px-4 py-16">
          {/* Services Header */}
          <div className="services-header flex items-center mb-12">
            <span className="w-1 h-10 bg-gray-400 mr-3"></span>
            <h2 className="about-us-title">
              OUR  <span className="uppercase">Services</span>
            </h2>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            className="services-swiper"
          >
            {[
              {
                title: "Tech Acceleration",
                description: "Modernize your infrastructure with cutting-edge solutions",
                icon: "🚀"
              },
              {
                title: "Cyber Security",
                description: "Protect your digital assets with enterprise-grade security",
                icon: "🔐"
              },
              {
                title: "Digital Strategy",
                description: "Transform your business with data-driven decisions",
                icon: "📊"
              },
              {
                title: "Managed Services",
                description: "Full-stack technical support and maintenance",
                icon: "⚙️"
              },
            ].map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-item bg-gray-200 p-6 rounded-xl relative shadow-md hover:shadow-lg transition-transform duration-300 mx-2">
                  <div className="service-icon flex items-center justify-center w-16 h-16 bg-gray-800 text-white text-2xl rounded-lg mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{service.description}</p>
                  <div className="absolute bottom-4 right-4 text-gray-700 text-2xl">
                    →
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Buttons */}
            
          </Swiper>
        </div>
      </section>





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








      {/* -- Bolg Section -- */}


{/* -- Blog Section -- */}
<section className="blog-section" id="blog">
    
    {/* Blog Header */}
    <div className="blog-header ">
      
      <h2 className="blog-title">
        OUR <span className="uppercase">BLOG</span>
      </h2>
    </div>

    {/* Blog Cards Grid */}
{/* Blog Cards Grid */}
<div className="blog-grid">
  {[
    {
      title: "Tech Trends 2024",
      excerpt: "Discover the latest innovations shaping the digital landscape...",
      image: '../img/jera.jpeg',  // Ensure this is set for each post
      date: "Jan 15, 2024",
    },
    {
      title: "Cybersecurity Essentials",
      excerpt: "Learn how to protect your business from emerging threats...",
      image: '../img/jera.jpeg',
      date: "Feb 1, 2024",
    },
    {
      title: "Cybersecurity Essentials",
      excerpt: "Learn how to protect your business from emerging threats...",
      image: '../img/jera.jpeg',
      date: "Feb 1, 2024",
    },
    {
      title: "Cybersecurity Essentials",
      excerpt: "Learn how to protect your business from emerging threats...",
      image: '../img/jera.jpeg',
      date: "Feb 1, 2024",
    },
    {
      title: "AI Revolution",
      excerpt: "How artificial intelligence is transforming industries...",
      image: '../img/jera.jpeg',
      date: "Mar 10, 2024",
    },
    {
      title: "Cloud Computing",
      excerpt: "The future of scalable and efficient business solutions...",
      image: '../img/jera.jpeg',
      date: "Apr 5, 2024",
    },
    {
      title: "Blockchain Basics",
      excerpt: "Understanding the technology behind cryptocurrencies...",
      image: '../img/jera.jpeg',
      date: "May 20, 2024",
    },
    {
      title: "UI/UX Design Trends",
      excerpt: "Explore the latest in user interface and experience design...",
      image: '../img/jera.jpeg',
      date: "Jun 12, 2024",
    },
    {
      title: "Data Analytics",
      excerpt: "Harnessing the power of data for business insights...",
      image: '../img/jera.jpeg',
      date: "Jul 8, 2024",
    },
    {
      title: "Remote Work Tools",
      excerpt: "Essential tools for productive remote work environments...",
      image: '../img/jera.jpeg',
      date: "Aug 22, 2024",
    },
  ].map((post, index) => (
    <div
      key={index}
      className="blog-item bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300"
    >
      <div className="blog-image rounded-lg overflow-hidden mb-4">
        <img
          src={aboutImage2}  // The image source is already consistent
          alt={post.title}
          className="w-full h-40 object-cover"
        />
      </div>
      <span className="text-sm text-gray-500">{post.date}</span>
      <h3 className="text-xl font-bold mt-2 mb-4">{post.title}</h3>
      <p className="text-base text-gray-700 leading-relaxed mb-4">
        {post.excerpt}
      </p>
     
    </div>
  ))}
</div>

  
</section>




{/* ----------- Testimonials ----------- */}

<section className="testimonials">
  <div className="container my-5 py-5">
    <div className="testimonials-header">
      <h2 className="testimonials-title">
        Testimonials
      </h2>
    </div>

    <div className="row d-flex justify-content-center">
      <div className="col-md-12">
        <div className="card testimonial-card">
          <div className="card-body px-3 py-4 position-relative">
            {/* أيقونة الاقتباس اليسرى */}
            <i className="fas fa-quote-left fa-2x quote-icon left"></i>

            {/* Scrollable Container */}
            <div className="scroll-container">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                      <div className="row">
                        <div className="col-lg-4 d-flex justify-content-center align-items-center">
                          <img
                            src={testimonial.image}
                            className="profile-image"
                            alt={testimonial.name}
                          />
                        </div>
                        <div className="col-9 col-md-9 col-lg-8 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                          <div className="client-info">
                            <h4 className="client-name">
                              {testimonial.name}
                            </h4>
                            <p className="client-role">{testimonial.role}</p>
                          </div>
                          <p className="testimonial-text">
                            {testimonial.testimonial}
                          </p>
                          <div className="rating">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`star ${i < testimonial.rating ? 'active' : ''}`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 1l2.928 6.472 6.472.928-4.472 4.472 1.056 6.472-5.984-3.056-5.984 3.056 1.056-6.472-4.472-4.472 6.472-.928z" />
                              </svg>
                            ))}
                          </div>
                          <p className="date">{testimonial.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* أيقونة الاقتباس اليمنى */}
            <i className="fas fa-quote-right fa-2x quote-icon right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  );
}

export default Home;