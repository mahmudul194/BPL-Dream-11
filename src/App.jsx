import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero Section/Hero'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'

  const fetchPlayer = async ()=>{
    const res = await fetch('/data.json')
    return res.json;
  }

function App() {

  const playersPromise = fetchPlayer();

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <Suspense fallback={
      <div className="flex justify-center items-center pt-6">
      <span className="loading loading-bars loading-xl scale-150"></span>
      </div>
     }>
     <Players playersPromise={playersPromise} ></Players>
     </Suspense>
    </>
  )
}

export default App
