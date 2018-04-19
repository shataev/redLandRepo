import $ from 'jquery';

class Navbar {
    constructor(elem){
        this.elem = elem;
        this.menuButton = $(this.elem).find('.menu-button')[0];
        this.navMenu = $(this.elem).find('.nav');

        toggleNavbarClass(this.elem);
    }

    makeMenuBrighter(){
        var self = this;

        $(window).on('scroll', function(){
            debugger;
            toggleNavbarClass(self.elem);
        });
    }

    addShowMenuButtonHandler(){
        var self = this;

        $(self.menuButton).on('click', function(){
            debugger;
            showHideMenu(self.menuButton, self.navMenu)
        })
    }

};


function toggleNavbarClass(navbarEl){
    var scrollPos = $(window).scrollTop();

    if (scrollPos > 0){
        $(navbarEl).addClass('is-brighter');
    } else {
        $(navbarEl).removeClass('is-brighter');
    }
}

function showHideMenu(menuButton, menuEl){
    if ($(menuEl).hasClass('is-opened-menu')){
        $(menuEl).removeClass('is-opened-menu');
        $(menuButton).removeClass('is-opened-menu');
    } else {
        $(menuEl).addClass('is-opened-menu');
        $(menuButton).addClass('is-opened-menu');
    }
}

export default Navbar





