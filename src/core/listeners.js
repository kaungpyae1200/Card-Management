import { categoryGroupHandler } from "../app/category";
import { productGroupHandler } from "../app/product";
import { searchBtnHandler, searchInputHandler } from "./handlers";

import { categoryGroup, productGroup, searchBtn, searchInput } from "./selectors";

const listeners = () => {
    categoryGroup.addEventListener("click",categoryGroupHandler);
    searchBtn.addEventListener("click",searchBtnHandler);
    searchInput.addEventListener("keyup",searchInputHandler);
    productGroup.addEventListener("click",productGroupHandler);
    
}


export default listeners;

