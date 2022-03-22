import { items } from "./components/data";
import "./App.css";
import Product from "./components/Product";
function App() {
  const productList = items;
  return (
    <div className="App">
      <Product productList={productList} />
    </div>
  );
}

export default App;
