import React, { Component } from "react";
import Slider from "react-slick";
import Card from './Card'

export default class Achievements extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      autoplay: true,
      slidesToScroll: 1
    };
    const settingsTwo = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1
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
        <h2 className="text-center font-bold text-large md:text-4xl text-gray-400 uppercase py-10 md:p-10 p-2 font-mono"> Latest Achievements </h2>
        <div className="hidden md:block">
          <Slider {...settings}>
          {fadeImages.map(data => (
            <Card data={data} />
          ))}
          </Slider>
        </div>
        <div className="block md:hidden m-auto text-center">
          <Slider {...settingsTwo}>
          {fadeImages.map(data => (
            <Card data={data} />
          ))}
          </Slider>
        </div>
      </div>
    );
  }
}