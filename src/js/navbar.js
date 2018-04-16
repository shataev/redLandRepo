import $ from 'jquery';

class Navbar {
    constructor(elem){
        this.elem = elem;
        toggleNavbarClass(this.elem);
    }

    makeMenuBrighter(){
        debugger;
        var self = this;

        $(window).on('scroll', function(){
            debugger;
            toggleNavbarClass(self.elem);
        });
    }
};


function toggleNavbarClass(navbarEl){
    debugger;
    var scrollPos = $(window).scrollTop();

    if (scrollPos > 0){
        $(navbarEl).addClass('is-brighter');
    } else {
        $(navbarEl).removeClass('is-brighter');
    }
}

export default Navbar





