import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([])

  function getProducts() {
    axios.get("http://localhost:3006/products").then((response) => {
      console.log(response.data);
      setProducts(response.data)
    });
  }
  return (
    <>
      <button onClick={() => getProducts()}>Show Products</button>
      <div>
      {products.map(product => <li>{product.name}</li>)}
      </div>

    </>
  );
}

export default App;
