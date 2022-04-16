import Link from "next/link";
import React from "react";
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  {
    url: '/images/lineup/alllinup.jpg',
    caption: 'Slide 1'
  },
  {
    url: '/images/lineup/hopeless.jpg',
    caption: 'Slide 2'
  },
  {
    url: '/images/lineup/guildofsevensins.jpg',
    caption: 'Slide 3'
  },
];

const Hero = () => {
  return (
    <div className="slide-container md:w-[80%] block m-auto rounded">
      <h2 className="text-center font-bold text-large md:text-4xl font-mono text-gray-400 uppercase py-3 md:p-10 p-2">Line ups</h2>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container items-center flex justify-center">
              <img className='w-full' src={fadeImage.url} />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Hero