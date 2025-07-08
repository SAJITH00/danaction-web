import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Base from './pages/Base'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from './pages/Chart'
import Tables from './pages/Tables'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div  className='allbox' style={{ 
  position: "relative",
  minHeight: "100vh",  
  display: "flex",
  flexDirection: "column"
}}>

  <Header   style={{ position: "absolute", top: "0", left: "0", right: "0" }} />
      <div style={{ flex: 1 }}>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/base' element={<Base/>}/>
    <Route path='/table' element={<Tables/>}/>
   <Route path='/chart' element={<Chart/>}/>

   </Routes>
     </div>
   <Footer/>
     </div>
    </>
  )
}

export default App
