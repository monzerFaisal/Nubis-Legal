import './AboutUS.css';
import backgroundImage from '../img/loading.png';
import aboutImage2 from '../img/jera.jpeg';



function AboutUS() {
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
                
            </div>
            
          </div>
          
        </div>
      </section>

           {/* -- CEO Section -- */}
     <section className="ceo" id="about">
        <div className="ceo-container">
          <div className="ceo-content"></div>
           {/* Right Text Section */}
           <div className="ceo-text">
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis,
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                eget feugiat magna rhoncus.</p>
                
            </div>
            
          </div>
           {/* Left Image Blocks */}
           <div className="ceo-blocks">
          
              
          <img src={aboutImage2} alt="About Us 2" />
        

      </div>



          </section>





     {/* -- #########################nimo####################### -- */}
     <section className="nimo" id="about">
        <div className="nimo-container">
          <div className="nimo-content">
            {/* Left Image Blocks */}
            <div className="nimo-blocks">
          
              
            <span>  <img src={aboutImage2} alt="About Us 2" /></span>
            <span>  <img src={aboutImage2} alt="About Us 2" /></span>
            <span>  <img src={aboutImage2} alt="About Us 2" /></span>

            </div>

            {/* Right Text Section */}
            <div className="nimo-text">
              <h2 className="nimo-title">ABOUT US</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis,
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                eget feugiat magna rhoncus.</p><br />
                
            </div>
            
          </div>
          
        </div>
      </section>

{/* ----------------------------------------------------------- */}

<section className="counter-section">
  <div className="counter-container">
    <div className="counter-grid">
      {/* <!-- Column 1 --> */}
      <div className="counter-card">
        <h2 className="counter-number">70+</h2>
        <h3 className="counter-title">Coded Elements</h3>
        <p className="counter-description">
          From buttons, to inputs, navbars, alerts or cards, you are covered
        </p>
      </div>

      {/* <!-- Column 2 --> */}
      <div className="counter-card">
        <h2 className="counter-number">15+</h2>
        <h3 className="counter-title">Design Blocks</h3>
        <p className="counter-description">
          Mix the sections, change the colors and unleash your creativity
        </p>
      </div>

      {/* <!-- Column 3 --> */}
      <div className="counter-card">
        <h2 className="counter-number">4</h2>
        <h3 className="counter-title">Pages</h3>
        <p className="counter-description">
          Save 3-4 weeks of work when you use our pre-made pages for your website
        </p>
      </div>

      {/* <!-- Column 4 --> */}
      <div className="counter-card">
        <h2 className="counter-number">99%</h2>
        <h3 className="counter-title">Satisfaction</h3>
        <p className="counter-description">
          Join thousands of happy customers using our templates and components
        </p>
      </div>
    </div>
  </div>
</section>


{/* ---------c-goal----------------- */}


     <section className="c-goal" id="about">
        <div className="c-goal-container">
          <div className="c-goal-content"></div>
           {/* Right Text Section */}
           <div className="c-goal-text">
           <h2 className="c-goal-title">Our Main company goal................................ </h2>
           <div className='c-goal-text-span'>
           <span>Mission</span>
           <span>Vission</span>
           <span>Values</span>
           </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis,
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                eget feugiat magna rhoncus.</p>
            </div>
            
          </div>
           {/* Left Image Blocks */}
           <div className="c-goal-blocks">
          
              
          <img src={aboutImage2} alt="About Us 2" />
        

      </div>



          </section>


{/* -- Meet Our Team Section -- */}
<section className="meet-our-team" id="team">
  <div className="container">
    <h2 className="meet-our-team-title">Meet Our Team</h2>
    <div className="scroll-container">
      <div className="team-grid">
        <div className="team-member">
          <img src={aboutImage2} alt="James Ford" className="member-photo" />
          <h3 className="member-name">James Ford</h3>
          <p className="member-position">Director General</p>
        </div>
        <div className="team-member">
          <img src={aboutImage2} alt="Ann Brown" className="member-photo" />
          <h3 className="member-name">Ann Brown</h3>
          <p className="member-position">Manager</p>
        </div>
        <div className="team-member">
          <img src={aboutImage2} alt="Ben Jason" className="member-photo" />
          <h3 className="member-name">Ben Jason</h3>
          <p className="member-position">Developer</p>
        </div>
      </div>
    </div>
  </div>
</section>







    </>
  );
}

export default AboutUS;