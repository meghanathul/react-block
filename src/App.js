import React from 'react'
import Home from './Component/Home'
import Navebar from './Component/Navebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tourism from './Component/Tourism'
import Fitness from './Component/Fitness'
import Technology from './Component/Technology'
import Bollywood from './Component/Bollywood'
import Food from './Component/Food'
import Kerala from './tourism/Kerala'
import PageNotFound from './Component/PageNotFound'

const App = () => {
  
  
    return (
    <div>

      <Router>
        <Navebar />

        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/tourism' element={<Tourism  />} />
          <Route path='/kerala' element={<Kerala/>}/>


          
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/technology' element={<Technology />} />
         

          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/food' element={<Food />} />

          <Route path='/*' element={<PageNotFound />} />

        </Routes>

      </Router>




    </div>
  )
    }

export default App