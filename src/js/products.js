(function() {
    var app = angular.module( 'store-products', [] );

    console.log( 'products.js loaded' );

    app.directive( 'productTitle', function() {

        return {
            restrict: 'E',
            templateUrl: 'templates/product-title.html'
        };

    } );

    app.directive( 'productDescription', function() {

        return {
            restrict: 'E',
            templateUrl: 'templates/product-description.html'
        };

    } );

    app.directive( 'productPanels', function() {

        return {
            restrict: 'E',
            templateUrl: 'templates/product-panels.html',
            // previously TabController
            controller: function() {
                this.tab = 1;

                this.setTab = function(tab) {
                    console.log( this.tab, tab );
                    this.tab = tab;
                }

                this.isTab = function(tabValue) {
                    return this.tab === tabValue;
                }
            },
            controllerAs: 'panel'
        };

    } );

    app.directive( 'productGallery', function() {

        return {
            restrict: 'E',
            templateUrl: 'templates/product-gallery.html',
            // previously GalleryController
            controller: function() {
                this.current = 0;

                this.setCurrent = function(imageNumber) {
                    this.current == imageNumber || 0;
                }
            },
            controllerAs: 'gallery'
        };

    } );

})();