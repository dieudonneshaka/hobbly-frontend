import React from "react";
import "./App.css";

import "./App.css";

// Card component for Activities / Requests
const Card = ({ title, description, address, date, price, status, user, organisation, email }) => (
  <div className="card">
    {title && <h3>{title}</h3>}
    {description && <p>{description}</p>}
    {address && <p>Address: {address}</p>}
    {date && <p>Date: {date}</p>}
    {price && <p>Price: {price}</p>}
    {status && <p>Status: {status}</p>}
    {user && <p>User: {user}</p>}
    {organisation && <p>Organisation: {organisation}</p>}
    {email && <p>Email: {email}</p>}
  </div>
);

function App() {
  const activities = [
    {
      title: "Sea Expedition across the Caribbean",
      description: "A sea journey across the Helsinki archipelago with adventures.",
      address: "Viikintie 2",
      date: "8/7/2026",
      price: "10€/h",
    },
    {
      title: "Pirate Festival with Music & Dance",
      description: "A celebration of pirate culture with live music and dance.",
      address: "Viikintie 2",
      date: "8/7/2026",
      price: "Free",
    },
  ];

  const requests = [
    {
      user: "Rick J",
      organisation: "Nokia",
      address: "Viikintie 2",
      email: "RickJ@gmail.com",
      date: "8/7/2026",
      status: "Approved",
    },
    {
      user: "Martin G",
      organisation: "Anora",
      address: "Hämeentie 2",
      email: "Martin@gmail.com",
      date: "8/7/2026",
      status: "Pending",
    },
  ];

  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#application">Application</a></li>
            <li><a href="#organisations">Organisations</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section">
        <h1>About Us</h1>
        <p>Hobbly Technologies Oy is a modern technology company whose mission is to make people’s everyday lives easier by making hobbies and leisure opportunities accessible...</p>
      </section>

      <section id="activities" className="section">
        <h1>Activities</h1>
        {activities.map((act, i) => <Card key={i} {...act} />)}
      </section>

      <section id="application" className="section">
        <h1>Application</h1>
        <p>Our mobile application helps users find any leisure activities in the Uusimaa region...</p>
      </section>

      <section id="organisations" className="section">
        <h1>Organisations</h1>
        {requests.map((req, i) => <Card key={i} {...req} />)}
      </section>

      <section id="dashboard" className="section">
        <h1>Dashboard</h1>
        <p>Jack Sparrow | Organiser | Category | Add Activity | Add Photo</p>
      </section>

      <section id="contact" className="section">
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="Full Name" /><br />
          <input type="email" placeholder="Email" /><br />
          <textarea placeholder="Your Message"></textarea><br />
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>2023 © Hobbly Technologies Oy</p>
      </footer>
    </div>
  );
}



export default App;
