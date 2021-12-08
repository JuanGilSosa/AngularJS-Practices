var app = angular.module("App", []);

app.controller("Controller", function($scope){
    $scope.nuevaPersona = {};
    $scope.arregloPersonas=[];
    $scope.agregarPersona = function(){
        $scope.arregloPersonas.push($scope.nuevaPersona);
        $scope.nuevaPersona = {};
    }
});