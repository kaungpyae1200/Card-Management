import { confirmBox } from "../core/function";
import { cartGroup, cartTemplate } from "../core/selectors";

export const cartUi = ({ id, title, image, price }) => {
  const cart = cartTemplate.content.cloneNode(true);
  cart.querySelector(".product-in-cart").setAttribute("product-in-cart-id", id);
  cart.querySelector(".cart-img").src = image;
  cart.querySelector(".cart-title").innerText = title;
  cart.querySelector(".cart-price").innerText = price;
  cart.querySelector(".cart-cost").innerText = price;
  cart.querySelector(".cart-q").innerText = 1;
  return cart;
};

export const removeCart = (id) => {
  const currentCart = cartGroup.querySelector(`[product-in-cart-id = '${id}']`);
  confirmBox(() => {
    currentCart.remove();
  });
};

export const cartGroupHandler = (event) => {
  if (event.target.classList.contains("cart-del")) {
    removeCart(
      event.target
        .closest(".product-in-cart")
        .getAttribute("product-in-cart-id")
    );
  }
};

export const cartGroupObserver = () => {
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

    costTotal.innerText = cartCostTotal.toFixed(2);
  };

  const options = {
    childList: true,
    subtree: true,
  };
  const observer = new MutationObserver(process);
  observer.observe(cartGroup, options);
};
