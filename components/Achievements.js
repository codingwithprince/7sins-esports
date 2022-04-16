import React, { Component } from "react";
import Slider from "react-slick";

export default class Achievements extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      autoplay: true,
      slidesToScroll: 3
    };
    const fadeImages = [
      {
        url: '/images/achieve/pmcc.jpeg',
        caption: '7Sins Hopeless'
      },
      {
        url: '/images/achieve/1.jpg',
        caption: '7Sins Hopeless'
      },
      {
        url: '/images/achieve/2.jpg',
        caption: '7Sins Hopeless'
      },
      {
        url: '/images/achieve/3.jpg',
        caption: '7Sins Hopeless'
      },
    ];
    return (
      <div className="overflow-hidden">
        <h2 className="text-center font-bold text-large md:text-4xl text-gray-400 uppercase py-3 md:p-10 p-2 font-mono"> Latest Achievements </h2>
        <Slider {...settings} classNam="">
         {fadeImages.map(data => (
           <div className="m-2 gap-2 flex justify-center items-center" key={data.caption}>
             <div className="m-1 pb-5 md:pb-10 md:m-5 bg-gray-800 rounded">
                <img className="object-scale-down overflow-hidden drop-shadow-lg" src={`${data.url}`} />
                <p className="pl-2 text-[12px] md:text-2xl absolute md:bottom-10 text-white font-mono">By {data.caption}</p>
             </div>
          
           </div>
         ))}
        </Slider>
      </div>
    );
  }
}