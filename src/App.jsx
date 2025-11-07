import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Menu from "./Pages/Menu/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop/:category" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;