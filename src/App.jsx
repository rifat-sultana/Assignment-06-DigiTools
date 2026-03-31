
import './App.css'
import Herosection from './Components/Herosection/Herosection'
import Navbar from "./Components/Navbar/Navbar"
import ToolsData from "./Components/ToolsData/ToolsData"
// import StepsSelection from "./Components/StepsSelection/StepsSelection" 

const getToolsData = async () =>{
  const res = await fetch("/DigitalTools.json")
  return res.json();
}



const dataPromise = getToolsData()





function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Herosection />

      {/* <Statsection /> */}

    <ToolsData dataPromise = {dataPromise} />

    {/* <StepsSelection /> */}

    </>
  )
}

export default App
