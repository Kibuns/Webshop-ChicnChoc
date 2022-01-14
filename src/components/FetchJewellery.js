import { useState, useEffect } from "react";
import Jewellery from "../pages/Jewellery";
import React from "react";
import ErrorPage from "./ErrorPage";

const FetchJewellery = (props) => {
  const [products, setProducts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8080/api/products")
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("could not fetch data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setProducts(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div>
      {props.throwError && <ErrorPage message={"Test Error"} />}
      {error && <ErrorPage message={error} />}
      {isPending && <div>Loading...</div>}
      {props.mock == true && (
        <div>
          <h2 className="text-center">Product Details</h2>
          <div className="card-row" data-testid="name">
            <div className="card">
              <div className="card-img">
                <img src={props.product.image} style={{ height: "100%" }}></img>
              </div>
              <a href="#">
                <div className="card-body">
                  <h5 className="card-title">{props.product.name}</h5>
                  <h6 className="card-subtitle"> €{props.product.price}</h6>
                  {props.product.stock <= 0 ? (
                    <h6 className="card-subtitle" style="color: red">
                      OUT OF STOCK
                    </h6>
                  ) : (
                    <div></div>
                  )}
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
      {props.mock === null ||
        (products && (
          <div>
            <h2 className="text-center">Product Details</h2>
            <div className="card-row" data-testid="name">
              {products.map((product) => (
                <div className="card">
                  <div className="card-img">
                    <img src={product.image} style={{ height: "100%" }}></img>
                  </div>
                  <a href="#">
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <h6 className="card-subtitle"> €{product.price}</h6>
                      {product.stock <= 0 ? (
                        <h6 className="card-subtitle" style="color: red">
                          OUT OF STOCK
                        </h6>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default FetchJewellery;
