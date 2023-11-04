import Image from 'next/image'
import Navbar from './components/navbar'
import CardName from './components/card/cardname'
import About from './components/about'

export default function Home() {
  return (
    <>
      <main>
        <div id='navbar'>
          <Navbar/>
          <CardName/>
        </div>
        <div id='about'>
          <About/>
        </div>
      </main>
    </>
  )
}
