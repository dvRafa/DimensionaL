import LuffyBack from '../assets/CollectiblesImg/LuffyBack.webp'
import LuffyMovie from '../assets/CollectiblesImg/LuffyMovie.webp'
import Luffy from '../assets/CollectiblesImg/Luffy.webp'
import LuffyFront from '../assets/CollectiblesImg/LuffyFront.webp'
import Sanemi from '../assets/CollectiblesImg/Sanemi.webp'
import SanemiBack from '../assets/CollectiblesImg/SanemiBack.webp'
import NezukoBack from '../assets/CollectiblesImg/NezukoBack.webp'
import Nezuko from '../assets/CollectiblesImg/Nezuko.webp'
import Levi0 from '../assets/CollectiblesImg/MrLevi.webp'
import Levi1 from '../assets/CollectiblesImg/Levi1.webp'
import Luffy0 from '../assets/CollectiblesImg/Luffy0.webp'
import Luffy1 from '../assets/CollectiblesImg/Luffy1.webp'
import SanemiFront from '../assets/CollectiblesImg/MrSanemi.webp'
import NezukoFront from '../assets/CollectiblesImg/NezukoFront.webp'
import { useState } from 'react'

export default function CollectiblesArray() {
  const [sharedArray] = useState([
    {
      name: 'Monkey D. Luffy',
      anime: 'One Piece',
      title: 'One Piece Film Red DFX The Grandline Men Vol. 1 by Banpresto',
      price: '$90',
      type: 'Collectible',
      size: '16cm',
      images: [LuffyMovie, Luffy, LuffyFront, LuffyBack],
      alt: 'Monkey D. Luffy',
      id: 'Monkey D. Luffy One Piece Film Red DFX The Grandline Men Vol. 1 by Banpresto',
    },
    {
      name: 'Levi Ackerman',
      anime: 'Shingeki No Kyojin',
      title: 'Shingeki No Kyojin Final Season by Banpresto',
      price: '$80',
      type: 'Collectible',
      size: '18cm',
      images: [Levi0, Levi1],
      alt: 'Levi Ackerman',
      id: 'Levi Ackerman',
    },
    {
      name: 'Sanemi Shinazugawa',
      anime: 'Kimetsu No Yaiba',
      type: 'Collectible',
      title: 'Kimetsu No Yaiba Vol. 14 by Banpresto',
      price: '$35',
      size: '18cm',
      images: [SanemiFront, Sanemi, SanemiBack],
      alt: 'Sanemi Shinazugawa',
      id: 'Sanemi Shinazugawa',
    },
    {
      name: 'Monkey D. Luffy',
      title: 'One Piece Bandai Ichiban Kuji by Banpresto',
      anime: 'One Piece',
      type: 'Collectible',
      price: '$80',
      images: [Luffy0, Luffy1],
      size: '16cm',
      alt: 'Monkey D. Luffy',
      id: 'Monkey D. Luffy Bandai',
    },
    {
      name: 'Nezuko Kamado',
      title: 'Kimetsu No Yaiba World Collectible Figure by Banpresto',
      anime: 'Kimetsu No Yaiba',
      type: 'Collectible',
      price: '$35',
      size: '8cm',
      images: [NezukoFront, Nezuko, NezukoBack],
      alt: 'Nezuko Kamado',
      id: 'NezukoKamado',
    },
  ])
  return sharedArray
}
