import React from 'react'

import './App.css'
import NavBar from './components/navbar'
import Navbarcomponent from './components/navbarcompone'
import { Entete, Improve } from './components/making'
import Entetecomponent from './components/entetecomponen'
import Carts from './components/forBloc'
import Cartscomponent from './components/cartscomponen'
import Logos from './components/Leslogos'
import Logoscomponet from './components/Logoscompone'
import BigBlue from './components/bluepannel'
import Bigbluecomponet from './components/Bigbluecompone'
import Improvecomponent from './components/Improvecomponen'
import Photos from './components/lesphotos'
import Photoscomponet from './components/Photoscompone'
import Footer from './components/footer'
import Footercomponet from './components/Footercompone'
function App() {
  return (
    <div>
      <Navbarcomponent data={NavBar} />
      <Entetecomponent data={Entete} />
      <Cartscomponent data={Carts} />
      <Logoscomponet data={Logos} />
      <Bigbluecomponet data={BigBlue} />
      <Improvecomponent data={Improve} />
      <Photoscomponet data={Photos} />
      <Footercomponet data={Footer} />
    </div>

  )
}

export default App

