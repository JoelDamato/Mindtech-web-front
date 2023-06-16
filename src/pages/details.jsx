import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useStore from "../store/store";
import axios from "axios";
import apiUrl from "../../api";

export default function Details() {
  const cartItems = useStore((state) => state.cartItems);
  const setCartItems = useStore((state) => state.setCartItems);
  const { cart, setCart, oneProduct, getOneProduct } = useStore();

  const viewCart = (email) => {
    axios
      .get(apiUrl + `carts/one?one=${email}`)
      .then((res) => {
        setCart(res.data.cart);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addProduct = (cartID, productID) => {
    axios
      .post(apiUrl + `carts/addProduct?cartID=${cartID}&productID=${productID}`)
      .then((res) => {
        setCart(res.data.cart);
        viewCart("joakin@mt.com");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let [image, setImage] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
    window.scrollTo(0, 0);
  }, []);

  function next(array) {
    setImage(image + 1);
    if (image === array.length - 1) {
      setImage(0);
    }
  }
  function prev(array) {
    setImage(image - 1);
    if (image === 0) {
      setImage(array.length - 1);
    }
  }

  return (
    <>
      <div className="flex justify-center mob:h-full h-[100vh] w-full bg-black ">
        <Link to={"/store"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 absolute cursor-pointer text-black right-[10vw] top-[14vh]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Link>

        <div className="flex mob:flex-col  mt-[12vh] bg-[#D9D9D9] mob:rounded-tr-[300px] rounded-tl-[300px] lg:rounded-br-[300px] mob:h-full sm:h-[87%] w-[90%] pb-5">
          <div className="sm:p-5 sm:w-[20%] relative">
            <div className="mob:pl-2 flex tl:w-[25vw] tl:ml-[-1vw]">
              <img
                className="w-8 h-8 mt-[25vh] z-10  opacity-30 cursor-pointer"
                onClick={() => prev(oneProduct.images)}
                src="https://cdn-icons-png.flaticon.com/128/6407/6407299.png"
                alt=""
              />
              {oneProduct.images ? (
                <img
                  className="z-0 sm:ml-[-10%] sm:mt-[-2%] mob:w-[65vw] mob:h-[40vh] tl:w-[80vw] "
                  src={oneProduct.images[image]}
                  alt=""
                />
              ) : null}
              <img
                className="z-10 w-8 h-8 mt-[25vh] cursor-pointer opacity-30"
                onClick={() => next(oneProduct.images)}
                src="https://cdn-icons-png.flaticon.com/128/6407/6407301.png"
                alt=""
              />
            </div>
            <div className="mob:ml-4 mob:mt-[10%] mt-3  sm:ml-[-2vw] h-[12vh] tl:w-[30vw] mob:w-[80vw] bg-white rounded-[10vh] flex justify-center">
              <p className=" text-[8vh] font-bold tracking-[10px]  text-black tl:text-[3vh] ">
                ${oneProduct.price}
              </p>
            </div>
            <div className="mob:ml-5 mob:mt-5 flex-col mt-2 sm:mt-[16vh] ml-5">
              <p className="flex text-[#00A524] text-[3vh] tl:text-[2.5vh] gap-3">
                <img
                  className="w-[40px] tl:h-[30px]"
                  src="../public/shipping.png"
                  alt=""
                />
                shipping free
              </p>
              <p className="flex text-[#00A524] text-[3vh] tl:text-[2.5vh] gap-3 mt-2">
                <img
                  className="w-[40px] tl:h-[30px]"
                  src="../public/interest.png"
                  alt=""
                />
                interest-free fees
              </p>
            </div>
          </div>
          <div className="sm:ml-[6%] sm:w-[50%] flex flex-col items-center tl:ml-[20%]">
            <h1 className="mt-3 font-semibold tracking-[15px] text-[5vh]  text-black ">
              DETAILS
            </h1>
            <div className="flex flex-col justify-center items-center mt-5 sm:ml-[-2vw] h-[18vh] mob:h-[28vh] tl:h-[30vh] w-[100%] bg-[#ACABAB] rounded-[10vh] tl:flex tl:flex-col tl:justify-center">
              <p className="w-[90%]  font-bold text-[3vh] flex justify-center  text-black mob:text-[2.5vh] tl:text-[2vh] tl:ml-[4%]">
                {oneProduct.name}
              </p>
              <p className=" flex justify-center lg:tracking-[3px] text-[3vh] mob:text-[2vh] tl:text-[1.5vh]">
                Color : Mineral gray | Atlantic Green | Black
              </p>
            </div>

            <div className="mt-5 mob:ml-[6%] font-semibold text-black text-left flex flex-col text-[3vh]  tl:text-[2vh]">
              {oneProduct.description}
            </div>
            <p className="ml-[3%] mt-5 font-bold text-[#00A524] text-[2.5vh] tracking-[4px]">
              Buy it now in 12 installments without interest!{" "}
            </p>
            <p className=" font-bold text-[#00A524] text-[2.5vh] tracking-[2px]">
              ${(oneProduct.price / 12).toFixed(2)}
            </p>
            <div
              onClick={() => {
                if (oneProduct && oneProduct._id && cart && cart._id) {
                  addProduct(cart?._id, oneProduct._id);
                }
              }}
              className="mt-5 text-black text-[5vh] font-bold flex justify-center items-center h-[10vh] w-[20vw] mob:w-[80%] mob:text-[3vh] bg-[#00A524] rounded-[10vh] tl:text-[2vh] cursor-pointer"
            >
              + ADD TO CART
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
