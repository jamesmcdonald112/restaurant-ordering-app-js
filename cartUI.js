import { cart } from './cart.js'

function calculateTotalPrice() {
    return cart.reduce((sum, item) => sum + item.getTotalPrice(), 0)
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

    cartContainer.innerHTML = `
        <h2 class="cart-title">Your Order</h2>
        ${cartItems}
        <div class="cart-total">
            <h2>Total price:</h2>
            <p class="cart-total-price">€${totalPrice}</p>
        </div>
        <button id="payment-btn" class="payment-btn">
            Complete order
        </button>
    `
}

export { renderCart }