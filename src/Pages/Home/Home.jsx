import React from 'react'
import Herosection from '../../Component/HeroSection/Herosection'
import Category from '../../Component/Category/Category'
import Btech from '../../Component/Btech/Btech'
import Mbbs from '../../Component/MBBS/Mbbs'
import Law from '../../Component/Law/Law'
import Gallery from '../../Component/Gallery/Gallery'

function Home() {
  return (
    <div >
    <Herosection/>
    <Category/>
    <Btech/>
    <Mbbs/>
    <Law/>
    <Gallery/>
    </div>
  )
}

export default Home