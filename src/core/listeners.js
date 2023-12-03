import { categoryGroupHandler } from "../app/category";
import { searchBtnHandler } from "./handlers";
import { categoryGroup, searchBtn } from "./selectors";

const listeners = () => {
    categoryGroup.addEventListener("click",categoryGroupHandler);
    searchBtn.addEventListener("#click",searchBtnHandler)
}


export default listeners;
