import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantList from "./pages/RestaurantList/RestaurantList";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RestaurantList />} />
        {/* <Route path='/restaurant/:id' element={<RestaurantDetail />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
