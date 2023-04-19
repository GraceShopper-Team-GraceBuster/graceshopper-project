// Define the cart object and its methods
const cart = {
    items: [],

    // Add item to cart
    addItem(name, price, quantity) {
        const item = this.items.find((item) => item.name === name)
        if (item) {
            item.quantity += quantity
        } else {
            this.items.push({ name, price, quantity })
        }
    },

    // Remove item from cart
    removeItem(name) {
        this.items = this.items.filter((item) => item.name !== name)
    },

    // Get the total price of items in the cart
    getTotalPrice() {
        const totalPrice = this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        )
        return totalPrice.toFixed(2)
    },

    // Get the number of items in the cart
    getItemCount() {
        const itemCount = this.items.reduce(
            (total, item) => total + item.quantity,
            0
        )
        return itemCount
    },

    // Empty the cart
    emptyCart() {
        this.items = []
    },
}

function updateCart() {
    const cartList = document.getElementById('cart-list')
    const cartTotal = document.getElementById('cart-total')
    const cartCount = document.getElementById('cart-count')

    // Remove all current cart items
    cartList.innerHTML = ''

    // Add new cart items
    cart.items.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${
            item.quantity
        }`
        cartList.appendChild(li)
    })

    // Update cart total and count
    cartTotal.textContent = cart.getTotalPrice()
    cartCount.textContent = cart.getItemCount()
}

function handleButtonClick(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const name = event.target.dataset.name
        const price = parseFloat(event.target.dataset.price)
        cart.addItem(name, price, 1)
    } else if (event.target.classList.contains('remove-from-cart')) {
        const name = event.target.dataset.name
        cart.removeItem(name)
    } else if (event.target.id === 'empty-cart') {
        cart.emptyCart()
    }
    updateCart()
}

const cartContainer = document.getElementById('cart-container')
cartContainer.addEventListener('click', handleButtonClick)

// Update the cart interface when the page loads
updateCart()

// Add event listener for the cart dropdown
const cartLink = document.getElementById('cart-link')
const cartDropdown = document.getElementById('cart-dropdown')

cartLink.addEventListener('click', (event) => {
    event.preventDefault()
    cartDropdown.classList.toggle('show')
})
