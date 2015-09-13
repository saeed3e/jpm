hackathon.controller('jobDescriptionController', ['$scope', '$http', '$location', 'sharedDataService', '$rootScope', '$timeout', 'baseUrl', function($scope, $http, $location, sharedDataService, $rootScope, $timeout, baseUrl) {
    $scope.obj.hideLoader = false;
    $scope.clickMe = function(index) {
        if ($scope['detailSectn' + index]) {
            $scope['detailSectn' + index] = false;
        } else {
            $scope['detailSectn' + index] = true;
        }
    }
    var getJobs = function() {
  //      console.log(baseUrl)
        $http.get(baseUrl + '/jobs?userId=55b0e3c5477e52d89d3f510c').then(function(resp) {
            $scope.jobDetails = resp.data;
//            console.log(resp.data);
            $scope.obj.hideLoader = true;
        }, function() {
            $scope.obj.hideLoader = true;
            $rootScope.errorMessage = "Oops!!! There is some error while fetching jobs";
            $rootScope.errMsg = true;
            $timeout(function() {
                $rootScope.errMsg = false;
            }, 3000)
        })
    }
    getJobs();

    $scope.deleteJob = function(id) {
        $scope.obj.hideLoader = false;
        $rootScope.succMsg = false;
        $rootScope.errMsg = false;
        $http.post(baseUrl + '/jobs/delete', {
            'jobId': id
        }).then(function(resp) {
            $scope.obj.hideLoader = true;
            $rootScope.successMessage = "Job deleted successfully";
            $rootScope.succMsg = true;
            $timeout(function() {
                $rootScope.succMsg = false;
            }, 1500)
            getJobs();
        }, function() {
            $scope.obj.hideLoader = true;
            $rootScope.errorMessage = "Oops!!! There is some error while deleting jobs";
            $rootScope.errMsg = true;
            $timeout(function() {
                $rootScope.errMsg = false;
            }, 3000)
        })
    }

    $scope.editJob = function(obj) {
        sharedDataService.title = obj.title;
        sharedDataService.description = obj.description;
        sharedDataService.keywords = obj.keywords;
        sharedDataService.industry = obj.industry;
        sharedDataService.exp = parseInt(obj.exp.split(' ')[0]);
        sharedDataService.ctc = parseInt(obj.ctc.split(' ')[0]);
        sharedDataService.editableStatus = true;
        sharedDataService.id = obj._id;
        sharedDataService.btnText = "Save";
        $location.path('/jobPosting');
    }
}])
