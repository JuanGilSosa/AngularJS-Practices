var app = angular.module("App", [])
app.controller("Controller", function ($scope) {
   $scope.nombre = "Alicia";
   $scope.apellido = "Gamarra";
   $scope.edad = 20; 
});