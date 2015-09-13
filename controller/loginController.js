hackathon.controller('loginController', ['$scope', '$http', '$location', '$rootScope', '$timeout', 'baseUrl', function($scope, $http, $location, $rootScope, $timeout, baseUrl) {

    $scope.loginSubmit = function() {
        $scope.obj.hideLoader = false;
        $http.post(baseUrl + '/login', {
            username: $scope.username.toLowerCase(),
            password: $scope.password,
        }).then(function(resp) {

            initPushNotification(resp.data.token);
            sessionStorage.setItem('userId', resp.data.token);
            //$rootScope.userId=resp.data.token;
            $scope.obj.hideLoader = true;
            $location.path('/jobPosting');
        }, function() {
            $scope.obj.hideLoader = true;
            $rootScope.errorMessage = "Oops some error in login";
            $rootScope.errMsg = true;
            $timeout(function() {
                $rootScope.errMsg = false;
            }, 3000)
        })
        console.log($scope.username);
        console.log($scope.password);
    }

}])
