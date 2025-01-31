import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Box, Rating } from "@mui/material"
import CartCotext from "../CartContext"
import { useNavigate } from "react-router-dom"

export default function Product({ product }) {
  const { cart, setCart } = React.useContext(CartCotext)
  const navigate = useNavigate() // Initialize navigate

  function addToCart() {
    const existingProduct = cart.find((cartProduct) => cartProduct === product)
    if (!existingProduct) {
      setCart([...cart, product])
      console.log("cart is", cart)
      navigate("/cart")
    }
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 150, margin: 3 }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Rating
            name="simple-controlled"
            value={product.rating.rate}
            onChange={(event, newValue) => {
              console.log("setting rating")
            }}
            precision={0.1}
          />
          <Typography variant="body2" component="p">
            ({product.rating.count})
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={addToCart}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}
