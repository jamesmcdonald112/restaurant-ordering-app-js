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
            <button data-remove-item="${item.id}" class="remove-button">remove</button>
            <p class="cart-item-name">€${item.price} x ${item.quantity}</p>
            <p class="cart-item-cost">€${item.getTotalPrice()}</p>
        </div>
    `).join('')

    const totalPrice = calculateTotalPrice()

    cartContainer.innerHTML = `
        ${cartItems}
        <div class="cart-total">
            <h2>Total price:</h2>
            <p>€${totalPrice}</p>
        </div>
    `
}

export { renderCart }