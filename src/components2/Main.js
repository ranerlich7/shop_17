import axios from "axios"
import { useEffect, useState } from "react"

function Main() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("https://shop17-back.onrender.com/products/").then((response) => {
      setProducts(response.data)
    })
  }, [])

  return (
    <>
      <div class="col-sm-9">
        <h4>
          <small>Products</small>
        </h4>
        <hr />
        {products.map((product, index) => (
          <>
            <h2>{product.name}</h2>
            <h5>
              <span class="glyphicon glyphicon-time"></span> {product.price}
            </h5>
            <h5>
              <span class="label label-danger">Food</span>{" "}
              <span class="label label-primary">Ipsum</span>
            </h5>
            <br />
            <p>
              Food is my passion. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <br />
            <br />
          </>
        ))}

        <hr />

        <h4>Leave a Comment:</h4>
        <form role="form">
          <div class="form-group">
            <textarea class="form-control" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-success">
            Submit
          </button>
        </form>
        <br />
        <br />

        <p>
          <span class="badge">2</span> Comments:
        </p>
        <br />

        <div class="row">
          <div class="col-sm-2 text-center">
            <img
              src="bandmember.jpg"
              class="img-circle"
              height="65"
              width="65"
              alt="Avatar"
            />
          </div>
          <div class="col-sm-10">
            <h4>
              Anja <small>Sep 29, 2015, 9:12 PM</small>
            </h4>
            <p>
              Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
          </div>
          <div class="col-sm-2 text-center">
            <img
              src="bird.jpg"
              class="img-circle"
              height="65"
              width="65"
              alt="Avatar"
            />
          </div>
          <div class="col-sm-10">
            <h4>
              John Row <small>Sep 25, 2015, 8:25 PM</small>
            </h4>
            <p>
              I am so happy for you man! Finally. I am looking forward to read
              about your trendy life. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <br />
            <p>
              <span class="badge">1</span> Comment:
            </p>
            <br />
            <div class="row">
              <div class="col-sm-2 text-center">
                <img
                  src="bird.jpg"
                  class="img-circle"
                  height="65"
                  width="65"
                  alt="Avatar"
                />
              </div>
              <div class="col-xs-10">
                <h4>
                  Nested Bro <small>Sep 25, 2015, 8:28 PM</small>
                </h4>
                <p>Me too! WOW!</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main