import React from 'react';

// import components.
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Blank from "../components/blank";

// import photos.
import spain  from "../assets/spain.png";
import dubai  from "../assets/dubai.png";
import giza  from "../assets/pyramid.png";
import location  from "../assets/location.png";
import avatar1 from '../assets/avater.png';
import avatar2 from '../assets/avater2.png';

const App = () => {
  return (
    <>
      <Navbar/>

      <div className="content">
        <div className="first">
          <h1>Welcome to <span>Travilia</span></h1>
          <p>The Best Travel Company You will See Ever !</p>
        </div>
        
        <Blank/>

        <div className="part pageTwo second">
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

        <Blank/>

        <div className="part third">
          <h1>Our Locations</h1>
          <img src={location} width='300px' height='400px'/>
        </div>

        <Blank/>

        <div className="part four">
          <h1>Opinions</h1>

          <div className="ops">
            <div className="op">
              <p>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. <br/>Ex eius reprehenderit perspiciatis labore? 
              </p>

              <div className="who">
                <img src={avatar1}/>
                <h3>Sameh</h3>
              </div>
            </div>
            <div className="op">
              <p>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. <br/>Ex eius reprehenderit perspiciatis labore? 
              </p>

              <div className="who">
                <img src={avatar2}/>
                <h3>Mahmoud</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
