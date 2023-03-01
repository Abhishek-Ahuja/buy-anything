import { useState } from 'react'
import './App.css'
import Login from './component/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
