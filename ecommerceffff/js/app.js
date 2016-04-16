var app=angular.module("myApp",["ui.router","ngResource","ui.bootstrap"]);
app.config(function($stateProvider,$urlRouterProvider){
$urlRouterProvider.otherwise("/home");
$stateProvider.state("login",{
  url:"/login",
  templateUrl:"pages/login.html",
  controller: "loginCtrl"
}).state("home",{
  url:"/home",
  templateUrl:"pages/home.html",
  controller: "homeCtrl"
})
  .state("article",{
    url:"/article",
    templateUrl:"pages/article.html",
    controller: "articleCtrl"
  }).state("produit/id",{
    url:"/produit",
    templateUrl:"pages/produit.html",
    controller: "produitCtrl"
  }).state("panier",{
    url:"/panier",
    templateUrl:"pages/panier.html",
    controller: "panierCtrl"
  });

});
