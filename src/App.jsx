import AllCards from "./components/AllCards"
import Breadscrum from "./components/Breadscrum"
import Controls from "./components/Controls"
import MenuItems from "./components/MenuItems"




function App() {


  return (
    <div className="overflow-x-hidden">
    <MenuItems />
    <Breadscrum />
    <Controls />
    <AllCards />
    </div>
  )
}

export default App
