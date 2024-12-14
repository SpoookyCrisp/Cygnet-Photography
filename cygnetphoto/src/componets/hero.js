import React from "react";
import myImage from './swan.jpg';

const Hero = () => {
    return (
<div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${myImage})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Welcome to Cygnet Photo</h1>
    </div>
  </div>
</div>
    )
}

export default Hero