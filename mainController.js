"use strict";


(function () {
app.controller('MainController',
    function ($scope, $log, $location, $anchorScroll, $http, github) {
     
        $scope.search = function (username) {
            $log.info("searching for " + username);
            $http.get('https://api.github.com/users/' + username)
                .then(onComplete, onError);

        }; 
        
        var onComplete = function (data) {
            console.log(data.data);

            
            $scope.data = data.data;
            $http.get($scope.data.repos_url)
                .then(onRepos, onError);

           
           
        };

        


        var onError = function (data) {
            console.log(data);
            $scope.error = 'Could not fetch';
            github.fail;
        };

     

        var onRepos = function (data) {
            $scope.repos = data.data;
             github.success;
          
        };

     
       
  
    });
})();
