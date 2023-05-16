import React from 'react';
import Header from './../../components/header/Header.js';
import Footer from './../../components/footer/Footer.js';
import './Hangar.css';

const images = [
  'https://aeronauticapy.com/wp-content/uploads/2016/10/emirates_airbus_a380-861_a6-eer_muc_2015_04.jpg',
  'https://images.ecestaticos.com/96m57IXP7qWIeHFeajF9V-XXhE0=/0x0:920x465/1200x675/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ff33%2F8f1%2F747%2Ff338f17478961cad791c7b6866f0cf0c.jpg',
  'https://static.hosteltur.com/app/public/uploads/img/articles/2022/05/06/L_042737_boeing777xlarge-3h.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/EC-402_-_A400M_-_Airbus_industrie_-_TLS_-_En_finale_sur_32L_-_04550-2.jpg/2560px-EC-402_-_A400M_-_Airbus_industrie_-_TLS_-_En_finale_sur_32L_-_04550-2.jpg',
  'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/09/sr-711-scaled.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1',
  'https://i.ytimg.com/vi/LSWSfDJEaU4/maxresdefault.jpg'
];

const Hangar = () => {
  return (
    <div>
      <Header />
      <h1 className="title">SimpleFly</h1>
      <div className="image-slider">
        {images.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Hangar;