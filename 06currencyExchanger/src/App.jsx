import './App.css'
import useCurrencyInfo from './hook/useCurrencyInfo'
import { InputBox } from './components'
import { useState } from 'react'

function App() {

  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState('inr')
  const [amount, setAmount] = useState()
  const [convertAmt, setConvertAmt] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  function convert(){
    setConvertAmt(amount * currencyInfo[to])
  }

  function swap(){
    setTo(from)
    setFrom(to)
  }
  

  return (
    <div className='w-screen h-screen flex justify-center items-center' style={{backgroundImage : `url('https://img.freepik.com/free-vector/rupee-symbol-frame-with-text-space_1017-36519.jpg?w=740&t=st=1705851962~exp=1705852562~hmac=cdfb1a184606810e3039ae6b050aafadc94107c2d0b7b8562fb8a6b8f00b5f4b')`}}>

        <div className="bg-slate-400 rounded-xl flex justify-center flex-col p-5">
            <InputBox
              label = "From"
              inputType="number"
              inputAmount={amount}
              currencyOptions={options}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrecyChange={(currency) => setFrom(currency)}
            />

            <button className='m-auto bg-blue-200 px-4 py-2 rounded-lg' onClick={swap}>Swap</button>

            <InputBox
              label = "To"
              inputAmount={convertAmt}
              currencyOptions={options}
              selectCurrency={to}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrecyChange={(currency) => setTo(currency)}
              inputType='text'
              inputField='false'
            />

            <button className='m-auto bg-blue-600 px-6 py-2 rounded-lg' onClick={convert}>Convert</button>
        </div>
    </div>
  )
}

export default App
