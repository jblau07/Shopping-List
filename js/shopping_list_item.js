class ShoppingListItem {

  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }
  check() {
    this.is_done = true;
  }
  uncheck() {
    this.is_done = false;
  }
  render() {
    // let liHTML = document.createElement("span");
    // liHTML.innerHTML = [name];

    
    // let liWrap = document.createElement("li")
    // liWrap.innerHTML = "slsf"
    // // liWrap.className = completed_[is_done];
    
    // return liWrap;
  }
}