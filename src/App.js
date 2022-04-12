import React from 'react'
import Cards from './page/Cards'
import Heading from './page/Heading'
import first from '../src/assets/image/first.jpg'
import second from '../src/assets/image/second.jpg'
import third from '../src/assets/image/third.jpg'
import forth from '../src/assets/image/forth.jpg'





export default function App() {
  return (
    <>
    <Heading />
    <div className='cards' style={{ display: 'flex', gap: 10}}>
    <Cards image={first} title1='Emma Olivia' text='emmaolivia@gmail.com' />
    <Cards image={second} title1='Sofia Adward' text='sofiaadward@gmail.com' />
    <Cards image={third} title1='Touseeq Ijaj' text='touseeqijaj@gmail.com' />
    <Cards image={forth} title1='Amelia Alex' text='ameliaalex@gmail.com' />
    
    </div>

    </>
  )
}
