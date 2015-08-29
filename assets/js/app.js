(function(){
    var app = angular.module('store', []);

    console.log( 'app.js loaded' );

    app.controller( 'StoreController', function() {
        this.products = gems;
    } );

    app.controller( 'TabController', function() {
        this.tab = 1;

        this.setTab = function(tab) {
            console.log( this.tab, tab );
            this.tab = tab;
        }

        this.isTab = function(tabValue) {
            return this.tab === tabValue;
        }
    } );

    app.controller( 'GalleryController', function() {
        this.current = 0;

        this.setCurrent = function(imageNum) {
            if(imageNum !== null) {
                this.current = imageNum;
            } else {
                this.current = 0;
            }
        };
    } );

    app.controller( 'ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push( this.review );
            // Clear review
            this.review = {};
        }

    } );

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

    var gems = [
        { 
            name: 'Azurite', 
            price: 2.95,
            description: 'This is a description.',
            shine: '',
            images: [
                'assets/images/above-ground-pool.jpg',
                'assets/images/black-cowboy.jpg'
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'This is great!!',
                    author: 'pea@misfist.com'
                },
                {
                    stars: 4,
                    body: 'Pretty nice',
                    author: 'misfist@yahoo.com'
                }
            ]
        },
        { 
            name: 'Bloodstone',
            price: 5.95,
            description: 'Yeah, so it is a bloodstone. Need I say more?',
            shine: '',
            images: [
                'assets/images/above-ground-pool.jpg',
                'assets/images/black-cowboy.jpg'
            ],
            reviews: [
                {
                    stars: 5,
                    body: '',
                    author: ''
                },
                {
                    stars: 4,
                    body: '',
                    author: ''
                }
            ]
        },
        { 
            name: 'Zircon',
            price: 3.95,
            description: 'Don\'t you know what a Zircon is?',
            shine: '',
            images: [
                'assets/images/above-ground-pool.jpg',
                'assets/images/black-cowboy.jpg'
            ],
            reviews: [
                {
                    stars: 5,
                    body: '',
                    author: ''
                },
                {
                    stars: 4,
                    body: '',
                    author: ''
                }
            ]
        }
    ];

})();