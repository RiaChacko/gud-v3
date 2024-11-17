import React from "react";
import "./Carousel.css"
import { useState, useEffect } from "react";
import image1 from "../assets/landing/Carousel3Temp.png"
import image2 from "../assets/landing/Carousel2.png"
import image3 from "../assets/landing/Carousel3.png"
const slides = [
    {
      src: image1,
      alt: "GUD Team"
    },
    {
      src: image2,
      alt: "GUD Team"
    },
    {
      src: image3,
      alt: "GUD Team"
    }
  ];

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);
    
  return <div className="carousel">{slides.map((item,index)=>{
    return <img src={item.src} alt={item.alt} key={index} className={`slide ${index === currentIndex ? "active" : ""}`}/>
  })}</div>;
};
