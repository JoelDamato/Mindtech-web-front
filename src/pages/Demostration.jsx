import React, { useState, useEffect } from "react";
import axios from "axios";

export default function () {
  const [cart, setCart] = useState();
 const user = JSON.parse("user")

console.log(user)

  const viewCart = () => {
    axios
      .get("http://localhost:3000/carts/one?one=joakin@mt.com")
      .then((res) => {
        setCart(res.data.cart);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addProduct = (cartID, productID) => {
    axios
      .post(
        `http://localhost:3000/carts/addProduct?cartID=${cartID}&productID=${productID}`
      )
      .then((res) => {
        setCart(res.data.cart);
        viewCart();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delProduct = (cartID, productID) => {
    axios
      .delete(
        `http://localhost:3000/carts/delProduct?cartID=${cartID}&productID=${productID}`
      )
      .then((res) => {
        setCart(res.data.cart);
        viewCart();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeProduct = (cartID, productID) => {
    axios
      .put(
        `http://localhost:3000/carts/removeProduct?cartID=${cartID}&productID=${productID}`
      )
      .then((res) => {
        setCart(res.data.cart);
        viewCart();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewCart();
  }, []);

  console.log(cart?.products);

  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            onClick={viewCart}
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
            Open drawer
          </label>
        </div>
        <div className={`drawer-side open`}>
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <div className="p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <p>text1</p>
            {cart?.products.map((item, index) => (
              <div
                className="rounded-lg border-1 border-black bg-white w-[90%] p-1"
                key={index}
              >
                <h1 className="text-black text-[2vh]">{item.name}</h1>
                <div className="flex items-center">
                  <img className="w-[30%] h-[10vh]" src={item.images} alt="" />
                  <div className="flex flex-col items-center justify-center w-[70%]">
                    <p className="text-black">Price:{item.price}</p>
                    <p className="text-black">Subtotal:{item.subtotal}</p>
                    <p className="text-black">Quantity:{item.quantity}</p>
                    <button
                      onClick={() => addProduct(cart._id, item.product_id)}
                    >
                      Increase
                    </button>
                    <button
                      onClick={() => delProduct(cart._id, item.product_id)}
                    >
                      Reduce
                    </button>
                    <p className="flex text-black"></p>
                  </div>
                  <button
                    onClick={() => removeProduct(cart._id, item.product_id)}
                    className="text-black"
                  >
                    <img
                      className="w-[30px] mr-5"
                      src="https://cdn-icons-png.flaticon.com/512/860/860778.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}                   