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