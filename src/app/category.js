import { categoryGroup, categoryTemplate } from "../core/selectors"

export const categoryUi = (text) => {
    const category = categoryTemplate.textContent.cloneNode(true);
    category.querySelector(".cat-btn").innerText = text;
    return category;
}


export const categoryRender = (lists) => {
    lists.forEach(list => categoryGroup.append(categoryUi(list)))
}