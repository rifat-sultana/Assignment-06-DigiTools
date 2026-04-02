
import './App.css'
import Herosection from './Components/Herosection/Herosection'
import Navbar from "./Components/Navbar/Navbar"
import StatsSelection from "./Components/StatsSelection/StatsSelection"
import ToolsData from "./Components/ToolsData/ToolsData"
import Cart from "./Components/Cart/Cart"
import { useState } from "react";
import StepsSelection from "./Components/StepsSelection/StepsSelection"
import PricingSection from "./Components/PricingSection/PricingSection"
import CTASection from "./Components/CTASection/CTASection"
import Footer from "./Components/Footer/Footer"




const getToolsData = async () =>{
  const res = await fetch("/DigitalTools.json")
  return res.json();
}



const dataPromise = getToolsData()





function App() {
  const [activeTab , setActiveTab] = useState("products")
  const [carts, setCarts] =useState([])
  console.log(carts)


  return (
    <>
      <Navbar carts={carts}/>

      <Herosection 
      activeTab={activeTab}
      setActiveTab={setActiveTab} />

      <StatsSelection />


    {activeTab ==="products" && 
    <ToolsData 
    dataPromise = {dataPromise}
    activeTab={activeTab} 
    setActiveTab ={setActiveTab} 
    carts={carts} 
    setCarts={setCarts} />}
  

    {activeTab === "cart" && 
    <Cart 
    carts={carts} 
    setCarts={setCarts}/>}

    <StepsSelection />

    <PricingSection />

    <CTASection />

    <Footer />

    </>
  )
}

export default App
