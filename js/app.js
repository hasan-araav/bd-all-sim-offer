// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','contentful'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
})


.controller('BlinkCtrl', function( $scope, $http, $ionicLoading ) {

  // Show loading
  $ionicLoading.show({
    hideOnStateChange: true,
    noBackdrop: true
  });


  // Get the data from api
  $http.get('http://hasan-uj-jaman.net/bdsimofferapp/api/blink')
    .success(function(response){
      $scope.offers = response;
      console.log(response);
      $ionicLoading.hide();
    })
    .error(function(response, status) {
      console.log(status + response);
      $ionicLoading.hide();
      alert("No Internet Connection") ;
    })

	// Hide Ionic Loading When Back Button Pressed
	document.addEventListener('backbutton', function(){
		$ionicLoading.hide();
	})

   // Show Ads when ionic leaves
   $scope.$parent.$on('$ionicView.beforeLeave', function(e) {
        admob.showInterstitialAd();
    });

})

.controller('BlinkOfferCtrl', function( $scope, $http, $stateParams, $ionicLoading ) {

  // Show loading
  $ionicLoading.show({
    hideOnStateChange: true,
    noBackdrop: true
  });


  // Get data from api
  $http.get('http://hasan-uj-jaman.net/bdsimofferapp/api/blink/'+$stateParams.nid)
    .success(function(response){
      $scope.offer = response;
      console.log($scope.offer);
      $ionicLoading.hide();
    })
    .error(function(response, status) {
      console.log(status + response);
      $ionicLoading.hide();
      alert("No Internet Connection");
    })

})


.controller('RobiOfferCtrl', function( $scope, $http, $ionicLoading ) {
  // Show loading
  $ionicLoading.show({
    hideOnStateChange: true,
    noBackdrop: true
  });


  // Get data from api
  $http.get('http://hasan-uj-jaman.net/bdsimofferapp/api/robi')
    .success(function(response){
      $scope.offers = response;
      console.log($scope.offers);
      $ionicLoading.hide();
    })
    .error(function(response, status) {
      console.log(status + response);
      $ionicLoading.hide();
      alert("No Internet Connection") ;
    })


	// Hide Ionic Loading When Back Button Pressed
	document.addEventListener('backbutton', function(){
		$ionicLoading.hide();
	})


    // Show Ads when ionic leaves
   $scope.$parent.$on('$ionicView.leave', function(e) {
        admob.showInterstitialAd();
    });
})


.controller('RobiOfferDetailCtrl', function( $scope, $http, $stateParams, $ionicLoading ) {

  // Show loading
  $ionicLoading.show({
    hideOnStateChange: true,
    noBackdrop: true
  });


  // Get data from api
  $http.get('http://hasan-uj-jaman.net/bdsimofferapp/api/robi/'+$stateParams.nid)
    .success(function(response){
      $scope.offer = response;
      console.log($scope.offer);
      $ionicLoading.hide();
    })
    .error(function(response, status) {
      console.log(status + response);
      $ionicLoading.hide();
      alert("No Internet Connection");
    })

})

.controller('AirtelCtrl', function( $scope, $http, $ionicLoading ) {

  // Show loading
  $ionicLoading.show({
    hideOnStateChange: true,
    noBackdrop: true
  });


  // Get data from api
  $http.get('http://hasan-uj-jaman.net/bdsimofferapp/api/airtel')
    .success(function(response){
      $scope.offers = response;
      console.log($scope.offers);
      $ionicLoading.hide();
    })
    .error(function(response, status) {
      console.log(status + response);
      $ionicLoading.hide();
      alert("No Internet Connection") ;
    })

	// Hide Ionic Loading When Back Button Pressed
	document.addEventListener('backbutton', function(){
		$ionicLoading.hide();
	})


    // Show Ads when ionic leaves
   $scope.$parent.$on('$ionicView.leave', function(e) {
        admob.showInterstitialAd();
    });
})

.controller('AirtelOfferDetailCtrl', function( $scope, $http, $stateParams, $ionicLoading ) {

  // Show loading
  $ionicLoading.show({
    hideOnStateChange: true,
    noBackdrop: true
  });


  // Get data from api
  $http.get('http://hasan-uj-jaman.net/bdsimofferapp/api/airtel/'+$stateParams.nid)
    .success(function(response){
      $scope.offer = response;
      console.log($scope.offer);
      $ionicLoading.hide();
    })
    .error(function(response, status) {
      console.log(status + response);
      $ionicLoading.hide();
      alert("No Internet Connection");
    })

})

.controller('GpCtrl', function( $scope, $http, $ionicLoading ) {

  // Show loading
  $ionicLoading.show({
    hideOnStateChange: true,
    noBackdrop: true
  });


  // Get data from api
  $http.get('http://hasan-uj-jaman.net/bdsimofferapp/api/gp')
    .success(function(response){
      $scope.offers = response;
      console.log($scope.offers);
      $ionicLoading.hide();
    })
    .error(function(response, status) {
      console.log(status + response);
      $ionicLoading.hide();
      alert("No Internet Connection") ;
    })

	// Hide Ionic Loading When Back Button Pressed
	document.addEventListener('backbutton', function(){
		$ionicLoading.hide();
	})


   // Show Ads when ionic leaves
   $scope.$parent.$on('$ionicView.leave', function(e) {
        admob.showInterstitialAd();
    });
})

.controller('GpOfferDetailsCtrl', function( $scope, $http, $stateParams, $ionicLoading ) {

  // Show loading
  $ionicLoading.show({
    hideOnStateChange: true,
    noBackdrop: true
  });


  // Get data from api
  $http.get('http://hasan-uj-jaman.net/bdsimofferapp/api/gp/'+$stateParams.nid)
    .success(function(response){
      $scope.offer = response;
      console.log($scope.offer);
      $ionicLoading.hide();
    })
    .error(function(response, status) {
      console.log(status + response);
      $ionicLoading.hide();
      alert("No Internet Connection");
    })

})


.controller('TeletalkCtrl', function( $scope, $http, $ionicLoading ) {
  // Show loading
  $ionicLoading.show({
    hideOnStateChange: true,
    noBackdrop: true
  });


  // Get data from api
  $http.get('http://hasan-uj-jaman.net/bdsimofferapp/api/ttalk')
    .success(function(response){
      $scope.offers = response;
      console.log($scope.offers);
      $ionicLoading.hide();
    })
    .error(function(response, status) {
      console.log(status + response);
      $ionicLoading.hide();
      alert("No Internet Connection") ;
    })

	// Hide Ionic Loading When Back Button Pressed
	document.addEventListener('backbutton', function(){
		$ionicLoading.hide();
	})

   // Show Ads when ionic leaves
   $scope.$parent.$on('$ionicView.leave', function(e) {
        admob.showInterstitialAd();
    });
})

.controller('TeletalkOfferDetails', function( $scope, $http, $stateParams, $ionicLoading ) {

  // Show loading
  $ionicLoading.show({
    hideOnStateChange: true,
    noBackdrop: true
  });


  // Get data from api
  $http.get('http://hasan-uj-jaman.net/bdsimofferapp/api/ttalk/'+$stateParams.nid)
    .success(function(response){
      $scope.offer = response;
      console.log($scope.offer);
      $ionicLoading.hide();
    })
    .error(function(response, status) {
      console.log(status + response);
      $ionicLoading.hide();
      alert("No Internet Connection");
    })

})

// Free Internet Ctrl
.controller('FreeInternetCtrl', function( $scope, $http, $ionicLoading ) {

  // Show loading
  $ionicLoading.show({
    hideOnStateChange: true,
    noBackdrop: true
  });


  // Get data from api
  $http.get('http://hasan-uj-jaman.net/bdsimofferapp/api/freeInternet')
    .success(function(response){
      $scope.offers = response;
      console.log($scope.offers);
      $ionicLoading.hide();
    })
    .error(function(response, status) {
      console.log(status + response);
      $ionicLoading.hide();
      alert("No Internet Connection") ;
    })

	// Hide Ionic Loading When Back Button Pressed
	document.addEventListener('backbutton', function(){
		$ionicLoading.hide();
	})

   // Show Ads when ionic leaves
   $scope.$parent.$on('$ionicView.leave', function(e) {
        admob.showInterstitialAd();
    });
})

.controller('FreeInternetDetailsCtrl', function( $scope, $http, $stateParams, $ionicLoading ) {

  // Show loading
  $ionicLoading.show({
    hideOnStateChange: true,
    noBackdrop: true
  });


  // Get data from api
  $http.get('http://hasan-uj-jaman.net/bdsimofferapp/api/freeInternet/'+$stateParams.nid)
    .success(function(response){
      $scope.offer = response;
      console.log($scope.offer);
      $ionicLoading.hide();
    })
    .error(function(response, status) {
      console.log(status + response);
      $ionicLoading.hide();
      alert("No Internet Connection");
    })

})

.controller('CategoryCtrl', function($scope, $stateParams, $ionicLoading, contentful) {
  // Show loading
  // $ionicLoading.show({
  //   hideOnStateChange: true,
  //   noBackdrop: true
  // });

// Setup categorywise page title
  $scope.category_name = $stateParams.cat_name;
  switch ($stateParams.cat_name) {
    case 'blink':
      $scope.category_title = 'বাংলালিংক';
      break;
    case 'robi':
      $scope.category_title = 'রবি';
      break;
    case 'teletalk':
      $scope.category_title = 'টেলিটক';
      break;
    case 'gp':
      $scope.category_title = 'জিপি';
      break;
    case 'freeInternet':
      $scope.category_title = 'ফ্রি ইন্টারনেট';
      break;
    case 'mobileRates':
      $scope.category_title = 'মোবাইল';
      break;
    default:
      $scope.category_title = 'Default Title';
  }

  // fetch data from api
  // Get all entries
    contentful
      .entries()
      .then(

        // Success handler
        function(response){
          $scope.offers = response.data.items;
          console.log($scope.offers);
        },

        // Error handler
        function(response){
          console.log('Oops, error ' + response.status);
        }
      );

  // Hide Ionic Loading When Back Button Pressed
	// document.addEventListener('backbutton', function(){
	// 	$ionicLoading.hide();
	// })

   // Show Ads when ionic leaves
  //  $scope.$parent.$on('$ionicView.leave', function(e) {
  //       admob.showInterstitialAd();
  //   });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, contentfulProvider) {

// Set contentfulProvider
  contentfulProvider.setOptions({
        space: 'wtecghydq0vs',
        accessToken: '75854f03258544f0ff3202c7af0a88e6090b1f0d227c34787272a7dcff7dab73'
    });

// Tab Positon
  $ionicConfigProvider.tabs.position('bottom');

  $stateProvider

  // Main Menus
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('home2', {
      url: '/home',
      templateUrl: 'templates/home.html'
    })
    // Banglalink Menu
    .state('banglalink', {
      url: '/banglalink',
      templateUrl: 'templates/banglalink.html',
      controller: 'BlinkCtrl'
    })
    // Banglalink Details Menu
    .state('banglalinkOfferDetails', {
      url: '/banglalink/details/:nid',
      templateUrl: 'templates/banglalinkOfferDetails.html'
    })
    // Robi menu
    .state('robi', {
      url: '/robi',
      templateUrl: 'templates/robi.html'
    })
    // Robi Details Menu
    .state('RobiOfferDetail', {
      url: '/robi/details/:nid',
      templateUrl: 'templates/robiDetails.html'
    })
    // Airtel Menu
    .state('airtel', {
      url: '/airtel',
      templateUrl: 'templates/airtel.html'
    })
    // Airtel Details Menu
    .state('airtelOfferDetails', {
      url: '/airtel/details/:nid',
      templateUrl: 'templates/airtelOfferDetails.html'
    })
    // GP menu
    .state('gp', {
      url: '/gp',
      templateUrl: 'templates/gp.html'
    })
    // GP details Menu
    .state('gpOfferDetails', {
      url: '/gp/details/:nid',
      templateUrl: 'templates/gpOfferDetails.html'
    })
    // Teletalk menu
    .state('teletalk', {
      url: '/teletalk',
      templateUrl: 'templates/teletalk.html'
    })
    // Teletalk Details Menu
    .state('teletalkOfferdetails', {
      url: '/ttalk/details/:nid',
      templateUrl: 'templates/ttalkOfferDetails.html'
    })
    // FreeInternet menu
    .state('freeInternet', {
      url: '/freeInternet',
      templateUrl: 'templates/freeInternet.html'
    })
    // FreeInternet Details Menu
    .state('freeInternetDetailsMenu', {
      url: '/freeInternet/details/:nid',
      templateUrl: 'templates/freeInternetDetails.html'
    })

    .state('Category', {
      url: '/category/:cat_name',
      templateUrl: 'templates/cat.html',
      controller: 'CategoryCtrl'
    })


    $urlRouterProvider.otherwise('/');
})
