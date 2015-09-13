var hackathon = angular.module('hackathon', [
    'ngRoute',
    'ngMessages'
]).constant('baseUrl', 'http://192.168.123.77:3000');;

hackathon.factory('sharedDataService', function() {
    return {
        'title': '',
        'description': '',
        'keywords': '',
        'industry': '',
        'exp': 0,
        'ctc': 0
    };
});

hackathon.controller('gController', ['$scope', '$location', 'sharedDataService','$rootScope', function($scope, $location, sharedDataService,$rootScope) {
    angular.extend($scope, sharedDataService);
    $scope.obj = {};
    $scope.obj.hideLoader = true;
    $scope.isHide = false;
    $scope.location = $location;

    $scope.switchPages = function(name) {
        var node = angular.element(document.getElementById('drawerCont'))
        if (name == "logout") {
            node.removeClass('is-visible');
            $scope.isHide = true;
            $location.path('/');
            sessionStorage.removeItem('userId');
        } else if (name == "jobPosting") {
            node.removeClass('is-visible');
            $scope.isHide = true;
            $location.path('/jobPosting');
        } else if (name == "description") {
            node.removeClass('is-visible');
            $scope.isHide = true;
            $location.path('/jobDescription');
        } else if (name == "apply") {
            node.removeClass('is-visible');
            $scope.isHide = true;
            $location.path('/jobApply');
        }
    }
    $scope.clickMe = function() {
        //window.location.reload();
        if ($scope.spinClass) {
           $scope.spinClass = false;
        } else {
            $scope.spinClass = true;
        }
    }
}]);

hackathon.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'partials/login.html',
                controller: 'loginController'
            })
            .when('/jobPosting', {
                templateUrl: 'partials/jobPosting.html',
                controller: 'jobPostingController'
            })
            .when('/jobDescription', {
                templateUrl: 'partials/jobDescription.html',
                controller: 'jobDescriptionController'
            })
            .when('/jobApply', {
                templateUrl: 'partials/jobApply.html',
                controller: 'jobApplyController'
            });
    }
]);



hackathon.run(['$rootScope',
    function($rootScope) {
        $rootScope.$on('$viewContentLoaded', function(next, current) {
            componentHandler.upgradeDom();
        });

    }
])
