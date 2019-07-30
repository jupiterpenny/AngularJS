"use strict";


var app = angular.module("module", ["ngRoute"]); //    <div ng-view> add to html to implement
   

app.config(function ($routeProvider) {
    $routeProvider
        .when("/main", {
            templateUrl: "main.html",
            controller: "MainController"
        }) // if main is called, go to main....declaring controller here is optional, you don't have to do in both html and here
        .when("/", {
            templateUrl: "person.html",
            controller: "personObject" 
        })//when just index.html is called (landing), go to person

     
        .otherwise({ redirectTo: "main.html" });  // all else go to here
});



