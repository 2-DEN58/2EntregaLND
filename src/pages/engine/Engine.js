import React from 'react';
import Header from './../../components/header/Header.js';
import Footer from './../../components/footer/Footer.js';
import './Engine.css';

const engines = [
  {
    name: 'Turboprop',
    description: 'A turboprop engine is a type of gas turbine engine that uses a propeller to provide thrust.',
    images: ['https://example.com/turboprop1.jpg', 'https://example.com/turboprop2.jpg']
  },
  {
    name: 'Turbojet',
    description: 'A turbojet engine is a type of gas turbine engine that produces thrust by expelling hot exhaust gases out the back of the engine.',
    images: ['https://example.com/turbojet1.jpg', 'https://example.com/turbojet2.jpg']
  },
  {
    name: 'Turbofan',
    description: 'A turbofan engine is a type of gas turbine engine that uses a large fan to provide additional thrust and improve fuel efficiency.',
    images: ['https://example.com/turbofan1.jpg', 'https://example.com/turbofan2.jpg']
  },
  {
    name: 'Scramjet',
    description: 'A scramjet engine is a type of airbreathing jet engine that uses supersonic combustion to produce thrust.',
    images: ['https://example.com/scramjet1.jpg', 'https://example.com/scramjet2.jpg']
  },
  {
    name: 'Ramjet',
    description: 'A ramjet engine is a type of airbreathing jet engine that uses the forward motion of the aircraft to compress incoming air and produce thrust.',
    images: ['https://example.com/ramjet1.jpg', 'https://example.com/ramjet2.jpg']
  }
];

const Engine = () => {
  return (
    <div>
      <Header />
      <h1>Engines</h1>
      <div className="list-engine">
        {engines.map(engine => (
          <div key={engine.name}>
            <h2>{engine.name}</h2>
            <img src={engine.images[0]} alt="" />
            <img src={engine.images[1]} alt="" />
            <p>{engine.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Engine;