import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './home'
import Add from './add'
import Update from './update'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add />}/>
        <Route path='/update/:id' element={<Update />}/>
      </Routes>
    </>
  )
}

export default App
