import Link from "next/link";
import React from "react";
import { Fade } from 'react-slideshow-image';
import Card from "./Card";

const teamInfo = [
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/123552610_115691940341879_5913008511587889061_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH_rkMHoCWe1BvNomvIibCaNhvzILYdXmc2G_Mgth1eZztuCbKGeFbAEuQwoInU8Gwwb2T_2EQw0UtgaCtCllAA&_nc_ohc=3H5POJiuxGsAX_fmcDM&tn=ipdPm1rvROFyNEGq&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT_Vd6YaV-5SFn_gzA69wowvJH1LAmC9XilpUgIuTGgdEA&oe=6280FDCF',
    teamName: '7Sins Esports',
    players: [
       {
        name: 'Prince Ahmed',
        ign: '7SinsHELLDUDE',
        fb: 'https://www.google.com'
      },
      {
        name: 'Amit Mirdha',
        ign: '7SinsVINSMOKE',
        fb: 'https://www.google.com'
      }
    ]
  },
  {
    url: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/123552610_115691940341879_5913008511587889061_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH_rkMHoCWe1BvNomvIibCaNhvzILYdXmc2G_Mgth1eZztuCbKGeFbAEuQwoInU8Gwwb2T_2EQw0UtgaCtCllAA&_nc_ohc=3H5POJiuxGsAX_fmcDM&tn=ipdPm1rvROFyNEGq&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT_Vd6YaV-5SFn_gzA69wowvJH1LAmC9XilpUgIuTGgdEA&oe=6280FDCF',
    teamName: '7Sins Hopeless',
    players: [
      {
       name: 'Prince Ahmed',
       ign: '7SinsOBiTOBOY',
       fb: 'https://www.google.com'
     },
     {
       name: 'Amit Mirdha',
       ign: '7SinsJHAPSHA',
       fb: 'https://www.google.com'
     },
     {
      name: 'Prince Ahmed',
      ign: '7SinsMADARA',
      fb: 'https://www.google.com'
    },
    {
      name: 'Amit Mirdha',
      ign: '7SinsSHAHID',
      fb: 'https://www.google.com'
    },
    {
      name: 'Prince Ahmed',
      ign: '7SinsKARMA',
      fb: 'https://www.google.com'
    },
    {
      name: 'Amit Mirdha',
      ign: '7SinsMAiMUN',
      fb: 'https://www.google.com'
    }
   ]
  },
];

const Lineup = () => {
  return (
    <div className="lineup">
      <h2 className="text-center font-bold text-large md:text-4xl font-mono text-gray-400 uppercase py-10 md:p-10 p-2">Lineup</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:w-[80%] mx-auto justify-items-center">
        {teamInfo.map(data => <Card key={data.teamName} data={data} players={data.players} />)}
    </div>
  </div>
  
  

)}

export default Lineup