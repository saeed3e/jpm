hackathon.controller('jobPostingController', ['$scope', '$http', '$rootScope', 'sharedDataService', '$timeout','baseUrl', function($scope, $http, $rootScope, sharedDataService, $timeout,baseUrl) {
    $scope.btnText="Post";
    angular.extend($scope, sharedDataService);

    var pendingPost = JSON.parse(window.localStorage.getItem('pendingPost') || "[]");

    window.addEventListener("online", function(e) {
        console.log('online', pendingPost);
        if (pendingPost.length) {
            for (var i = 0, len = pendingPost.length; i < len; i++) {
                var postParms = pendingPost[0];
                $scope.jobPost(postParms);
                pendingPost.splice(0, 1);
            }
        }
    });

    window.onunload = function() {
        var serialized = JSON.stringify(pendingPost);
        window.localStorage.setItem('pendingPost', serialized);
    }

    $scope.jobPost = function(post, editableStatus,id) {
        $scope.obj.hideLoader = false;
        var params = null;
        if (post) {
            params = post;

        } else {
            params = {
                title: $scope.title,
                description: $scope.description,
                keywords: $scope.keywords,
                exp: $scope.exp + ' Years',
                ctc: $scope.ctc + ' Lakhs',
                industry: $scope.industry,
                userId: sessionStorage.getItem('userId')
            }
        }
        if (!navigator.onLine) {
            pendingPost.push(params);
        } else {
            if (editableStatus) {
                angular.extend(params,{'jobId':id})
                $http.put(baseUrl+'/jobs', params).then(function(resp) {
                    $scope.obj.hideLoader = true;
                    $rootScope.successMessage = "Job edited successfully";
                    $rootScope.succMsg = true;
                    $timeout(function() {
                        $rootScope.succMsg = false;
                    }, 1500)
                }, function() {
                    $scope.obj.hideLoader = true;
                    $rootScope.errorMessage = "Please fill all fields";
                    $rootScope.errMsg = true;
                    $timeout(function() {
                        $rootScope.errMsg = false;
                    }, 3000)
                })
            } else {
                $http.post(baseUrl+'/jobs', params).then(function(resp) {
                    $scope.obj.hideLoader = true;
                    $rootScope.successMessage = "Job posted successfully";
                    $rootScope.succMsg = true;
                    $timeout(function() {
                        $rootScope.succMsg = false;
                    }, 1500)                    
                }, function(resp) {
                    var msg = resp.data? "Please fill all fields":"Opps... Network error";
                    $scope.obj.hideLoader = true;
                    $rootScope.errorMessage = msg;
                    $rootScope.errMsg = true;
                    $timeout(function() {
                        $rootScope.errMsg = false;
                    }, 3000)
                })
            }
        }
    };
}])
