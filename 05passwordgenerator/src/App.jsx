import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [splCharAllowed, setsplCharAllowed] = useState(false);
    const [password, setPassword] = useState('');
    const [copy, copied] = useState('Copy')

    // useRef hook
    const pwdRef = useRef(null)  

    const copyPwd = ()=>{   
        pwdRef.current?.select();
        pwdRef.current?.setSelectionRange(0,100)
        copied('Copied')
        window.navigator.clipboard.writeText(password)
    } 

    const passGenerator = useCallback(()=>{  // useCallback hook used for optimization
        let pass = '';
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTWXYZ"
        if(numAllowed) str += '12345667890';
        if(splCharAllowed) str += '{}[])(*&^%$#@!';

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length +1)
            pass += str.charAt(char);   
        }
        copied('Copy')
        setPassword(pass) 
    },[length,numAllowed,splCharAllowed,setPassword])

    useEffect(() => {  // this hook execute according to dependancies
        passGenerator();
    }, [passGenerator])
    
    
  return (
      <div className="bg-gray-500 w-fit max-w-3xl p-12  m-auto">
          <h1 className="text-white text-3xl">Password Generator</h1>
          <div className='flex  rounded-2xl overflow-hidden my-4'>
              <input type="text" className=" outline-none w-full py-1 px-3" ref={pwdRef} value={password} />
              <button className='outline-none bg-green-700 text-white px-3 py-0.5 h-10 shrink-0' onClick={copyPwd}  >{copy}</button>
          </div>
          <div className='flex justify-center gap-2 pb-6 '>
              <div className="flex gap-1">
                <input type="range" min={6} max={100} value={length} 
                onChange={(e)=>setLength(e.target.value)}/> Length : {length}
              </div>
              <div className="flex gap-1">
                <input type="checkbox" onChange={()=>{setNumAllowed((prev) => !prev)}}/> Number
              </div>
              <div className="flex gap-1">
                <input type="checkbox" onChange={()=>{setsplCharAllowed((prev)=>!prev)}}/> Special Character
              </div> 
          </div>
      </div>
  )
}

export default App
