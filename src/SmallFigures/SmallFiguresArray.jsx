import { useState } from 'react'

import FBardock from '../assets/SmallFiguresImg/FBardock.webp'
import BBardock from '../assets/SmallFiguresImg/BBardock.webp'
import FAkainu from '../assets/SmallFiguresImg/FAkainu.webp'
import BAkainu from '../assets/SmallFiguresImg/BAkainu.webp'
import FBrook from '../assets/SmallFiguresImg/FBrook.webp'
import BBrook from '../assets/SmallFiguresImg/BBrook.webp'
import FGoku from '../assets/SmallFiguresImg/FGoku.webp'
import BGoku from '../assets/SmallFiguresImg/BGoku.webp'

export default function SmallFiguresArray() {
  const [sharedArray] = useState([
    {
      name: 'Bardock',
      anime: 'Dragon Ball Z',
      data: 'Dragon Ball Z Bandai Ichiban Kuji Mission 5 Super Saiyan 3 by Banpresto',
      size: '8cm',
      price: '$15',
      images: [FBardock, BBardock],
      alt: 'Bardock',
      id: 'Bardock',
      type: 'Figure',
    },
    {
      name: 'Son Goku',
      anime: 'Dragon Ball',
      data: 'Dragon Ball Super Collection World Figure Vol. 1 by Banpresto',
      size: '8cm',
      price: '$20',
      images: [FGoku, BGoku],
      alt: 'Son Goku',
      id: 'SonGoku',
      type: 'Figure',
    },
    {
      name: 'Brook "Soul King"',
      anime: 'One Piece',
      data: 'One Piece x PEPSI NEX Figure Collection by Suntory',
      size: '5cm',
      price: '$15',
      images: [FBrook, BBrook],
      alt: 'Brook "Soul King"',
      id: 'Brook',
      type: 'Figure',
    },
    {
      name: 'Sakazuki "Akainu"',
      data: 'One Piece x PEPSI NEX Figure Collection by Suntory',
      size: '5cm',
      price: '$15',
      images: [FAkainu, BAkainu],
      alt: 'Sakazuki "Akainu"',
      id: 'Akainu',
      anime: 'One Piece',
      type: 'Figure',
    },
  ])
  return sharedArray
}
