class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(itemId) {
      this.items = this.items.filter((item) => item.id !== itemId);
    }
  
    updateItemQuantity(itemId, quantity) {
      const item = this.getItemById(itemId);
      if (item) {
        item.quantity = quantity;
      }
    }
  
    getItemById(itemId) {
      return this.items.find((item) => item.id === itemId);
    }
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  
    clearCart() {
      this.items = [];
    }
  }
  