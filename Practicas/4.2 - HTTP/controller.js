var app = angular.module("App", []);

app.controller("BodyController", ["$scope","$http", function ($scope, $http){
    
    $scope.info = [];
    $scope.myPost = {};

    $http({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/1/comments"
    }).then(function(arr){
        $scope.info = arr;
    }, function(err){
    });


    $scope.agregarPost = function(){
        $http({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            
        }).then(function(data){
            $scope.info.push($scope.myPost);
            $scope.myPost = {};
        }, function(err){

        })
    }
}]);