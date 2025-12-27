import React, { useState } from 'react'
import Loder from './Components/Loader'
import About from './Pages/About'
import Loader from './Components/Loader'
const App = () => {

  const [loading, Setloading] = useState(true)

  return (
    <>
      {loading && <Loader OnFinish={()=>Setloading(false)}/>}
      {!loading && <About/>}
    </>
  )
}

export default App