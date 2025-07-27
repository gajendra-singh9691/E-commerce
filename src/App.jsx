import { Route, Routes } from "react-router-dom"
import Footer from "./Component/Footer"
import Nav from "./Component/Nav"
import Home from "./Pages/Home"
import Cricket from "./Pages/Cricket"
import Football from "./Pages/Football"
import Addtocart from "./Component/AddtoCart"
import { useState } from "react"

function App() {
  const [addtocart, setaddtocart] = useState(false);
  const [data, setdata] = useState([]);
  return (
    <>
      <Nav fun={setaddtocart} addtocart={addtocart} />
      <Addtocart addtocart={addtocart} fun={setaddtocart} data={data}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cricket-jersey" element={<Cricket />} />
        <Route path="/football-jersey" element={<Football />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
