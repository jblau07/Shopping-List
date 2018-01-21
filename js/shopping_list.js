class ShoppingList {
  constructor(items) {
    this.items = [];

  }
  addItem(x) {
    if (x instanceof ShoppingListItem) {
      this.items.push(x)
    } else {
      throw new Error('parameter not instance of shopping list item');
    }
  }
  removeItem(y) {
    let index = this.items.indexOf(y)
    if (index !== -1 && y instanceof ShoppingListItem) {
      this.items.splice(index, 1)}
    if(!(y instanceof ShoppingListItem)){
      throw new Error('item not found');
    } else if (!y && this.items.length > 0) {
      this.items.splice(this.items.indexOf(this.items.length - 1))
    } else if (index === -1) {
      return false;
  }
}}

// // }
// if(index === -1 || !y instanceof ShoppingListItem){
//   throw new error;
// }else{
//   this.items.splice(index,1);