import React, { useState,useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import BuyQuantum from './components/Quantum/BuyQauntum'

const LandingPage = lazy(()=>import('./components/Quantum/QuantumLanding'))

const App = () => {

  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route exact path='/' element={
        <Suspense fallback={<h1>Loading...</h1>}>
          <LandingPage/>
        </Suspense>
        
        }/>
     <Route exact path='/buy' element = {<BuyQuantum/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App