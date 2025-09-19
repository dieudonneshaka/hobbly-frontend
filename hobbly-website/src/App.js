import React from "react";
import "./App.css";

const activities = [
  "Sea Expedition across the Caribbean",
  "Pirate Festival with Music & Dance",
  "Pirate Cooking Masterclass",
  "Navigation, Knots & Survival at Sea",
  "Deep-Sea Shipwreck Exploration",
  "Miniature Shipbuilding Workshop",
  "Mystical Quests & Maritime Legends",
  "Family & Crew Adventure Quests",
  "Explorer Club – Sea Adventures",
  "Pirate Duels & Naval Tactics",
  "Masterclass on Attack & Defense",
  "Knife & Musket Competition",
];

export default function App() {
  // helper placeholder (you can replace each url with /images/...)
  const placeholder = (i, w = 360, h = 200) =>
    `https://via.placeholder.com/${w}x${h}.png?text=Activity+${i + 1}`;

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            {/* small svg-ish icon + text like your PNG */}
            <span className="logo-icon" aria-hidden>🞄</span>
            <span className="logo-text">Hobbly</span>
          </div>
        </div>

        <ul className="nav-center">
          <li><a href="#about">About us</a></li>
          <li><a href="#activities">Activities</a></li>
          <li><a href="#application">Application</a></li>
          <li><a href="#organisations">Organisations</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>

        <div className="nav-right">
          <a href="#" aria-label="website">🌐</a>
          <a href="#" aria-label="facebook">f</a>
          <a href="#" aria-label="linkedin">in</a>
        </div>
      </nav>

      {/* ABOUT */}
      <section id="about" className="section about">
        <h2 className="section-title">ABOUT US</h2>

        <div className="about-hero">
          <img
            className="about-logo"
            src="https://via.placeholder.com/90x90.png?text=Logo"
            alt="Hobbly logo"
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/90")}
          />
          <h3 className="about-heading">HOBBLY TECHNOLOGIES OY</h3>
          <p className="about-text">
            is a modern technology company, whose mission is to make people's everyday lives easier by making hobbies and leisure opportunities easy to find and accessible. The company aims to enhance people's well-being and sense of community by providing digital solutions that connect users with hobbies and service providers.
          </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="section activities">
        <h2 className="section-title">ACTIVITIES</h2>

        <div className="cards-wrap">
          {activities.map((title, i) => (
            <article className="card" key={i}>
              <img
                src={placeholder(i)}
                alt={title}
                onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/320x180")}
              />
              <h4 className="card-title">{title}</h4>
              <p className="card-sub">Short description about the event.</p>
            </article>
          ))}
        </div>
      </section>

      {/* APPLICATION */}
      <section id="application" className="section application">
        <h2 className="section-title">APPLICATION</h2>

        <div className="two-col">
          <div className="col image-col">
            <img
              src="https://via.placeholder.com/260x520.png?text=Phone+Mockup"
              alt="app phone"
              className="phone-mockup"
              onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/260x520")}
            />
          </div>

          <div className="col text-col">
            <p className="lead">
              We have a mobile application that helps you find any leisure activities in the Uusimaa region. The mobile application allows users to easily find suitable options and obtain reliable information about service providers. The app serves a wide range of target groups, including children, youth, adults, families, and seniors.
            </p>

            <div className="download-wrap">
              <button className="btn">Download the APP</button>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANISATIONS */}
      <section id="organisations" className="section organisations">
        <h2 className="section-title">ORGANISATIONS</h2>

        <div className="two-col reverse">
          <div className="col image-col">
            <img
              src="https://via.placeholder.com/520x320.png?text=Laptop+Mockup"
              alt="laptop"
              className="laptop-mockup"
              onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/520x320")}
            />
          </div>

          <div className="col text-col">
            <p className="lead">
              We work with various service providers who can easily register on our website and offer their events. Service providers can add their events to our application.
            </p>

            <div className="download-wrap">
              <button className="btn">Create PRO</button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2 className="section-title">CONTACT US</h2>

        <form className="contact-grid" onSubmit={(e) => e.preventDefault()}>
          <div className="left-col">
            <input placeholder="Full name" />
            <input placeholder="E-mail address" />
            <input placeholder="Phone number" />
          </div>

          <div className="right-col">
            <textarea placeholder="Your message" />
            <div className="send-area">
              <button className="btn">Send message</button>
            </div>
          </div>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-left">
          <div>🏠 Rautatieläisenkatu 5, 00520 Helsinki</div>
          <div>📞 +7405330530 &nbsp; | &nbsp; ✉️ hobbly@gmail.com</div>
        </div>

        <div className="footer-right">
          <a href="#" aria-label="website">🌐</a>
          <a href="#" aria-label="facebook">f</a>
          <a href="#" aria-label="linkedin">in</a>
        </div>
      </footer>
    </div>
  );
}
