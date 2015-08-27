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

    app.controller('GalleryController', function() {
        this.current = 0;

        this.setCurrent = function(imageNum) {
            if(imageNum !== null) {
                this.current = imageNum;
            } else {
                this.current = 0;
            }
        };
    });

    var gems = [
        { 
            name: 'Azurite', 
            price: 2.95,
            description: '',
            shine: '',
            images: [
                'assets/images/above-ground-pool.jpg',
                'assets/images/black-cowboy.jpg'
            ]
        },
        { 
            name: 'Bloodstone',
            price: 5.95,
            description: '',
            shine: '',
            images: [
                'assets/images/above-ground-pool.jpg',
                'assets/images/black-cowboy.jpg'
            ]
        },
        { 
            name: 'Zircon',
            price: 3.95,
            description: '',
            shine: '',
            images: [
                'assets/images/above-ground-pool.jpg',
                'assets/images/black-cowboy.jpg'
            ]
        }
    ];

})();