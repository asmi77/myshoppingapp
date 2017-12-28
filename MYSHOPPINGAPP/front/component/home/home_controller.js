angular.module('shoppingApp').controller('homeController', function($scope, ServiceCart, $http){
	//
	// var itemCollection = [
	// 	{itemId: "1", itemName: "Charlotte aux poires", itemImage: "", itemDescription: "bla bla bla", itemPrice: 20},
	// 	{itemId: "2", itemName: "Forêt noire", itemImage: "", itemDescription: "bla bla bla", itemPrice: 25},
	// 	{itemId: "3", itemName: "Tarte aux fraises", itemImage: "",itemDescription: "bla bla bla", itemPrice: 30},
	// 	{itemId: "4", itemName: "Tiramisu", itemImage: "",itemDescription: "bla bla bla", itemPrice: 25},
	// 	{itemId: "5", itemName: "Cheese cake", itemImage: "",itemDescription: "bla bla bla", itemPrice: 45},
	// 	{itemId: "5", itemName: "Cheese cake", itemImage: "",itemDescription: "bla bla bla", itemPrice: 45},
	// 	{itemId: "5", itemName: "Cheese cake", itemImage: "",itemDescription: "bla bla bla", itemPrice: 45},
	// ];

	$scope.itemCollection = ServiceCart.itemCollection;
	console.log("tout va bien ICI view Home", $scope.itemCollection);
	$scope.addToCart = ServiceCart.addToCart;
	// $scope.getItemCollection = _getItemCollection;
// display the collection of items
// This is temporarilly put in the home controller for trial.
// later on it will come from the server

	// function _getItemCollection(){
	//
	// 	on récupère l'objet du serveur
	// 	$http.get('http://localhost:3501/create-account').then(function(response){
	// 		console.log('here is my get response for _getItemCollection', response.data.message);
	// 		alert(respose.data.message);
	// 	});
	// 	$scope.itemCollection = response.data;
	// };
	// _getItemCollection();
});
