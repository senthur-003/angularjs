// 1. Define the module for your app
var app = angular.module('loginApp', []);

// 2. Define the controller
app.controller('loginController', function($scope) {
    // Initialize an empty object to hold user data
    $scope.user = {};

    // 3. Define the function to show the alert
    $scope.showAlert = function() {
        if ($scope.user.username=='admin' && $scope.user.password=='123456') {
            alert('Welcome ! ' + '\nUsername: ' + $scope.user.username );
        } else {
            alert('Please enter valid username and password.');
        }
    };
});