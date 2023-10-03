import { useState } from 'react'
import tv from './assets/images/teste2.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function incrementar(){
    if(count < 10){
      setCount(count + 1)
    }
  }

  function decrementar(){
    if(count > 0){
      setCount(count - 1)
    }
  }
  return (
    <>
      <img src={tv} alt="React logo" className='imagem'/>
      <div className="card">
        <div>
          <p>Vamos contar ate 10? rs</p>
          <h2>{count}</h2>
          <button onClick={incrementar}> + </button>
          <button onClick={decrementar}> - </button>
        </div>
      </div>

    </>
  )
}

export default App
