import $ from 'jquery';

export default function clientsReviewSlider (selector, data){
    if (data){

    } else {
        var $container = $(selector);

        var $slideTogglers = $container.find('.slide-toggle');

        $slideTogglers.on('click', function(){
            if ($(this).hasClass('is-active')) return;

            var $activeToggler = $container.find('.slide-toggle.is-active');
            var slideNum = $(this).data('slide');
            var $newCurrentSlide = $container.find('.clients-review-item[data-slide="' + slideNum + '"]');

            $container.find('.clients-review-item.is-active').removeClass('is-active');
            $activeToggler.removeClass('is-active');

            $(this).addClass('is-active');
            $newCurrentSlide.addClass('is-active');
        })
    }
};
