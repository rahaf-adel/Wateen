import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Certificate() {
  return (
    <div>
        <br></br>
    
        <h1><span>شهادة</span><span>الشكر</span></h1>
        <h4>تقدر تاخذ شهادة شكر على عطائك المستمر وتبرعك بالدم إذا أتممت 5 تبرعات عبر تطبيق وتين</h4>

         <br></br>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src="https://pbs.twimg.com/media/EGIHuYWWkAEdkOS.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src="https://pbs.twimg.com/media/EGJP2kSVUAEVU3U.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src="https://pbs.twimg.com/media/EGIJ0RRWoAM5QPf.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
