$('.btn a:first-child').on('click', function() {
  $('.tab1').show();
  $('.tab2').hide();
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});

$('.btn a:last-child').on('click', function() {
  $('.tab2').show();
  $('.tab1').hide();
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});

/* Modal */
$('.open-modal').on('click', function() {
  $('.modal').fadeIn();
});

$('.close-modal').on('click', function() {
  $('.modal').fadeOut();
});

/* Navigation */
$('.menu li').mouseenter(function(){
  $(this).children('.sub-menu').stop().slideDown();
});

$('.menu li').mouseleave(function(){
  $(this).children('.sub-menu').stop().slideUp();
});