import { useState } from 'react'

import FBardock from '../assets/SmallFiguresImg/FBardock.png'
import BBardock from '../assets/SmallFiguresImg/BBardock.webp'
import FAkainu from '../assets/SmallFiguresImg/FAkainu.png'
import BAkainu from '../assets/SmallFiguresImg/BAkainu.webp'
import FBrook from '../assets/SmallFiguresImg/FBrook.png'
import BBrook from '../assets/SmallFiguresImg/BBrook.webp'
import FGoku from '../assets/SmallFiguresImg/FGoku.png'
import BGoku from '../assets/SmallFiguresImg/BGoku.webp'
import Marine from '../assets/SmallFiguresImg/Marine.png'
import Goku from '../assets/SmallFiguresImg/Goku.png'
import StrawHat from '../assets/SmallFiguresImg/StrawHat.png'
import Esfera from '../assets/SmallFiguresImg/Esfera.png'

export default function SmallFiguresArray() {
  const [sharedArray] = useState([
    {
      summary:'Admiral Akainu One Piece x PEPSI NEX Figure Collection',
      bio:'Marine',
      name: 'Sakazuki "Akainu"',
      data: 'One Piece x PEPSI NEX Figure Collection by Suntory',
      size: '5cm',
      price: '$15.00',
      images: [FAkainu, BAkainu],
      logo: Marine,
      alt: 'Sakazuki "Akainu"',
      id: 'Akainu',
      anime: 'One Piece',
      type: 'Figure',
    },
    {
      summary:'Son Goku Dragon Ball Super Collection World Figure Vol. 1',
      bio:'Famous',
      name: 'Son Goku',
      anime: 'Dragon Ball',
      data: 'Dragon Ball Super Collection World Figure Vol. 1 by Banpresto',
      size: '8cm',
      price: '$20.00',
      images: [FGoku, BGoku],
      logo: Goku,
      alt: 'Son Goku',
      id: 'SonGoku',
      type: 'Figure',
    },
    {
      summary:'Brook One Piece x PEPSI NEX Figure Collection',
      bio:'80M Berries Bounty',
      name: 'Brook "Soul King"',
      anime: 'One Piece',
      data: 'One Piece x PEPSI NEX Figure Collection by Suntory',
      size: '5cm',
      price: '$15.00',
      images: [FBrook, BBrook],
      logo:StrawHat,
      alt: 'Brook "Soul King"',
      id: 'Brook',
      type: 'Figure',
    },
    {
      summary:'Bardock Dragon Ball Z Bandai Ichiban by Banpresto',
      bio:'Kind',
      name: 'Bardock',
      anime: 'Dragon Ball Z',
      data: 'Dragon Ball Z Bandai Ichiban Kuji Mission 5 Super Saiyan 3 by Banpresto',
      size: '8cm',
      price: '$15.00',
      images: [FBardock, BBardock],
      logo: Esfera,
      alt: 'Bardock',
      id: 'Bardock',
      type: 'Figure',
    },
  ])
  return sharedArray
}
