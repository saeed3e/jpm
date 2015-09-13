hackathon.controller('jobApplyController', ['$scope', '$http', '$location', 'sharedDataService', '$rootScope', '$timeout','baseUrl', function($scope, $http, $location, sharedDataService, $rootScope, $timeout,baseUrl) {
    $scope.clickMe = function(index) {
        if ($scope['detailSectn' + index]) {
            $scope['detailSectn' + index] = false;
        } else {
            $scope['detailSectn' + index] = true;
        }
    }
    $scope.obj.hideLoader = false;

    var getJobs = function() {
        $http.get(baseUrl+'/jobs?userId=55b0e3c5477e52d89d3f510c').then(function(resp) {
            $scope.jobDetails = resp.data;
            $scope.obj.hideLoader = true;
        }, function() {
            $scope.obj.hideLoader = true;
            $rootScope.errorMessage = "Oops.. some error while fetching jobs.";
            $rootScope.errMsg = true;
            $timeout(function() {
                $rootScope.errMsg = false;
            }, 3000)
        })
    }
    getJobs();

    $scope.applyJob = function(id) {
        $scope.obj.hideLoader = false;
        $http.put(baseUrl+'/jobs/applyCount', {
            'jobId': id
        }).then(function(resp) {
            $scope.obj.hideLoader = true;
            $rootScope.successMessage = "Job applied successfully";
            $rootScope.succMsg = true;
            $timeout(function() {
                $rootScope.succMsg = false;
            }, 1500)
        })

    }
}])
