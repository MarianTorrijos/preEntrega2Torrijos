import { BrowserRouter,Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Provider } from "./components/itemsContext"; 
import { Cart } from "./components/Cart";
import { CartWidget } from "./components/CartWidget";

function App() {
  return (
    <Provider>
  <BrowserRouter>
  <NavBar />
  <Routes>
  <Route path="/" element={ <ItemListContainer/>} />
  <Route path="/category/:id" element={ <ItemListContainer/>} />
  <Route path="/item/:id" element={ <ItemDetailContainer/>} />
  <Route path="/cart" element={ <Cart/>} />
  </Routes>
  </BrowserRouter>
  </Provider>
 
  );
}



export default App;
