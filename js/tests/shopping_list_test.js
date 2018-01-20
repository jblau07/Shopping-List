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
   expect(firstItem.name).to.equal(firstParam)
  });

  it('should have a property called description', function () {
    expect(firstItem.description).to.equal(secParam);
  });

  it('should have a property called is_done', function() {
    expect(firstItem.is_done).to.equal(false);
  })
});