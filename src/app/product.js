import { productGroup, productTemplate } from "../core/selectors"

export const productUi = ({id,title,image,description,price}) => {
    const product = productTemplate.content.cloneNode(true);
    product.querySelector(".product-img").src = image;
    product.querySelector(".product-title").innerText = title;
    product.querySelector(".product-description").innerText = description;
    product.querySelector(".product-price").innerText = price;
    return product;



}

export const productRender =(lists) => {
    lists.forEach(list => productGroup.append(productUi(list)))
    
}