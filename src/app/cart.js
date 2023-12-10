import { cartGroup, cartTemplate } from "../core/selectors";

export const cartUi = ({id, title, image, price }) => {
  const cart = cartTemplate.content.cloneNode(true);
  cart.querySelector(".cart-img").src = image;
  cart.querySelector(".cart-title").innerText = title;
  cart.querySelector(".cart-price").innerText = price;
  cart.querySelector(".cart-cost").innerText = price;
  cart.querySelector(".cart-q").innerText = 1;
  return cart;
};


export const cartGroupObsever = () => {
  const process = () => {
    // count cart
    const cartCount = cartGroup.querySelectorAll(".product-in-cart").length;
    app
      .querySelectorAll(".cart-item-count")
      .forEach((el) => (el.innerText = cartCount));


      // set total
    const cartCostTotal = [...cartGroup.querySelectorAll(".cart-cost")].reduce(
      (pv, cv) => pv + parseFloat(cv.innerText),
      0
    );

    costTotal.innerText = cartCostTotal

  }

  const options = {
    childList :true,
    subtree: true,

  };
  const observer = new MutationObserver(process);
  observer.observe(cartGroup, options);
}