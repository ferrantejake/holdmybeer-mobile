app.controller('loginCtrl', function($scope, $state){

});

app.controller('homeCtrl', function($scope, $state){

});

app.controller('tasteprofileCtrl', function($scope, $state){
  
});

app.controller('friendsCrtl', function($scope, $state){
  
});

app.controller('settingsCrtl', function($scope, $state){
  
});

app.controller('barcodeScanner', function($scope, $cordovaBarcodeScanner){
	$scope.scanBarcode = function(){
		$cordovaBarcodeScanner.scan().then(function(imageData){
			alert(imageData.text);
			console.log("format " + imageData.format);
		}, function(error){
			console.log("An error happened " + error);
		});
	}
});