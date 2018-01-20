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
      it('should have a method name render', function() {
        expect(firstItem.render).to.be.a('function');
      })
      // it('should return a string', function() {
      //   expect(firstItem.render()).to.be.a('string');
      // })

      // it('should be wrapped in li tags', function() {
      //   expect(firstItem.render()).to.equal(<li></li>);
      // })
    })

  });
});
let firstList = new ShoppingList();

describe('ShoppingList', function(){
  it('should be a class', function () {
    expect(ShoppingList).to.be.a('function')
  });
  it('should have a property called items', function () {
    expect(firstList).to.have.all.keys('items');
  });
  it('should initialize items as an empty array', function() {
    expect(firstList.items).to.be.an('array');
  })
  describe('addItem', function () {
    let newItem = 'avocado'
    it('should have a method named addItem', function () {
      expect(firstList.addItem).to.be.a('function')
    });
    it('should accept one argument', function() {
      firstList.addItem(newItem);
      firstList.items.should.include(newItem)
    })
  });
})
