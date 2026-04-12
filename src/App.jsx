import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero Section/Hero'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer/Footer'

  const fetchPlayer = async ()=>{
    const res = await fetch('/data.json')
    return res.json();
  }

function App() {

  const playersPromise = fetchPlayer();

  const [coin, setCoin] = useState(500000)


  return (
    <>
     <Navbar coin={coin}></Navbar>
     <Hero></Hero>
     <Suspense fallback={
      <div className="flex justify-center items-center pt-6">
      <span className="loading loading-bars loading-xl scale-150"></span>
      </div>
     }>
     <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin} ></Players>
     </Suspense>
     <Footer/>
     <ToastContainer/>
    </>
  )
}

export default App
