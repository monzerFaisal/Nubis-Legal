import './AboutUS.css';
import backgroundImage from '../img/loading.png';
import aboutImage2 from '../img/jera.jpeg';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';



function AboutUS() {  const [activeTab, setActiveTab] = useState("mission");

  const renderGoalContent = () => {
    switch (activeTab) {
      case "mission":
        return (
          <p>
            Our mission is to provide innovative solutions to our customers
            while fostering sustainability and social responsibility.
          </p>
        );
      case "vision":
        return (
          <p>
            Our vision is to be a global leader in our industry, shaping the
            future through innovation and excellence.
          </p>
        );
      case "values":
        return (
          <p>
            Our core values include integrity, customer focus, collaboration,
            and continuous improvement.
          </p>
        );
      default:
        return null;
    }
  };

  const CounterCard = ({ number, title, description }) => {
    const [count, setCount] = useState(1); // Start at 1

    useEffect(() => {
      const incrementCount = () => {
        let start = 1;
        const end = number; // Target number
        const incrementTime = 50; // Interval time in ms

        const increment = () => {
          start += 3;
          setCount(start);
          if (start < end) {
            setTimeout(increment, incrementTime);
          }
        };

        increment();
      };

      incrementCount();
    }, [number]);

    return (
      <div className="counter-card">
        <h2 className="counter-number">{count}+</h2>
        <h3 className="counter-title">{title}</h3>
        <p className="counter-description">{description}</p>
      </div>
    );
  };

  // Prop validation for CounterCard component
  CounterCard.propTypes = {
    number: PropTypes.number.isRequired, // number should be a required prop and must be a number
    title: PropTypes.string.isRequired,  // title should be a required prop and must be a string
    description: PropTypes.string.isRequired // description should be a required prop and must be a string
  };

  
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




          {/* ------------------------counter-section----------------------------------- */}

          <section className="counter-section">
        <div className="counter-container">
          <div className="counter-grid">
            <CounterCard 
              number={70} 
              title="Coded Elements" 
              description="From buttons, to inputs, navbars, alerts or cards, you are covered"
            />
            <CounterCard 
              number={15} 
              title="Design Blocks" 
              description="Mix the sections, change the colors and unleash your creativity"
            />
            <CounterCard 
              number={4} 
              title="Pages" 
              description="Save 3-4 weeks of work when you use our pre-made pages for your website"
            />
            <CounterCard 
              number={99} 
              title="Satisfaction" 
              description="Join thousands of happy customers using our templates and components"
            />
          </div>
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




{/* -- Company Goal Section with Functional Buttons -- */}
<section className="c-goal" id="goal">
        <div className="c-goal-container">
          <div className="c-goal-content"></div>
          {/* Right Text Section */}
          <div className="c-goal-text">
            <h2 className="c-goal-title">Our Main Company Goal</h2>
            <div className="c-goal-btn">
              <button
                className={activeTab === "mission" ? "active" : ""}
                onClick={() => setActiveTab("mission")}
              >
                Mission
              </button>
              <button
                className={activeTab === "vision" ? "active" : ""}
                onClick={() => setActiveTab("vision")}
              >
                Vision
              </button>
              <button
                className={activeTab === "values" ? "active" : ""}
                onClick={() => setActiveTab("values")}
              >
                Values
              </button>
            </div>
            {renderGoalContent()}
          </div>
          {/* Left Image Blocks */}
          <div className="c-goal-blocks">
            <img src={aboutImage2} alt="About Us 2" />
          </div>
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