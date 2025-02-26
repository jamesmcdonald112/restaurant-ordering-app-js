import { cart } from './cart.js'
import menuArray from './data.js';

function calculateTotalPrice() {
    let total = cart.reduce((sum, item) => sum + item.getTotalPrice(), 0)

    // Check if the cart contains both food and a drink
    const hasFood = cart.some(item => {
        const menuItem = menuArray.find(menu => menu.id === item.id)
        return menuItem && menuItem.category === "food"
    })

    const hasDrink = cart.some(item => {
        const menuItem = menuArray.find(menu => menu.id === item.id)
        return menuItem && menuItem.category === 'drink'
    })

    if(hasFood && hasDrink) {
        total *= 0.85
    }

    return total.toFixed(2)
}

function renderCart() {
    const cartContainer = document.getElementById('cart-container')

    if(!cartContainer) return;

    const cartItems = cart.map((item) => `
        <div class="cart-items">
            <h2>${item.name}</h2>
            <p class="cart-item-amount">€${item.price} x ${item.quantity}</p>
            <button data-remove-item="${item.id}" class="remove-button">remove</button>
            <p class="cart-item-cost">€${item.getTotalPrice()}</p>
        </div>
    `).join('')

    const totalPrice = calculateTotalPrice()

    const hasDiscount = cart.some(item => {
        const menuItem = menuArray.find(menu => menu.id === item.id);
        return menuItem && menuItem.category === "food";
    }) && cart.some(item => {
        const menuItem = menuArray.find(menu => menu.id === item.id);
        return menuItem && menuItem.category === "drink";
    });


    cartContainer.innerHTML = `
        <h2 class="cart-title">Your Order</h2>
        ${cartItems}
        <div class="cart-total">
            <h2>Total price:</h2>
            <p class="cart-total-price">€${totalPrice}</p>
        </div>
        ${hasDiscount ? `<p class="discount-message">🎉 15% discount applied for food & drink combo!</p>` : ""}

        <button id="payment-btn" class="payment-btn">
            Complete order
        </button>
    `
}

export { renderCart }