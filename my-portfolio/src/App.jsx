import React, { useLayoutEffect, useState } from 'react'
import Loder from './Components/Loader'
import About from './Pages/About'
import Loader from './Components/Loader'
const App = () => {

  const [load,Setload] = useState(true)

  return (
    <>
      {load && <Loader onFinish={()=> Setload(false)}/>}
      {!load && <About/>}
    </>
  )
}

export default App