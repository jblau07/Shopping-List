class ShoppingList {
  constructor(items) {
    this.items = [];

  }
  addItem(x) {
    if (x instanceof ShoppingListItem) {
      this.items.push(x)
    } else {
      throw new error;
    }
  }
  }