import { useState } from 'react'
import {useAutoAnimate} from "@formkit/auto-animate/react"
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [items, setItems] = useState([0,1,2])
  const [parent, enableAnimations] = useAutoAnimate(/** configs */)
  const [count, setCount] = useState(0)

  const add = () => setItems([...items, items.length])

  return (
    <div className="App">
      
    </div>
  )
}

export default App
