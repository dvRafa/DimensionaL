//Custom-Hook to share an array
import { useState } from 'react'

import Chopper from '../assets/KeychainsImg/MrChopper.webp'
import Zoro from '../assets/KeychainsImg/zoro.webp'
import Vegeta from '../assets/KeychainsImg/Vegeta.webp'
import Luffy from '../assets/KeychainsImg/Luffy.webp'
import Ussop from '../assets/KeychainsImg/Ussop.webp'

export default function KeychainArray() {
  const [Characters] = useState([
    {
      bio:'Straw Hat Pirates',
      name: 'Tony Tony Chopper',
      nickname:'One Piece Tony Tony Chopper "Samurai"',
      price: '$15.00',
      type: 'Keychain',
      images: [Chopper],
      alt: 'Tony Chopper "Samurai"',
      data: 'One Piece',
      anime: 'One Piece',
      design: '3D View',
      id: 'chopper-popular',
    },
    {
      bio:'Straw Hat Pirates',
      name: 'Roronoa Zoro',
      nickname: 'One Piece Roronoa Zoro The Pirate Hunter',
      price: '$15.00',
      type: 'Keychain',
      images: [Zoro],
      anime: 'One Piece',
      alt: 'Roronoa Zoro',
      data: 'One Piece',
      design: '3D View',
      id: 'zoro-popular',
    },
    {
      bio:'Prince',
      nickname:'Dragon Ball Z Vegeta The Prince Keychain',
      name: 'Vegeta',
      price: '$15.00',
      type: 'Keychain',
      images: [Vegeta],
      alt: 'Vegeta',
      anime: 'Dragon Ball Z',
      data: 'Dragon Ball Z',
      design: '3D Model',
      id: 'vegeta-popular',
    },
    {
      bio:'Straw Hat Pirates Captain',
      nickname:'One Piece Monkey D Luffy Future King of the Pirates',
      name: 'Monkey D. Luffy',
      price: '$15.00',
      type: 'Keychain',
      images: [Luffy],
      alt: 'Monkey D. Luffy',
      data: 'One Piece',
      anime: 'One Piece',
      design: '3D View',
      id: 'luffy-popular',
    },
    {
      bio:'Straw Hat Pirates',
      nickname:'One Piece Ussop White Beard',
      name: 'Ussop',
      price: '$15.00',
      type: 'Keychain',
      images: [Ussop],
      alt: 'Ussop',
      data: 'One Piece',
      anime: 'One Piece',
      design: '3D View',
      id: 'ussop-popular',
    },
  ])

  return Characters
}
