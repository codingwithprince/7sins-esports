import React from 'react'
import Slider from "react-slick";

const Admin = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1
      };
      const fadeImages = [
        {
          url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/272438486_4543972805725159_4484922042169628465_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-5&_nc_sid=e33968&_nc_eui2=AeF0fL8Fyo2TG7Z3mh6Kk3pfi1lx7WXvbr2LWXHtZe9uvQV-uwU6pSbFnn9DtusIraalUXIRL8mbet4CztgvsCCk&_nc_ohc=ho-o34BhhqsAX_aFSEO&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT8lszIjqU2ETnqcQ41oHHmdoK6CPcK71yoWA13B9iwdMw&oe=62611F2A',
          name: 'Abdullah Al Naeem',
          ign: '7SinsHelldude',
          fb: 'https://www.facebook.com/helldude007',
          insta: 'https://www.instagram.com/ig_helldude/'
        },
        {
            url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/273176714_495193625304153_1624591988008233891_n.jpg?stp=dst-jpg_p206x206&_nc_cat=103&ccb=1-5&_nc_sid=da31f3&_nc_eui2=AeEVg5mfdCKYT4hpF58LrycKyGxHV24T-o7IbEdXbhP6jlstO2nvX1SRzDiqIpnCsjBArVZ1BeNdfdBprkrSD0AK&_nc_ohc=YOhOVOjiz3AAX9REipJ&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT90TT-s2GmlPUZJvhSDo32rpxn_ibrcmEUjfb5uVyGRjw&oe=62608062',
            name: 'Ariful Haque Ashik ',
            ign: '7SinsVinSmoke',
            fb: 'https://www.facebook.com/vinsmoke.saita',
          }
      ];
  return (
    <div className='overflow-hidden'>
        <h2 className="text-center font-bold text-large md:text-4xl font-mono text-gray-400 uppercase py-3 md:p-10 p-2">Admin</h2>
        <div className='text-center'>
        <Slider {...settings}>
         {fadeImages.map(data => (
           <div className="admin flex items-center p-5 rounded-lg justify-center" key={data.caption}>
             <div className="header">
                 <img className='block m-auto rounded-full h-[100px] w-[100px] md:h-[300px] md:w-[300px]' src={`${data.url}`} alt="" />
             </div>
             <div className="admin-caption text-center text-white font-bold font-mono">
                 <h3 className='text-lg'>{data.name}</h3>
                 <h4>{`( ${data.ign} )`}</h4>
             </div>
             <div className="admin-links border-2 border-gray-500 w-[300px] m-auto mt-5 uppercase font-bold font-mono flex justify-evenly">
                 <a className='text-cyan-600 hover:text-cyan-400' href={`${data.fb}`}>Facebook</a>
                 <a className='text-red-500 hover:text-red-400' href="#">Instagram</a>
             </div>
          
           </div>
         ))}
        </Slider> 
        </div>
    </div>
  )
}

export default Admin