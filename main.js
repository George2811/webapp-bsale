import { getAllCategories } from "./services/getCategories.js";
import { getAllProducts, getProductByName } from "./services/getProducts.js";
import { d, $searcher, $categories } from "./services/variables.js";


d.addEventListener("DOMContentLoaded", getAllCategories);
d.addEventListener("DOMContentLoaded", getAllProducts());

d.addEventListener("submit", async e => {
    if(e.target === $searcher){
        e.preventDefault();

        if(e.target.name.value){
            getProductByName(e.target.name.value);
        }
    }
});

d.addEventListener("click", e => {
    if(e.target.attributes.id.value === "all_btn"){
        getAllProducts();
        return;
    }

    if(e.target.classList[0]){
        getAllProducts(`category/${e.target.attributes.id.value}`);
    }
});