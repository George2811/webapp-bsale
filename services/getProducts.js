import { $cards } from "./variables.js";

export const getAllProducts = async (path = "") => {
    try {
        let res = await fetch(`https://online-store-bsale-api.herokuapp.com/api/products/${path}`),
        json = await res.json(),
        products = await json.content;
        
        if(!res.ok) throw {status:res.status, statusText: res.statusText};

        while($cards.firstChild){
            $cards.removeChild($cards.firstChild);
        }  
        
        products.forEach(el => {
            const $newCard = document.createElement("div");
            $newCard.setAttribute("class", "card mb-4");

            $newCard.insertAdjacentHTML("afterbegin",
            `   <img src="${el.urlImage || './assets/empty_img.png'}" class="card-img-top card-img" alt="product_img">
                <div class="card-body">
                    <h5 class="card-title">${el.name}</h5>
                </div>
                <div class="pt-1 card-body d-flex justify-content-between align-items-center">
                    <p class="card-text mt-3"><strong>S/. ${el.price}</strong></p>
                    <a href="#" class="btn btn-outline-warning"><i class="fas fa-cart-plus"></i></a>
                </div>      
            `);
            $cards.insertAdjacentElement("beforeend", $newCard);

        });

    } catch (error) {
        let message = error.statusText || "No se cargaron los productos";
        $cards.insertAdjacentHTML("beforeend", `<h6>${message}</h6>`);
    }
}