
//var app = angular.module('person', []);
app.controller('personObject', ['$scope',
    function ($scope) {

        var person = {
            firstName: "Amanda",
            lastName: "Krummel",
            imageSrc: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg"
        }

        $scope.person = person;
    }]);

