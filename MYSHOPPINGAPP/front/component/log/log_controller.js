angular.module('shoppingApp').controller('logController', function($scope, $state, $http){

	console.log("tout va bien ds view Log");
	var formData = '';
	var email = '';
	var password = '';

	$scope.logIn = _logIn;
	$scope.email = formData.email;
	$scope.password = formData.password;

	//la function _logIn sera appelée lorsque l'utilisateur clique sur le bouton 'log in'
	//de la log_view
	function _logIn(){
		if ($scope.email && $scope.password){

		      formData = {
		        email: $scope.email,
		       	password: $scope.password
		      };
	 	 	//on passe l'objet au serveur
			$http.post('http://localhost:3501/login', formData).then(function(response){

				console.log('here is my post response for _logIn', response);
				});
	 		//redirection vers la view home
	    	$state.go('home');
	  	}else{
	  		//on pourrait faire apparaitre une alerte 'Please provide valid data to access your account,
			console.log ('logIn status: user not logged, invalid datas');
			alert(response.data.message);
	  	}
 	}
});
