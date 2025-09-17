
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#activities">Activities</a></li>
          <li><a href="#application">Application</a></li>
          <li><a href="#organisations">Organisations</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* About Us */}
      <section id="about" className="section about">
        <h2>About Us</h2>
        <p>
          Hobbly Technologies Oy is a modern technology company, whose mission
          is to make people's everyday lives easier by making hobbies and
          leisure opportunities easy to find and accessible. The company aims
          to enhance people's well-being and sense of community by providing
          digital solutions that connect users with hobbies and service
          providers.
        </p>
      </section>

      {/* Activities */}
      <section id="activities" className="section activities">
        <h2>Activities</h2>
        <ul>
          <li><b>Sea Expedition across the Caribbean</b> – A sea journey across the Helsinki archipelago with adventures and stops at picturesque locations.</li>
          <li><b>Pirate Festival with Music & Dance</b> – A celebration of pirate culture with live music, dancing, street performances.</li>
          <li><b>Pirate Cooking Masterclass</b> – A culinary masterclass on traditional pirate cuisine.</li>
          <li><b>Navigation, Knots & Survival at Sea</b> – Training in navigation, maritime knots, and basic survival skills at sea.</li>
          <li><b>Deep-Sea Shipwreck & Coral Reef Exploration</b> – Exploration of underwater worlds and local shipwreck legends.</li>
          <li><b>Miniature Shipbuilding Workshop</b> – A practical workshop on building miniature ship models.</li>
          <li><b>Mystical Quests & Maritime Legends</b> – Online quests about maritime legends and myths.</li>
          <li><b>Family & Crew Events with Interactive Quests</b> – Games and quests for children and families with the crew.</li>
          <li><b>Explorer Club – Sea Adventures</b> – An explorers’ club with regular sea adventures.</li>
          <li><b>Pirate Duels & Naval Tactics</b> – A tournament in naval fencing and battle tactics.</li>
          <li><b>Masterclass on Attack & Defense Strategies</b> – Training in attack and defense strategies in naval battles.</li>
          <li><b>Knife & Musket Competition</b> – A tournament in knife and musket skills.</li>
        </ul>
      </section>

      {/* Application */}
      <section id="application" className="section application">
        <h2>Application</h2>
        <p>
          We have a mobile application that helps you find any leisure activities in the Uusimaa
          region. The mobile application allows users to easily find suitable options and obtain
          reliable information about service providers. The app serves a wide range of target
          groups, including children, youth, adults, families, and seniors.
        </p>
        <button>Download the APP</button>
      </section>

      {/* Organisations */}
      <section id="organisations" className="section organisations">
        <h2>Organisations</h2>
        <p>
          We work with various service providers who can easily register on our website
          and offer their events. Service providers can add their events to our application.
        </p>
        <button>Create PRO</button>
      </section>

      {/* Contact Us */}
      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="E-mail address" />
          <input type="text" placeholder="Phone number" />
          <textarea placeholder="Your message"></textarea>
          <button type="submit">Send message</button>
        </form>
        <div className="contact-info">
          <p>Rautatieläisenkatu 5, 00520 Helsinki</p>
          <p>+7403530530 | hobbly@gmail.com</p>
        </div>
      </section>
    </div>
  );
}

export default App;