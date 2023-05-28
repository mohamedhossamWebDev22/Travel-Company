import React from 'react';

// import components.
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// import photos.
import spain  from "../assets/spain.png";
import dubai  from "../assets/dubai.png";
import giza  from "../assets/pyramid.png";
import dahab from "../assets/dahab.png";
import makah from "../assets/mosque.png";


const Programes = () => {
  return (
    <>
      <Navbar/>

      <div className="partTwo">
        <h1>Our Programes</h1>
        <div className="cards">
          <div className="card">
            <img src={spain} width='350px' height='200px'/>
            <div className="title">Spain</div>
          </div>
          <div className="card">
            <img src={dubai} width='350px' height='200px'/>
            <div className="title">Dubai</div>
          </div>
          <div className="card">
            <img src={giza} width='350px' height='200px'/>
            <div className="title">Giza</div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <img src={dahab} width='350px' height='200px'/>
            <div className="title">Dahab</div>
          </div>
          <div className="card">
            <img src={makah} width='350px' height='200px'/>
            <div className="title">Makah</div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Programes;
