jQuery(document).ready(function($){
    $(".type_1 a").fancybox({
        arrows: true,
        buttons : [
            'thumbs',
            'close',
            'fullScreen',
        ]
    });

    //searchbox
    let iconsearch = $('#search-open');
    let contentSearch = $('.search-overlay');
    let closebtn = $('#closebtn');
    iconsearch.click(function () {
        contentSearch.toggleClass("active-search");
        $('.class-menu').removeClass("active-menu");
        $('.nav-bar').removeClass("active-bar");
    });
    closebtn.click(function () {
        contentSearch.removeClass("active-search");
    });
    //scroll add header
    $(window).scroll(function () {
        let scrollHeader = $(window).scrollTop();
        if(scrollHeader > 40){
            $('.header').addClass("fixed-menu");
        }else {
            $('.header').removeClass("fixed-menu");
        }
    });
    //icon-bar
    $('#bar-icon').click(function () {
        $('.nav-bar').toggleClass("active-bar");
        $('.class-menu').toggleClass("active-menu");
    });
});