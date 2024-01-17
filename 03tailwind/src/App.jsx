import Card from './components/card'
import './App.css'
import myImg from "./kanahiya.png";


function App() {

  return (
    <>
        <Card empName="Kanahiya" post="Frontend Engineer" myImg={myImg}/>
        <Card empName="Raman" />
    </>
  )
}

export default App
