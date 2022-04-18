import Link from "next/link";
import React from 'react'
import { Fade } from 'react-slideshow-image';


const fadeImages = [
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/278690758_479748080602928_2305482387258628505_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFkOxXSRGdy6k1Lv24PsvXAkz3ec0Q3woGTPd5zRDfCgYh6szzc1NpBKE9YLwViBd-QIYDk6xtPk4dW6THg7D02&_nc_ohc=ZuVMRRJvbWEAX8RD2xm&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8Lk9e5HnZCuv-G0E9HQJiNbf7YqmlXY0bfv542109VkA&oe=6260E33B',
    caption: 'Slide 1'
  },
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/278690758_479748080602928_2305482387258628505_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFkOxXSRGdy6k1Lv24PsvXAkz3ec0Q3woGTPd5zRDfCgYh6szzc1NpBKE9YLwViBd-QIYDk6xtPk4dW6THg7D02&_nc_ohc=ZuVMRRJvbWEAX8RD2xm&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8Lk9e5HnZCuv-G0E9HQJiNbf7YqmlXY0bfv542109VkA&oe=6260E33B',
    caption: 'Slide 2'
  }
];

const Jersey = () => {

  return (
    <div className="slide-container md:w-[80%] block m-auto rounded">
      <h2 className="text-center font-bold text-large md:text-4xl font-mono text-gray-400 uppercase py-10 md:p-10 p-2">Jersey</h2>
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

export default Jersey