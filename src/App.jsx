import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllCards from "./components/AllCards"
import Breadscrum from "./components/Breadscrum"
import Controls from "./components/Controls"
import MenuItems from "./components/MenuItems"
import CardDetails from "./pages/CardDetails"
import HomePage from "./pages/HomePage"




function App() {


  return (
    <div className="overflow-x-hidden">
  
    <BrowserRouter>
    <MenuItems />
    <Breadscrum />
    <Controls />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<CardDetails />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
