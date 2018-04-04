import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import slick from 'slick-carousel';
import clientsReviewSlider from './clients-review-slider';

$('.employees-slider').slick({
    slidesToShow: 4
});

clientsReviewSlider('.review-slider');





