import { $categories } from "./variables.js";

function formatString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getAllCategories = async () => {
    try {
        let res = await fetch(`https://online-store-bsale-api.herokuapp.com/api/categories`),
        json = await res.json(),
        categories = await json.content;
        
        if(!res.ok) throw {status:res.status, statusText: res.statusText};

        categories.forEach(el => {
            $categories.insertAdjacentHTML("beforeend",
            `<button id="${el.id}" type="button" class="list-group-item list-group-item-action">${formatString(el.name)}</button>`);
        });

    } catch (error) {
        let message = error.statusText || "Ocurrió un error";
        $categories.insertAdjacentHTML("beforeend",
        `<button type="button" class="list-group-item list-group-item-action">${message}</button>`);
    }
}