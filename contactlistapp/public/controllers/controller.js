(function(){
var app = angular.module('demo',[]);

var Appctrl=function($scope,$http){

$http.get('/contactlist').success(function(response)
{
console.log(" i got the data that i requested");
$scope.contacts=response;
});

$scope.addContacts=function()
{
console.log($scope.newuser);
$http.post('/contactlist',$scope.newuser)
		.success(function(response){
				console.log("success");
				if(response.msg&&response.msg.localeCompare("error")==0)
					{alert("duplicate entry");}
				$scope.newuser='';
				$http.get('/contactlist').success(function(response)
{
console.log(" i got the data that i requested");
$scope.contacts=response;
});

		}).error(function(error){
			console.log(error);
		});
};

$scope.removeid=function(id)
{
	console.log(id);
	$http.delete('/contactlist/'+id)
	.success(function(response){
				console.log("success");
				$scope.contacts=response;

		}).error(function(error){
			console.log(error);
		});
};

$scope.edit=function(id)
{
	console.log(id);
	$http.get('/contactlist/'+id)
	.success(function(response){
				console.log(response[0]);
					
				$scope.newuser=response[0];
		}).error(function(error){
			console.log(error);
		});
};
$scope.update=function(id)
{
	console.log(id);
	$http.post('/contactlist/'+id,$scope.newuser)
	.success(function(response){
				console.log("success");
				$scope.contacts=response;
				$scope.newuser='';
		}).error(function(error){
			console.log("error update");
		});
};



};
app.controller('Appctrl',['$scope','$http',Appctrl]);

})();