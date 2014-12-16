var myService = angular.module('gitService', []);

  myService.controller('gitServiceController', ['$scope', 'gitHubService', function($scope, gitHubService) {
    
    $scope.results = [];


    $scope.fetchData = function() {
      
      gitHubService.getLink( $scope.text ).success(function(data) {
        if (data.items.length>0) {

        
        
        angular.forEach(data.items, function ( users, index) {

          $scope.results.push(users);
          console.log($scope.results);

        });

      } else {
        $scope.error = "true";
      }


      });
      
    
    };


  }]);

  myService.factory('gitHubService', function($http) {
    
    var serviceItem = {};

     
        var url = "http://api.github.com/search/users?";
    

   serviceItem.getLink = function( searchparams ) {
    
        
        return $http.get(url, { params: { 

           q: searchparams, format:"json", order:"asc", per_page: 100

        } });

      };

      return serviceItem;
      
  });
/*===================================================*/
  // Using .service

    // myService.service('gitHubService', function($http) {
        // var url = "http://api.github.com/search/users?";
        // this.getLink = function( searchparams ) {
      //      return $http.get(url, { params: { 

      //      q: searchparams, format:"json", order:"asc", per_page: 100

      //   } });

      // };
      // return this;
      // });
