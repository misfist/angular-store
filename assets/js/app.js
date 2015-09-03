(function(){
    var app = angular.module('store', ['store-products']);

    console.log( 'app.js loaded' );

    app.config( function( $locationProvider ) {

        // If you get 'Error: $location:nobase $location in HTML5 mode requires a tag to be present!'
        // https://docs.angularjs.org/error/$location/nobase
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });

        $locationProvider.html5Mode( true );

    } );

    // Filter enables you to use ng-html-bind without getting $sce:unsafe
    // http://stackoverflow.com/questions/18340872/how-do-you-use-sce-trustashtmlstring-to-replicate-ng-bind-html-unsafe-in-angu
    app.filter( 'trusted', function( $sce ) {

        return $sce.trustAsHtml;

    } );

    /*
    * Models
    */


    /*
    * Controllers
    */
    app.controller( 'StoreController', ['$http', function($http) {
            var store = this;
            
            store.products = [];
    
            $http.get('data/products.json').success( function(data) {
                store.products = data;
            });
    
        }] );

    // moved into productPanel directive
    // app.controller( 'TabController'  );

    // moved into productGallery directive
    // app.controller( 'GalleryController' );

    app.controller( 'ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push( this.review );
            // Clear review
            this.review = {};
        }

    } );

    /*
    * Directives
    */

    // moved product-related directives to assets/js/products.js
 

})();