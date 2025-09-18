import React from "react";
import "./App.css";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Header Navigation */}
      <header className="header">
        <nav>
          <ul>
            <li onClick={() => scrollToSection("about")}>About Us</li>
            <li onClick={() => scrollToSection("activities")}>Activities</li>
            <li onClick={() => scrollToSection("application")}>Application</li>
            <li onClick={() => scrollToSection("organisations")}>Organisations</li>
            <li onClick={() => scrollToSection("contact")}>Contact Us</li>
          </ul>
        </nav>
      </header>

      {/* About Us */}
      <section id="about" className="section about">
        <h1>About Us</h1>
        <p>
          Hobbly Technologies OY is a modern technology company, whose mission is
          to make people’s everyday lives easier by making hobbies and leisure
          opportunities easy to find and accessible. The company aims to enhance
          people’s well-being and sense of community by providing digital
          solutions that connect users with hobbies and service providers.
        </p>
      </section>

      {/* Activities */}
      <section id="activities" className="section activities">
        <h1>Activities</h1>
        <ul>
          <li>Sea Expedition across the Caribbean</li>
          <li>Pirate Festival with Music & Dance</li>
          <li>Pirate Cooking Masterclass</li>
          <li>Navigation, Knots & Survival at Sea</li>
          <li>Deep-Sea Shipwreck & Coral Reef Exploration</li>
          <li>Miniature Shipbuilding Workshop</li>
          <li>Mystical Quests & Maritime Legends</li>
          <li>Explorer Club – Sea Adventures</li>
        </ul>
      </section>

      {/* Application */}
      <section id="application" className="section application">
        <h1>Application</h1>
        <p>
          We have a mobile application that helps you find any leisure
          activities in the Uusimaa region. It allows users to easily find
          suitable options and obtain reliable information about service
          providers. The app serves children, youth, adults, families, and
          seniors.
        </p>
        <button>Download the App</button>
      </section>

      {/* Organisations */}
      <section id="organisations" className="section organisations">
        <h1>Organisations</h1>
        <p>
          We work with various service providers who can easily register on our
          website and offer their events. Service providers can add their events
          to our application.
        </p>
      </section>

      {/* Contact Us */}
      <section id="contact" className="section contact">
        <h1>Contact Us</h1>
        <p>Hobbly Technologies Oy</p>
        <p>Rautatieläisenkatu 5, 00520 Helsinki</p>
        <p>Email: hobbly@gmail.com</p>
        <p>Phone: +7403530530</p>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
