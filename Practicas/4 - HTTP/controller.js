var app = angular.module("App", []);
app.controller("BodyController", ["$scope", "$http", function($scope, $http){
    $scope.request = [];
    $http({
        url:"https://jsonplaceholder.typicode.com/posts",
        method:"GET"
    }).then(function(response){
        $scope.request = response;
    },function(err){
    });
}]);  

