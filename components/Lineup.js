import Link from "next/link";
import React from "react";
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/201795370_283298996914505_1293689081312464031_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeETg2ZioGYBZsrJleS-Dgt5MPyLC0k3xN4w_IsLSTfE3t0AD1T9yEsC5iGJVawvyCOYRD0TK5OZCHQVLoyefcGh&_nc_ohc=yITjOXdSBocAX_HppA8&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT_Ss1gEskJNlLDZlnMqsJcZxGlbPAmb7X4TdK0NuFgvKA&oe=627FC283',
    caption: 'Slide 1'
  },
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/278097890_473872354523834_3129887509650538452_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGJ92_JdZLGBCqAfnczQ_lOkNLzz9-UwVyQ0vPP35TBXAA949TQTV3wuu5srIMu9BXe-5RLoZy7ibZzfgwmHVlh&_nc_ohc=862mWzYSTiIAX9CJSXU&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT87Air39pNt-37weuBuBkEv0F0EfVTtfEm_LseXay22zw&oe=6261911F',
    caption: 'Slide 2'
  },
];

const Lineup = () => {
  return (
    <div className="slide-container md:w-[80%] block m-auto rounded">
      <h2 className="text-center font-bold text-large md:text-4xl font-mono text-gray-400 uppercase py-10 md:p-10 p-2">Lineup</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
          <div className="lineup-img">
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
          <div className="lineup-info flex flex-col items-center text-mono text-gray-400">
            <h4 className="text-sm text-center tracking-wider">Teams</h4>
            <ul className="p-5 list-none font-thin uppercase cursor-pointer  font-mono md:grid-cols-1 grid-cols-2 md:text-2xl grid gap-6">
              <li className="flex items-center hover:text-blue-500 gap-3">
                <img className="rounded-full h-[50px] w-[50px]" src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/123552610_115691940341879_5913008511587889061_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH_rkMHoCWe1BvNomvIibCaNhvzILYdXmc2G_Mgth1eZztuCbKGeFbAEuQwoInU8Gwwb2T_2EQw0UtgaCtCllAA&_nc_ohc=3H5POJiuxGsAX_fmcDM&tn=ipdPm1rvROFyNEGq&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT_Vd6YaV-5SFn_gzA69wowvJH1LAmC9XilpUgIuTGgdEA&oe=6280FDCF" alt="" />
                <p>Guild of 7Sins</p>
              </li>
              <li className="flex items-center hover:text-blue-500 gap-3">
                <img className="rounded-full  h-[50px] w-[50px] " src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/269570886_403997121511358_2143729796240922504_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFrm5pi0wDFMXE5vMJddIo6-WW-_wu6sMr5Zb7_C7qwygqqcwvARSSgZLJYzgAX0bVYNCT2Z9HQUzYYpVYSI6oV&_nc_ohc=Kb_BzExqyscAX92ZxyT&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT-iYrQnl2asZ8HmBTg8LpxkICH8dLVWPqcRpxPcNNDheg&oe=6261777C" alt="" />
                <p>7Sins Hopeless</p>
              </li>
              <li className="flex items-center hover:text-blue-500 gap-3">
                <img className="rounded-full h-[50px] w-[50px] " src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/277103183_470066814904388_7841619217095966411_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFO7SYcUCyrgx06PmHEdfdEty3GfUoFRSK3LcZ9SgVFIsbPKlJdFIBd4FvD0_hTsJVn8m9OTcFc9JWLjcfrL9z2&_nc_ohc=w7ZKFcoIZm4AX9hm5fo&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT812G6jwMGd_z3iIz9YthoW4cKEeU4miMJ5PGR1hniqxg&oe=6260A738" alt="" />
                <p>7Sins Platoon</p>
              </li>
              <li className="flex items-center hover:text-blue-500 gap-3">
                <img className="rounded-full h-[50px] w-[50px] " src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/241572060_336486354929102_9156306534247091611_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFaQpf76FSxyFqbXFm7IKgoOsYY05USAqI6xhjTlRICotzrYy9hf6FHp3tLGCcOzjJr9ccZAQz6rG9a0QWGyLSA&_nc_ohc=k_yTpOuTXuMAX-wW1NQ&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8jrxX_Je98TxPCZrUYNXyzq1Gzltz_2yIgAK4NdVbpsQ&oe=62604360" alt="" />
                <p>7Sins Esports</p>
              </li>
            </ul>
          </div>
      </div>
     
    </div>
  )
}

export default Lineup