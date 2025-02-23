import menuArray from './data.js'


function getMenuHtml() {
    return menuArray.map(({ name, ingredients, price, emoji, id}) => {
        return `
        <div class="menu-item">
            <span class="food-emoji">${emoji}</span>
            <div class="food-details">
                <h2>${name}</h2>
                <p class="food-ingredients">${ingredients.join(", ")}</p>
                <p class="food-price">€${price}</p>
            </div>
            <button class="add-button" data-id=${id}>
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        `
        
    }).join('')
}

document.getElementById('menu-container').innerHTML = getMenuHtml()