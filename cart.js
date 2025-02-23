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
    }
}

export {CartItem, cart, addToCart}

