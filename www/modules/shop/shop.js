// Module Route(s)
DevAAC.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/shop/offers', {
        templateUrl: PageUrl('shop/offers'),
        controller: 'ShopController'
    });
}]);

// Module Controller(s)
DevAAC.controller('ShopController', ['$scope', '$routeParams', 'Shop',
    function($scope, $routeParams, Shop) {
	$scope.offers = Shop.query(function(){
            $scope.loaded = true;
        });
    }
]);

// Module Factories(s)
DevAAC.factory('Shop', ['$resource',
    function($resource){
        return $resource(ApiUrl('shop/offers/:id'), {}, {
            get: { cache: false },
            query: { isArray: true, cache: false }
        });
    }
]);
