import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('gray')

  return (
  <div className=' w-full h-screen flex justify-center ' style={{backgroundColor : color}}>
        <div className="w-fit h-fit p-4 bg-white flex justify-center gap-3 absolute bottom-10 rounded-3xl">
          <button className='px-3 py-1  rounded-2xl text-xl' style={{backgroundColor : 'red'}} onClick={()=>setColor('red')}>Red</button>
          <button className='px-3 py-1  rounded-2xl text-xl' style={{backgroundColor : 'green'}} onClick={()=>setColor('green')}>Green</button>
          <button className='px-3 py-1  rounded-2xl text-xl' style={{backgroundColor : 'blue'}} onClick={()=>setColor('blue')}>Blue</button>
          <button className='px-3 py-1  rounded-2xl text-xl' style={{backgroundColor : 'purple'}} onClick={()=>setColor('purple')}>Purple</button>
          <button className='px-3 py-1  rounded-2xl text-xl' style={{backgroundColor : 'orange'}} onClick={()=>setColor('orange')}>Orange</button>
          <button className='px-3 py-1  rounded-2xl text-xl' style={{backgroundColor : 'yellow'}} onClick={()=>setColor('yellow')}>Yellow</button>

        </div>
    </div>
  )
}

export default App
