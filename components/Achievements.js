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
        url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/278097890_473872354523834_3129887509650538452_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGJ92_JdZLGBCqAfnczQ_lOkNLzz9-UwVyQ0vPP35TBXAA949TQTV3wuu5srIMu9BXe-5RLoZy7ibZzfgwmHVlh&_nc_ohc=wVKBtJa-hQAAX_wikb_&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8XukMJbtnRJZ6ZtfRWqI8sZCl90lXmFqo-Jd5VBwEw7Q&oe=6259A81F',
        caption: 'Slide 1'
      },
      {
        url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/200029010_3846857465436700_7435806526592218735_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFfoDLSGTtEwC8CEoYM3N9QGq5PFGP-iNUark8UY_6I1cyPy6lITXPLNXQ2YGdW2pyq6UyD3cMdMAjqd89veI5o&_nc_ohc=w5AOtmHqDe0AX9_PVbR&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT9eTXhzXhw4jx4ZJUu1EwJPZ5pz85hJdIeP7byI5cDVGg&oe=627996F6',
        caption: 'Slide 2'
      },
      {
        url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/278097890_473872354523834_3129887509650538452_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGJ92_JdZLGBCqAfnczQ_lOkNLzz9-UwVyQ0vPP35TBXAA949TQTV3wuu5srIMu9BXe-5RLoZy7ibZzfgwmHVlh&_nc_ohc=wVKBtJa-hQAAX_wikb_&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8XukMJbtnRJZ6ZtfRWqI8sZCl90lXmFqo-Jd5VBwEw7Q&oe=6259A81F',
        caption: 'Slide 3'
      },
      {
        url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/278097890_473872354523834_3129887509650538452_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGJ92_JdZLGBCqAfnczQ_lOkNLzz9-UwVyQ0vPP35TBXAA949TQTV3wuu5srIMu9BXe-5RLoZy7ibZzfgwmHVlh&_nc_ohc=wVKBtJa-hQAAX_wikb_&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8XukMJbtnRJZ6ZtfRWqI8sZCl90lXmFqo-Jd5VBwEw7Q&oe=6259A81F',
        caption: 'Slide 1'
      },
      {
        url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/200029010_3846857465436700_7435806526592218735_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFfoDLSGTtEwC8CEoYM3N9QGq5PFGP-iNUark8UY_6I1cyPy6lITXPLNXQ2YGdW2pyq6UyD3cMdMAjqd89veI5o&_nc_ohc=w5AOtmHqDe0AX9_PVbR&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT9eTXhzXhw4jx4ZJUu1EwJPZ5pz85hJdIeP7byI5cDVGg&oe=627996F6',
        caption: 'Slide 2'
      },
      {
        url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/278097890_473872354523834_3129887509650538452_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGJ92_JdZLGBCqAfnczQ_lOkNLzz9-UwVyQ0vPP35TBXAA949TQTV3wuu5srIMu9BXe-5RLoZy7ibZzfgwmHVlh&_nc_ohc=wVKBtJa-hQAAX_wikb_&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8XukMJbtnRJZ6ZtfRWqI8sZCl90lXmFqo-Jd5VBwEw7Q&oe=6259A81F',
        caption: 'Slide 3'
      },
      {
        url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/278097890_473872354523834_3129887509650538452_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGJ92_JdZLGBCqAfnczQ_lOkNLzz9-UwVyQ0vPP35TBXAA949TQTV3wuu5srIMu9BXe-5RLoZy7ibZzfgwmHVlh&_nc_ohc=wVKBtJa-hQAAX_wikb_&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8XukMJbtnRJZ6ZtfRWqI8sZCl90lXmFqo-Jd5VBwEw7Q&oe=6259A81F',
        caption: 'Slide 1'
      },
      {
        url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/200029010_3846857465436700_7435806526592218735_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFfoDLSGTtEwC8CEoYM3N9QGq5PFGP-iNUark8UY_6I1cyPy6lITXPLNXQ2YGdW2pyq6UyD3cMdMAjqd89veI5o&_nc_ohc=w5AOtmHqDe0AX9_PVbR&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT9eTXhzXhw4jx4ZJUu1EwJPZ5pz85hJdIeP7byI5cDVGg&oe=627996F6',
        caption: 'Slide 2'
      },
      {
        url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/278097890_473872354523834_3129887509650538452_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGJ92_JdZLGBCqAfnczQ_lOkNLzz9-UwVyQ0vPP35TBXAA949TQTV3wuu5srIMu9BXe-5RLoZy7ibZzfgwmHVlh&_nc_ohc=wVKBtJa-hQAAX_wikb_&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8XukMJbtnRJZ6ZtfRWqI8sZCl90lXmFqo-Jd5VBwEw7Q&oe=6259A81F',
        caption: 'Slide 3'
      },
    ];
    return (
      <div className="overflow-hidden">
        <h2 className="text-center font-bold text-large md:text-4xl text-gray-800 uppercase py-3 md:p-10 p-2"> Latest Achievements </h2>
        <Slider {...settings}>
         {fadeImages.map(data => (
           <div className="m-5 bg-white">
             <img className="object-scale-down mx-2" src={`${data.url}`} />
             <p className="pl-5 text-sm md:text-2xl">By {data.caption}</p>
           </div>
         ))}
        </Slider>
      </div>
    );
  }
}