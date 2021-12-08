var app = angular.module("App", ["LocalStorageModule"]);

app.controller("BodyController", function($scope, localStorageService){
    if(localStorageService.get("todolist")){
        $scope.todolist = localStorageService.get("todolist");
    }else{
        $scope.todolist = [];
    }

    $scope.agregarActividad = function(){
        $scope.todolist.push($scope.activ);
        localStorageService.set("todolist", $scope.todolist);
        $scope.activ = {};
    }
    $scope.limpiarLista = function(){
        $scope.todolist = [];
        localStorageService.set("todolist", $scope.todolist);
    }
});