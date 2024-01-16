import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Ram(){
    return(
        <div>
            <h1>Jai Shree Ram !</h1>
        </div>
    )
}

const anotherCanst = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
    )
const user = "Kanhaiya"   
    
const reactCreateElement = React.createElement(  // babel inject and covert the code 
    'a',
    {href:'https://google.com', target :'_blank'},
    'click here to visit google',
    user
) // react convert html object into that type of object


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
    // <Ram/>
    // Ram() its not good practice for cooding
    // anotherCanst // this constant is converted into object or tree by react library
    // reactCreateElement  
)
