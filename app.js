(function () {
  //protect us from making mistake
  'use strict';
//define main app (.module)
//define view model(.controller)(index.html)[$(scope) reserve for angular]

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Tg";
});


})();
