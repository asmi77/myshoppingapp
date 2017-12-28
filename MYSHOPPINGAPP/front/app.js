angular.module('shoppingApp', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages',]).run(function(){
	console.log('my App is ready!');

});


//set a service that will put the products into the cart
angular.module('shoppingApp').factory('ServiceCart', function(){
	var itemCollection = [
		{itemId: "1", itemName: "Gâteau à l'anAnas", itemImage: "", itemDescription: "bla bla bla", itemPrice: 20},
		{itemId: "2", itemName: "Galette à l'anAnas", itemImage: "", itemDescription: "bla bla bla", itemPrice: 25},
		{itemId: "3", itemName: "Tarte à l'anAnas", itemImage: "",itemDescription: "bla bla bla", itemPrice: 30},
		{itemId: "4", itemName: "Tiramisu à l'anAnas", itemImage: "",itemDescription: "bla bla bla", itemPrice: 25},
		{itemId: "5", itemName: "Cake à l'anAnas", itemImage: "",itemDescription: "bla bla bla", itemPrice: 45},
		{itemId: "6", itemName: "anAnas flambé", itemImage: "",itemDescription: "bla bla bla", itemPrice: 45},
		{itemId: "7", itemName: "Charlotte à l'anAnas", itemImage: "",itemDescription: "bla bla bla", itemPrice: 35},
		{itemId: "8", itemName: "Cupcake à l'anAnas", itemImage: "",itemDescription: "bla bla bla", itemPrice: 40},
	];

	var cart = [];
	var total = 0;

	//function _addToCart() to add the item to the cart upon clicking on "add to cart button"
	var addToCart = function _addToCart(selectedItem){
		if(selectedItem) {
		cart.push({
		itemName: selectedItem.itemName,
		itemImage: selectedItem.itemImage,
		itemPrice: selectedItem.itemPrice,
		itemQty: 1,
		itemTotalPrice: selectedItem.itemPrice
		});
		console.log('my cart is', cart);
		}
	};

	//if there is an item in the cart, we have the ability to remove it by cliking
	var removeItemCart = function _removeItemCart(itemCart){
			if(itemCart){
			cart.splice(cart.indexOf(itemCart), 1);
			total -= itemCart.itemTotalPrice;
			}
		}
	//array.splice(2, 1);
	// On retire 1 élément situé à l'indice 2

	//if there is an item in the cart, we have the ability to increase qty one by one by clicking
	function _increaseQty(itemCart){
		console.log('je suis ici', itemCart);
		if(itemCart){
			itemCart.itemQty += 1;
			itemCart.itemTotalPrice = itemCart.itemQty*itemCart.itemPrice;
		}
	}

	//if there is an item in the cart, we have the ability to decrease qty one by one by clicking
	var decreaseQty = function _decreaseQty(itemCart){
		if(itemCart){
			itemCart.itemQty -= 1;
			itemCart.itemTotalPrice = itemCart.itemQty*itemCart.itemPrice;
		}
	}

	var setTotalPrice = function _setTotalPrice(){
		sum = 0;
		var i = 0;
		for (i = 0; i < cart.length; i++){
			itemCart = cart[i];
			sum += (itemCart.itemQty*itemCart.itemPrice);
			}
			return sum;
		}
	// _setTotalPrice();

	return {
		addToCart: addToCart,
		removeItemCart: removeItemCart,
		increaseQty: _increaseQty,
		decreaseQty: decreaseQty,
		setTotalPrice: setTotalPrice,
		itemCollection: itemCollection,
		cart: cart,
		total: total
	}

});
