import React from 'react';

// import components 
import Navbar from '../components/navbar'; 

const App = () => {
  return (
    <>
      <Navbar/>

      <div className="content">
        <div className="first">
          <h1>Welcome to <span>Travilia</span></h1>
          <p>The Best Travel Company You will See Ever !</p>
        </div>
      </div>
    </>
  );
}

export default App;
