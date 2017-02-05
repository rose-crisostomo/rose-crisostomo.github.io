angular.module('SvgMapApp').directive('svgMap', ['$compile', function ($compile) {
	return {
		restrict: 'A',
		templateUrl: 'img/Blank_US_Map.svg',
		link: function (scope, element, attrs) {

		}
	}
}]);

angular.module('SvgMapApp').directive('region', ['$compile', function ($compile) {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope, element, attrs) {
			scope.elementId = element.attr("id");
			scope.regionClick = function () {
                // console.log(scope.elementId);
            };
            element.attr("ng-mouseenter", "regionClick()");
            element.removeAttr("region");
            $compile(element)(scope);
        }
    }
}]);

angular.module('SvgMapApp').directive('searchText', ['$compile', function ($compile) {
	return {
		restrict: "A",
		replace: true,
		require: "^ngModel",
		scope: false,
		link: function (scope, element, attr, ngModel) {

			var states = ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL",
			"IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM",
			"NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA",
			"WA", "WV", "WI", "WY"];


			element.on("input propertychange", function () {
				var search = ngModel.$viewValue.toUpperCase();

				states.forEach(function(element) {
					var region = angular.element( document.querySelector( '#' + element ) );

					if (element.indexOf(search) > -1 && search.length > 0) {
						scope.found += 1;
						region.addClass("hover");
					} else {
						if (region.hasClass("hover"))
							region.removeClass("hover");
					}
				});
			});

		}
	}
}]);