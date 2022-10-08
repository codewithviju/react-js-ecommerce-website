import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, fetchAllProducts } from "../Redux/reducers/ProductSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const { products, loading } = useSelector((state) => state.products);
  return (
    <>
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <h1 className="text-center">All Products</h1>
            {loading && <h2 className="text-center">Loading..</h2>}
            {products &&
              products.map((item) => {
                return (
                  <div class="card mx-auto my-4" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top img-responsive"
                      src={`${item.image}`}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <p class="card-text">{item.title}</p>
                      <p class="card-text">{item.price}</p>
                      <button
                        onClick={() => dispatch(AddToCart(item.id))}
                        className="btn btn-info"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
