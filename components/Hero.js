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
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/178090974_292664815977923_3336798476038384368_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeExvJehtfrC0WnU_y95HpK6Wt_tHZzP2f1a3-0dnM_Z_TO7ylTHSYRFTQBHx78ifZcsChoTYOB37gtP7VCNTegh&_nc_ohc=HqnySZKV6LEAX_0OZiV&tn=ipdPm1rvROFyNEGq&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT_Yul8ijXwDIFtS3x42cAbAMQ6V-vkH8x1_5-XYSTIHfw&oe=625FE2A0',
    caption: 'Slide 3'
  },
];

const Hero = () => {
  return (
    <div className="slide-container md:w-[80%] block m-auto rounded">
      <h2 className="text-center font-bold text-large md:text-4xl font-mono text-gray-400 uppercase py-3 md:p-10 p-2">Lineup</h2>
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