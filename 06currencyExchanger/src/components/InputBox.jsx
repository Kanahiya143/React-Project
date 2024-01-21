/* eslint-disable react/prop-types */

function InputBox({
    label,
    inputAmount,
    selectCurrency,
    currencyOptions = [],
    onAmountChange,
    onCurrecyChange,
    inputField = false,
    inputType
}) {
  
    return(
        <div className="bg-slate-400 w-fit m-auto h-32 rounded-xl p-4 my-8 border-2 border-black ">

           <div className="flex justify-between">
                <h1 className="text-gray-600  ">{label}</h1>
                <h1 className="text-gray-600  ">Currency Type</h1>
           </div>
           <div className="flex mt-4 gap-8">
             <input 
                className=" outline-none h-9 px-3 w-96 rounded-xl" 
                type={inputType}
                disabled = {inputField} 
                placeholder="Amount"
                value={inputAmount} 
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
             />
              <select 
                 className="outline-none h-9 rounded-lg  px-1 bg-blue-200 "
                 value={selectCurrency}
                 onChange={(e)=> onCurrecyChange && onCurrecyChange(e.target.value)}
              >
                {
                    currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                        {currency}
                        </option>
                    ))
                }
              </select>
           </div>
        </div>
    );
}

export default InputBox;