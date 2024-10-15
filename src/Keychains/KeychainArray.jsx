//Custom-Hook to share an array
import { useState } from 'react'

import Chopper from '../assets/KeychainsImg/Chopper.webp'
import Zoro from '../assets/KeychainsImg/zoro.webp'
import Vegeta from '../assets/KeychainsImg/Vegeta.webp'
import Luffy from '../assets/KeychainsImg/Luffy.webp'
import Ussop from '../assets/KeychainsImg/Ussop.webp'

export default function KeychainArray() {
  const [Characters] = useState([
    {
      name: 'Tony Tony Chopper',
      nickname:'"Samurai"',
      price: '$15',
      type: 'Keychain',
      images: [Chopper],
      alt: 'Tony Chopper "Samurai"',
      data: 'One Piece',
      anime: 'One Piece',
      design: '3D View',
      id: 'chopper-popular',
    },
    {
      name: 'Roronoa Zoro',
      nickname: 'The Pirate Hunter',
      price: '$15',
      type: 'Keychain',
      images: [Zoro],
      anime: 'One Piece',
      alt: 'Roronoa Zoro',
      data: 'One Piece',
      design: '3D View',
      id: 'zoro-popular',
    },
    {
      name: 'Vegeta',
      price: '$15',
      type: 'Keychain',
      images: [Vegeta],
      alt: 'Vegeta',
      anime: 'Dragon Ball Z',
      data: 'Dragon Ball Z',
      design: '3D Model',
      id: 'vegeta-popular',
    },
    {
      name: 'Monkey D. Luffy',
      price: '$15',
      type: 'Keychain',
      images: [Luffy],
      alt: 'Monkey D. Luffy',
      anime: 'One Piece',
      design: '3D View',
      id: 'luffy-popular',
    },
    {
      name: 'Ussop',
      price: '$15',
      type: 'Keychain',
      images: [Ussop],
      alt: 'Ussop',
      anime: 'One Piece',
      design: '3D View',
      id: 'ussop-popular',
    },
  ])

  return Characters
}
