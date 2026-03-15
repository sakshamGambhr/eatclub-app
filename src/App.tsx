import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantList from "./pages/RestaurantList/RestaurantList";
import RestaurantDetail from "./pages/RestaurantDetail/RestaurantDetail";
import Navbar from "./components/Navbar/Navbar";
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<RestaurantList />} />
        <Route path='/restaurant/:id' element={<RestaurantDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
