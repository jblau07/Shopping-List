// //is a class
var expect = chai.expect;
var shold = chai.should();

describe('ShoppingListItem', function () {
  it('should be a class', function () {
    expect(ShoppingListItem).to.be.a('function')
  });
  
    it('should have a property called "name', function (){
    var tomato = new ShoppingListItem("Tomato");
    tomato.name.should.equal('Tomato');
    });
});