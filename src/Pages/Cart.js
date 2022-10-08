import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveCartItem } from "../Redux/reducers/ProductSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.products);

  const totalPrice = carts.reduce((acc, a) => {
    return acc + a.price;
  }, 0);

  return (
    <>
      <section class="h-100 h-custom">
        <div class="container py-2 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12">
              <div
                class="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div class="card-body p-0">
                  <div class="row g-0">
                    <div class="col-lg-12">
                      <div class="p-5">
                        <div class="d-flex justify-content-between align-items-center mb-5">
                          <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                          <h6 class="mb-0 text-muted">{carts.length} items</h6>
                        </div>
                        <hr class="my-4" />
                        {carts && Object.keys(carts).length > 0 ? (
                          carts.map((item) => {
                            return (
                              <>
                                <div class="row mb-4 d-flex justify-content-between align-items-center">
                                  <div class="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                      src={`${item.image}`}
                                      class="img-fluid rounded-3"
                                      alt="Cotton T-shirt"
                                    />
                                  </div>
                                  <div class="col-md-3 col-lg-3 col-xl-3">
                                    <h6 class="text-black mb-0">
                                      {item.title}
                                    </h6>
                                  </div>
                                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <h6 class="text-black mb-0">
                                      {item.category}
                                    </h6>
                                  </div>
                                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h6 class="mb-0">{item.price}</h6>
                                  </div>
                                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <a class="text-muted">
                                      <i
                                        onClick={() =>
                                          dispatch(RemoveCartItem(item.id))
                                        }
                                        class="fas fa-times"
                                        style={{ cursor: "pointer" }}
                                      ></i>
                                    </a>
                                  </div>
                                </div>

                                <hr class="my-4" />
                              </>
                            );
                          })
                        ) : (
                          <h2 className="text-center">
                            Cart is Empty! Shop Now
                          </h2>
                        )}

                        <div class="pt-5 d-flex">
                          <h6 class="mb-0">
                            <Link to={"/"}>
                              <i class="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                          <h6 className="mx-auto">
                            Total Price : {totalPrice}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
