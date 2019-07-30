<h1>Fundamentals of Angular </h1>

<ul>WHAT ARE THE FUNDAMENTALS OF ANGULAR?
<li>MVC Scaffolding</li>
<li>HOW TO GET STARTED</li>	
<li>Module</li>
<li>Controller</li>
<li>Directives</li>
<li>Services</li>
<li>CUSTOM SERVICES</li>
<li>Routing</li>
<li>Testing/Debugging<li>
</ul>

<h3>ANGULAR JS: MVC SCAFFOLDING</h3>
angularProject
		Images
		Scripts
			ADD ANGULAR FILES/BOOTSTRAP/CSS/JS/ect
		Modules
		Controllers
		Views
		

<h3>How to get Started working with AngularJS</h3>
1st in your opening html tag add the attribute: ng-app="[the name of your module that you want to call here]"
2nd angular file to header : script src=https://code.angularjs.org/1.7.0/angular.js
3rd where you want to insert the angular functionality add : ng-controller=[the name of your controller here]

<h3>AngularJS: working with Modules </h3>
Create a .js file and name your module, be sure that the module is the same name as you called it in your opening html tag

add:
"use strict";
var app = angular.module("[the module name hear]", []);


<h3>AngularJS: working with Controllers</h3>
create a .js file for your controller.  
Make sure to insert the ng-controller directive in the html tag you want your angular functionality.

Controllers can be wrapped in ieffys like seen below to call on load and avoid global variables:

"use strict";
(function () {
app.controller('[the controller name here]',
    function ($[the services you will use here], [any custome services here ... no $ symbol]) {
	 ....do something

  
    });
})();

**** note I used app.controller in line 46 to declare my controller, because my variable was named app when declaring my module...use the same variable...do not declare again or it will override your previous one

<h3>AngularJS: directives</h3>

These are some directives you can use like attributes in your html tags 
Ng-app: used when calling in modules;
Ng-class:
Ng-disabled:
Ng-if:
Ng-keypress:
Ng-mouseleave:
Ng-repeat: for tables and looping through stuff
Ng-bind:
Ng-click:
Ng-focus: 
Ng-include: for other files (ng-include src: add image link)


Ng-keyup:
Ng-mousemove:
Ng-style:
Ng-blur:
Ng-copy:
Ng-hide:
Ng-init:
Ng-model: for inserting in select for pipe filter value;
Ng-mouseover:
Ng-switch:
Ng-change:
Ng-dblclick:
Ng-href:
Ng-keydown:
Ng-mouseenter:
Ng-paste:
Ng-transclude:



example:
div ng-controller="MainController"
        use{{}} these to insert angular variables (like $scope.username = username)
        form name="findUser"
            <input type="search" placeholder="Find User" ng-model="username"/>
            <input type="submit" value="search" ng-click="search()">
            /form
           {{username}}
    /div



example custom directive:
https://stackoverflow.com/questions/26611159/extending-a-3rd-party-angular-directive-and-changing-its-template

files: slider.html, customDirective.js




<h3>AngularJS: working with Services </h3>

files: person.html, person.js

<h3>Customizing your own service with AngularJS</h3>

module.js, mainController.js, github.js

<h3> AngularyJS: Routing</h3>

module.js

<h3>Testing/Debugging your project </h3>

