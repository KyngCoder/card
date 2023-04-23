import { BrowserRouter, Route, Routes } from "react-router-dom"
import MenuItems from "./components/MenuItems"
import CardDetails from "./pages/CardDetails"
import HomePage from "./pages/HomePage"
import DeckOfCard from "./pages/DeckOfCard"
import AllDeck from "./pages/AllDeck"




function App() {


  return (
    <div className="overflow-x-hidden">
  
    <BrowserRouter>
    <MenuItems />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<CardDetails />} />
      <Route path="/decks" element={<AllDeck />} />
      <Route path="/deck/details" element={<DeckOfCard />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
