import { cartTemplate } from "../core/selectors";

export const cartUi = ({ title, image, price }) => {
  const cart = cartTemplate.content.cloneNode(true);
  cart.querySelector(".cart-img").src = image;
  cart.querySelector(".cart-title").innerText = title;
  cart.querySelector(".cart-price").innerText = price;
  cart.querySelector(".cart-cost").innerText = price;
  cart.querySelector(".cart-q").innerText = 1;
  return cart;
};
