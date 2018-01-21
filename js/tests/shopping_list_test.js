// //is a class
var expect = chai.expect;
var shold = chai.should();

describe('ShoppingListItem', function () {
let firstParam = 'apple';
let secParam = 'fuji';
let firstItem = new ShoppingListItem(firstParam, secParam);

it('should be a class', function () {
  expect(ShoppingListItem).to.be.a('function')
});

it('should have a property called name', function () {
  expect(firstItem.name).to.be.a('string');
});

it('should have a property called description', function () {
  expect(firstItem.description).to.be.a('string');
});

it('should have a property called is_done', function () {
  expect(firstItem.is_done).to.equal(false);
});

it('should set first argument as the name value', function () {
  expect(firstItem.name).to.equal(firstParam);

});

it('should set second argument as the description value', function () {
  expect(firstItem.description).to.equal(secParam);
});

describe('check', function () {

  it('should have a method called check', function () {
    expect(firstItem.check).to.be.a('function');
  });

  it('should set is_done to true', function () {
    firstItem.check();
    firstItem.is_done.should.equal(true);
  })

  describe('uncheck', function () {
    it('should have a method named uncheck', function () {
      expect(firstItem.uncheck).to.be.a('function')
    });
    it('should set is_done to false', function () {
      firstItem.uncheck();
      firstItem.is_done.should.equal(false);
    })
  })
  describe('render', function () {

    it('should have a method name render', function () {
      expect(firstItem.render).to.be.a('function');
    })
    it('should return a string', function() {
      expect(firstItem.render()).to.be.a('string');
    })

    // it('should be wrapped in li tags', function() {
    //   expect(firstItem.render().nodeName).to.equal('li');
    // })

    it('should contain item name, item description, and set the class to is_done', function (){
      expect(firstItem.render()).to.equal(`<li class="completed_false"><span>apple</span><span>fuji</span></li>`)
    })

  })


})
let firstList = new ShoppingList();

describe('ShoppingList', function () {
  it('should be a class', function () {
    expect(ShoppingList).to.be.a('function')
  });
  it('should have a property called items', function () {
    expect(firstList).to.have.all.keys('items');
  });
  it('should initialize items as an empty array', function () {
    expect(firstList.items).to.be.an('array').that.is.empty;
  })
  describe('addItem', function () {

    it('should have a method named addItem', function () {
      expect(firstList.addItem).to.be.a('function');
    });
    it('should only take one argument', function () {
      firstList.addItem(firstItem);

    });
    it('should only accept an argument thats a shopping list item', function () {
      expect(firstItem instanceof ShoppingListItem).to.equal(true);
      expect(firstList.addItem.bind(firstList, firstItem)).to.not.throw();
    });
    it('should throw an error if a shopping list item is not passed as the argument', function(){
    expect(firstList.addItem.bind(firstList, 'z')).to.throw();

  });
  it('should add the item to the shopping list', function () {
    firstList.addItem(firstItem);
    firstList.items.should.include(firstItem);
  })
})

describe('removeItem', function(){
  
  let tempList = new ShoppingList()
  let tempItem1 = new ShoppingListItem('orange', 'navel')
  let tempItem2 = new ShoppingListItem('peach', 'juicy')
  let notInList = new ShoppingListItem('cat', 'furry')
  beforeEach(function() {
    tempList.items = [tempItem1,tempItem2];
  })
  


  it('should have a method named removeItem', function () {
    expect(tempList.removeItem).to.be.a('function');
  });

  it('should only remove an item that exists in items array', function () {
    expect(tempList.removeItem(notInList)).to.equal(false);
    
  })

  it('should remove the item from the shopping list', function (){
    tempList.removeItem(tempItem1);
    tempList.items.should.not.contain(tempItem1);
  })

  it('should remove the last item if no parameter is given ', function() {
    tempList.removeItem(tempItem1);
    tempList.items.should.contain(tempItem2);
  })
  it('should throw an error if item is not a shopping list item', function(){
    expect(tempList.removeItem.bind(tempList, 'z')).to.throw();
})
})// end describe removeItem

describe('render', function () {
  it('should concatenate string and wrap in ul tags ', function () {
    let item = new ShoppingListItem('apple','fuji');
  })


})








});// end shoppingList
});// end shoppingListItem