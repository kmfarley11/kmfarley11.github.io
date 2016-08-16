// set up angular module
angular.module('myEfolio',[])
.controller('EPorfolioController', ['$scope', function ($scope){
	// available vals / functions for views
	$scope.selected = 'home';
	$scope.newSelection = function(e){
		var selection = e.originalEvent.currentTarget.attributes.link;
		$scope.selected = selection.value;
		$(".active-link").removeClass("active-link");
		$(e.originalEvent.currentTarget).addClass("active-link");
	};
}])
// custom directive(s) to template html separately
	// using the Url like the following requires some sort of hosting 
	// 	(cannot just open project/ html files in browser)
	// run python -m http.server 8000 --bind 127.0.0.1 in app folder to work properly locally
.directive('myView', function() {
	return {
		template: 'View: {{selected}}'
	};
})
.directive('homeView', function() {
	return {
		templateUrl: 'Views/home.html'
	};
})
.directive('aboutView', function() {
	var url = 'Views/about.html';
	// set template to load different content if browsing on a mobile platform
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
		url = 'Views/about-mobile.html';
	return {
		templateUrl: url
	};
})
.directive('contactView', function() {
	return {
		templateUrl: 'Views/contact.html'
	};
});