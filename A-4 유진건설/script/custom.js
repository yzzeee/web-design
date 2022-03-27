/* navi */
$('.menu li').mouseenter(function(){
    $('.sub-menu, .sub-back').stop().slideDown();
});

$('.menu li').mouseleave(function(){
    $('.sub-menu, .sub-back').stop().slideUp();
});

/* modal */
$('.open-modal').on('click', function() {
    $('.modal').fadeIn();
});

$('.close-modal').on('click', function() {
    $('.modal').fadeOut();
});
