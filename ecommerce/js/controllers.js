app
.controller("loginCtrl",["$scope","$state","$uibModal",function($scope,$state,$uibModal){
  $scope.login="";
  $scope.pwd="";
  $scope.connect=function(){
    if ($scope.login=="mohamed.jridi@esprit.tn" && $scope.pwd=="med") {
    //  messageBox.error("L'authentification a échoué", "Identifiant ou mot de passe incorrect  . par defaut:  demo/demo");

      $state.go("article");
    }
    else {
      $uibModal.open({
        templateUrl:"pages/modal.html",
        controller:"ModalInstanceCtrl",
        resolve: {

             }
      });
    }

  }
}]).controller("ModalInstanceCtrl", function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };

}).controller("homeCtrl", function ($scope) {

}).controller("articleCtrl", function ($scope) {

}).controller("produitCtrl", function ($scope,$resource) {
  //consomation d'un fichier json
var p= $resource('pcs.json');
$scope.pcs=p.query();
//console.log(user);
}).controller("panierCtrl", function ($scope) {

});
