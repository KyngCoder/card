import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllCards from "./components/AllCards"
import Breadscrum from "./components/Breadscrum"
import Controls from "./components/Controls"
import MenuItems from "./components/MenuItems"
import CardDetails from "./pages/CardDetails"
import HomePage from "./pages/HomePage"
import Decks from "./pages/Decks"




function App() {


  return (
    <div className="overflow-x-hidden">
  
    <BrowserRouter>
    <MenuItems />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<CardDetails />} />
      <Route path="/decks" element={<Decks />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
