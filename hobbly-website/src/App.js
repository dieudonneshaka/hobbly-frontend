import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1 className="logo">Hobbly Technologies Oy</h1>
        <nav>
          <a href="#about">About us</a>
          <a href="#activities">Activities</a>
          <a href="#application">Application</a>
          <a href="#organisations">Organisations</a>
          <a href="#contact">Contact us</a>
        </nav>
      </header>

      {/* About Us */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          Hobbly Technologies Oy is a modern technology company, whose mission
          is to make people’s everyday lives easier by making hobbies and leisure
          opportunities easy to find and accessible. The company aims to enhance
          people’s well-being and sense of community by providing digital
          solutions that connect users with hobbies and service providers.
        </p>
        <img
          src="https://source.unsplash.com/800x400/?technology,community"
          alt="About us"
        />
      </section>

      {/* Activities */}
      <section id="activities" className="section">
        <h2>Activities</h2>
        <div className="cards">
          <div className="card">
            <h3>Sea Expedition across the Caribbean</h3>
            <p>
              A sea journey across the Helsinki archipelago with adventures and
              stops at picturesque locations.
            </p>
          </div>
          <div className="card">
            <h3>Pirate Festival with Music & Dance</h3>
            <p>
              A celebration of pirate culture with live music, dancing, and
              street performances.
            </p>
          </div>
          <div className="card">
            <h3>Pirate Cooking Masterclass</h3>
            <p>A culinary masterclass on traditional pirate cuisine.</p>
          </div>
          <div className="card">
            <h3>Navigation, Knots & Survival at Sea</h3>
            <p>
              Training in navigation, maritime knots, and basic survival skills
              at sea.
            </p>
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="application" className="section">
        <h2>Application</h2>
        <p>
          We have a mobile application that helps you find any leisure
          activities in the Uusimaa region. The mobile application allows users
          to easily find suitable options and obtain reliable information about
          service providers. The app serves a wide range of target groups,
          including children, youth, adults, families, and seniors.
        </p>
        <button className="btn">Download the App</button>
      </section>

      {/* Organisations */}
      <section id="organisations" className="section">
        <h2>Organisations</h2>
        <p>
          We work with various service providers who can easily register on our
          website and offer their events. Service providers can add their events
          to our application.
        </p>
        <img
          src="https://source.unsplash.com/800x400/?office,team"
          alt="Organisations"
        />
      </section>

      {/* Contact Us */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Address" />
          <textarea placeholder="Your message"></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
        <p>
          Address: Rautatieläisenkatu 5, 00520 Helsinki <br />
          Phone: +7403530530 <br />
          Email: hobbly@gmail.com
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Hobbly Technologies Oy</p>
      </footer>
    </div>
  );
}

export default App;
