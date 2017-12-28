angular.module('shoppingApp').controller('cartController', function($scope, ServiceCart, $http){
	console.log("tout va bien de view Cart");

//display the collection of items
// This is temporarilly put in the cart controller for trial.
// later on it will come from the server
	// var itemCollection = [
	// 	{itemId: "1", itemName: "Charlotte aux poires", itemImage: "", itemDescription: "bla bla bla", itemPrice: 20},
	// 	{itemId: "2", itemName: "Forêt noire", itemImage: "", itemDescription: "bla bla bla", itemPrice: 25},
	// 	{itemId: "3", itemName: "Tarte aux fraises", itemImage: "",itemDescription: "bla bla bla", itemPrice: 30},
	// 	{itemId: "4", itemName: "Tiramisu", itemImage: "",itemDescription: "bla bla bla", itemPrice: 25},
	// 	{itemId: "5", itemName: "Cheese cake", itemImage: "",itemDescription: "bla bla bla", itemPrice: 45}
	// ];
	$scope.itemCollection = ServiceCart.itemCollection;

	//add items in a cart

	$scope.cart = ServiceCart.cart;
	$scope.total = ServiceCart.total;
	$scope.setTotalPrice = ServiceCart.setTotalPrice;
	$scope.removeItemCart = ServiceCart.removeItemCart;
	$scope.increaseQty = ServiceCart.increaseQty;
	$scope.decreaseQty = ServiceCart.decreaseQty;
	// $scope.postcart = _postCart;


	//la function _postCart sera appelée lorsqu'on l'utilisateur est connecté et qu'il rempli un panier
// 	function _postCart(){
// 		//je ne sais pas comment identifié que l'utilisateur est connecté,
// 		//peut être faut il crée un statut renvoyé par le serveur?
// 		if ($scope.cart)
// 		{
// 			//création de l'objet userCart
// 			userCart = $scope.cart;
//
// 			// on passe l'objet au serveur
// 			$http.post('http://localhost:3501/postcart', userCart).then(function(response){
// 				console.log('here is my post response for _postCart', response);
// 			});
// };
// };
});
