<!DOCTYPE HTML>
<html manifest="config.appcache">
<head>
    <style>
    html{
        overflow-y: scroll;  /*has to be scroll, not auto */
        -webkit-overflow-scrolling: touch;
    }
    </style>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Web-App</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" href="css/material.teal-green.min.css">
    <link href="img/icon-jpm-57.png" rel="apple-touch-icon" />
    <link href="img/icon-jpm-76.png" rel="apple-touch-icon" sizes="76x76" />
    <link href="img/recruiter-icon.png" rel="apple-touch-icon" sizes="120x120" />
    <link href="img/icon-jpm-152.png" rel="apple-touch-icon" sizes="152x152" />
    <link href="img/icon-jpm-180.png" rel="apple-touch-icon" sizes="180x180" />
    <link href="img/icon-jpm-192.png" rel="icon" sizez="192x192" />
    <link href="img/icon-jpm-128.png" rel="icon" sizez="128x128" />
    <link rel="stylesheet" href="css/style_v1.css">
    <link rel="manifest" href="manifest.json">
    <!-- Full Scren -->
    <!-- Iphone -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    
    <!-- Chrome -->
    <meta name="mobile-web-app-capable" content="yes">

    <script src="js/angular.min.js"></script>
    <script src="js/material.min.js"></script>
</head>

<body ng-app="hackathon">
    <!-- Always shows a header, even in smaller screens. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header" ng-controller="gController">
        <header class="mdl-layout__header" ng-class="{'noDrawer': location.path() == '/'}">
            <div class="mdl-layout__header-row">
                <!-- Title -->
                <span class="mdl-layout-title">Job Posting Manager</span>
                <!-- Add spacer, to align navigation to the right -->
                <span class="icon-spinner11" ng-click="clickMe()" ng-class="{'spin': spinClass }"></span>
            </div>
        </header>
        <div class="msgGrn hide" ng-hide="!succMsg"><span class="icon-checkmark"></span>{{successMessage}}</div>
        <div class="msgErr hide" ng-hide="!errMsg"><span class="icon-cross"></span>{{errorMessage}}</div>
        <div class="mdl-progress mdl-js-progress mdl-progress__indeterminate progress-demo is-upgraded" ng-hide="obj.hideLoader" data-upgraded=",MaterialProgress">
            <div class="progressbar bar bar1" style="width: 0%;"></div>
            <div class="bufferbar bar bar2" style="width: 100%;"></div>
            <div class="auxbar bar bar3" style="width: 0%;"></div>
        </div>
        
        <div class="mdl-layout__drawer" id="drawerCont">
            <span class="mdl-layout-title">Job Posting Manager</span>
            <nav class="mdl-navigation">
                <a class="mdl-navigation__link" ng-click="switchPages('logout')"><span class="icon-lock"></span> Logout</a>
                <a class="mdl-navigation__link" ng-click="switchPages('jobPosting')"><span class="icon-clip"></span> Post Jobs</a>
                <a class="mdl-navigation__link" ng-click="switchPages('description')"><span class="icon-clipboard"></span> Posted Jobs</a>
                <a class="mdl-navigation__link" ng-click="switchPages('apply')"><span class="icon-checkmark"></span> Apply to Jobs</a>
                
            </nav>
        </div>
        <ng-view></ng-view>
    </div>
   
    <script src="js/angular-route.js"></script>
    <script src="js/angular-messages.js"></script>
    
    <script type="text/javascript" src="app.js"></script>
    <script type="text/javascript" src="controller/loginController.js"></script>
    <script type="text/javascript" src="controller/jobPostingController.js"></script>
    <script type="text/javascript" src="controller/jobDescriptionController.js"></script>
    <script type="text/javascript" src="controller/jobApplyController.js"></script>
    <script type="text/javascript">
        function onUpdateReady() {
            alert('hey! found new version')
          window.location.reload();
        }
        window.applicationCache.addEventListener('updateready', onUpdateReady);
        if(window.applicationCache.status === window.applicationCache.UPDATEREADY) {
          onUpdateReady();
        }
    </script>
    <!-- MDL Spinner Component -->
    
    <!-- Push notification -->
    <button class="js-push-button" style="display:none"></button>
    
    <script src="config.js"></script>
    <script>var baseUrl='http://192.168.123.77:3000'</script>
    <script src="main_v1.js"></script>
    <script>        
        window.addEventListener("offline", function(e) { window.online = false; });
        window.addEventListener("online", function(e) { window.online = true; });
    </script>
    
</body>

</html>
