import menuArray from './data.js'
import { CartItem, cart, addToCart } from './cart.js'

document.addEventListener('DOMContentLoaded', () => {
    renderMenu()

    document.querySelector('#menu-container').addEventListener('click', function(event) {
        const target = event.target.closest('[data-id]')
        if(target) {
            addToCart(target.dataset.id, menuArray)
        }
    })
})

// MENU
function renderMenu() {
    const menuHtml = menuArray.map(({ name, ingredients, price, emoji, id}) => {
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

    document.getElementById('menu-container').innerHTML = menuHtml
}

