(function() {
  angular.module('apiKoombeaProfiles',[]);

  angular
    .module('apiKoombeaProfiles')
    .controller('KoombeaProfilesCtrl', KoombeaProfilesCtrl);

    KoombeaProfilesCtrl.$inject = ['$http'];
    
    function KoombeaProfilesCtrl($http){
      var store = this;
      store.contacts = [];
      $http.get('http://localhost:3000/profiles?token=1234').success(function(data) {
        store.contacts = data;
        console.log(store.contacts);
      });
    }; 

})();