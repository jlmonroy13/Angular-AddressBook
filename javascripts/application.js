(function() {
  angular.module('apiKoombeaProfiles',[]);

  angular
    .module('apiKoombeaProfiles')
    .controller('KoombeaProfilesCtrl', KoombeaProfilesCtrl);
    KoombeaProfilesCtrl.$inject = ['$http'];
    function KoombeaProfilesCtrl($http){
      var store = this;
      store.contacts = [];
      store.modal = false;
      $http.get('http://localhost:3000/profiles?token=1234').success(function(data) {
        store.contacts = data;
        console.log(store.contacts);
      });
      store.getProfile = function(data) {
        store.actualProfile = data;
        store.openModal();
      };
      store.openModal = function() {
        store.modal = true;
      };
      store.closeModal = function() {
        store.modal = false;
      };
    }; 
})();