import { useContext } from "react"
import CartCotext from "../CartContext"
import Total from "./Total"

function Cart() {
  const { cart, setCart } = useContext(CartCotext)
  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart:</h1>
      {cart.length > 0 ? (
        cart.map((product, index) => (
          <div key={index} className="cart-item">
            <img
              src={product.image}
              alt={product.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{product.name}</h3>
              <p className="cart-item-price">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="cart-empty">Your cart is empty</p>
      )}
      <Total />
    </div>
  )
}

export default Cart
