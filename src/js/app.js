(function(){
    var app = angular.module('store', ['store-products']);

    console.log( 'app.js loaded' );

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