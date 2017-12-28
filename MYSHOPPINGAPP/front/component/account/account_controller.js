angular.module('shoppingApp').controller('accountController', function($scope, $http, $state){
	console.log("tout va bien de view create account");

	var newUser = '';
	var username = '';
	var email = '';
	var password = '';

	$scope.createNewUser = _createNewUser;
	$scope.username = username;
	$scope.email = email;
	$scope.password = password;


	//la function _createNewUser sera appelée lorsqu'on clique sur le bouton 'create account'
	//dans la account_view
	function _createNewUser(){
		//on pourra aussi vérifier que le username et le mail n'existent pas déjà
		if ($scope.username && $scope.email && $scope.password && $scope.cpassword
			&& $scope.password == $scope.cpassword)
		{
			//création de l'objet newUser
			newUser = {
			username: $scope.username,
			email: $scope.email,
			password : $scope.password
			}

			//on passe l'objet au serveur
			$http.post('http://localhost:3501/create-account', newUser).then(function(response){
				console.log('here is my post response for _createNewUser', response.data);

			});

			//on pourrait faire apparaitre une alerte 'Your account has been well created'

			//redirection vers la view log
			$state.go('log');

		} else {

			//on pourrait faire apparaitre une alerte 'Your account could not be created,
			//please enter valide data'
			console.log ('account creation status: account not created, invalid datas');

		}
	}
});
