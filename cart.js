import { renderCart } from "./cartUI.js";

class CartItem {
    constructor(id, name, price, emoji, quantity = 1) {
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
        this.emoji = emoji
    }

    increaseQuantity() {
        this.quantity++
    }

    decreaseQuantity() {
        if(this.quantity > 1) {
            this.quantity--;
            return true;
        }
        return false;
    }

    getTotalPrice() {
        return this.quantity * this.price
    }

    toString() {
        return `${this.emoji} ${this.name} x ${this.quantity} = €${this.getTotalPrice()}`
    }
}

const cart = []

function addToCart(itemId, menuArray) {
    // Find the item in the menuArray
    const item = menuArray.find(food => food.id === Number(itemId))

    if(item) {
        // Check if the item is already in the cart
        const existingItem = cart.find(cartItem => cartItem.id === item.id)

        if(existingItem) {
            existingItem.increaseQuantity()
        } else {
            const {id, name, price, emoji} = item
            cart.push(new CartItem(id, name, price, emoji))
        }

        console.log(cart.map(item => item.toString()))
        renderCart()
    }
}

function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(food => food.id === Number(itemId))

    if(itemIndex !== -1) {
        const item = cart[itemIndex]

        if(!item.decreaseQuantity()) {
            cart.splice(itemIndex, 1)
        }
    }

    renderCart()
}

function completeOrderClick() {
    console.log('complete payment click')
}

document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container')

    if(cartContainer) {
        cartContainer.addEventListener('click', (event) => {
            if(event.target.dataset.removeItem) {
                const itemId = event.target.dataset.removeItem
                removeFromCart(itemId)
            } 
            else if (event.target.id === 'payment-btn') {
                completeOrderClick()
            }
        })
    }
})



export {CartItem, cart, addToCart, removeFromCart}

