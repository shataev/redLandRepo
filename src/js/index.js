import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import slick from 'slick-carousel';
import clientsReviewSlider from './clients-review-slider';
import Navbar from './navbar';

var navbarElem = $('.navbar-custom');
var headerNavbar = new Navbar(navbarElem);

headerNavbar.makeMenuBrighter();


$('.employees-slider').slick({
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

clientsReviewSlider('.review-slider');







