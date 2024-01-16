import Dev from "./Dev"


function App() {

  const user = 'Kanahiya'

  return (
    <>
    <h1>This is the my first vite react project {user} </h1> 
    <Dev/>
    <p>Good Morning Guys</p>
    </>  // in react we return one component so we wrap all componrnts with one inclosing tag
    // {user} is a evaluated expresion not a javascript
  )
}

export default App
