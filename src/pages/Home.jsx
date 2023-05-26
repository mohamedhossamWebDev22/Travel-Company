import React from 'react';

// import components.
import Navbar from '../components/navbar'; 

// import photos.
import spain  from "../assets/spain.png";
import dubai  from "../assets/dubai.png";
import giza  from "../assets/pyramid.png";

const App = () => {
  return (
    <>
      <Navbar/>

      <div className="content">
        <div className="first">
          <h1>Welcome to <span>Travilia</span></h1>
          <p>The Best Travel Company You will See Ever !</p>
        </div>

        <br />
        <hr />

        <div className="second">
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
        </div>
      </div>
    </>
  );
}

export default App;
