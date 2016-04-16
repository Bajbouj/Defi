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

}).controller("homeCtrl", function ($scope,$resource) {
  var p= $resource('pcs.json');
  $scope.pcs=p.query();


}).controller("articleCtrl", function ($scope) {


}).controller("produitCtrl", function ($scope,$resource) {
  $scope.pc1={marque:"HP",url:"http://www.tunisianet.com.tn/44697-thickbox/pc-portable-hp-pavilion-15-ab209nk-i5-6e-gen-12-go-windows-10-licence-bitdefender-1-an.jpg",
  desc:"Ecran 15.6 HD LED - Processeur Intel Core i7-5500U﻿, up to 3 Ghz, 4 Mo de mémoire cache - Mémoire 8 Go - Disque 1 To - Carte graphique Nvidia GeForce 920M, 2 Go de mémoire dédiée - Graveur DVD - Lecteur de cartes - Wifi - Bluetooth - USB 3.0 - HDMI - Webcam avec Micro - Couleur Rouge - Garantie 2 ans﻿﻿ - Gratuit: Licence Antivirus BitDefender 1 an d'une valeur de 33Dt"
};
  $scope.pc2={marque:"Lenovo",url:"http://www.tunisianet.com.tn/49438-thickbox/pc-portable-thinkpad-t440p-i7-8-go-licence-bitdefender-1-an.jpg",
  desc:"Ecran 14 Full HD﻿ - Processeur Intel Core i7-4710MQ 4è Gén, up to 3.5 Ghz, 6 Mo de mémoire cache - 8 Go de mémoire - Disque 1 To - Carte graphique NVIDIA GeForce GT 730M﻿, 1 Go de mémoire dédiée - Graveur DVD - Lecteur de cartes - Wifi - Bluetooth - HDMI - USB 3.0 - Windows 7 Pro upgrade to Windows 8 Pro﻿ - Garantie 3 ans - Gratuit: Licence Antivirus BitDefender 1 an d'une valeur de 33Dt"};
  $scope.pc4={marque:"Dell",url:"",desc:""};
  $scope.pc1={marque:"HP",url:"",desc:""};
}).controller("panierCtrl", function ($scope) {

});
