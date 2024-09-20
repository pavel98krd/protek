



 $(window).scroll(function() {
if ($(this).scrollTop() > 100){  

    $('.header-wrapper').addClass("sticky");
  }
  else{
    $('.header-wrapper').removeClass("sticky");
  }
});


$('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});


$('.gallery2').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});


    $(".telmask").mask("+7(999) 999-99-99", {placeholder: "+7(___) ___-__-__" });




  $('.spechialist').click(function(){
    $(this).toggleClass('spechialistopen');
 
  });



  $('.burger-menu').click(function(){
    $('.windmenu').addClass('menuopen');
    $('body').addClass('fifix');
 
  });
   $('.close-menu').click(function(){
    $('.windmenu').removeClass('menuopen');
    $('body').removeClass('fifix');
 
  });


   $('.product-item').click(function(){
    $(this).toggleClass('oppr');
 
  });


$(function() {
  var tab = $('#tabs .tabs-items > div'); 
  tab.hide().filter(':first').show(); 
  
  // Клики по вкладкам.
  $('#tabs .tabs-nav a').click(function(){
    tab.hide(); 
    tab.filter(this.hash).show(); 
    $('#tabs .tabs-nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();
 
  // Клики по якорным ссылкам.
});


$(function() {
  var tab = $('#tabs2 .tabs-items2 > div'); 
  tab.hide().filter(':first').show(); 
  
  // Клики по вкладкам.
  $('#tabs2 .tabs-nav2 a').click(function(){
    tab.hide(); 
    tab.filter(this.hash).show(); 
    $('#tabs2 .tabs-nav2 a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();
 
  // Клики по якорным ссылкам.
});


 $(document).ready(function(){
  $("a.clc[href*='#']").on("click", function(e){
    var anchor = $(this);
       $('.windmenu').removeClass('menuopen');
    $('body').removeClass('fifix');
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });
});




$('.first-screen-slider').slick({
dots: false,
  infinite: true,

        slidesToScroll: 1,
 slidesToShow: 1,
      prevArrow:'',
            nextArrow:'',
   autoplay: true,
  autoplaySpeed: 2000,
   fade: true,
  cssEase: 'linear'

});




$( ".slider-cand" ).each(function(index) {
  $('.slider-for', $(this)).slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
   prevArrow:'',
            nextArrow:'',
 
  fade: true,
 asNavFor: $(this).find('.slider-nav'),
   
   
  });
  $('.slider-nav', $(this)).slick({
     slidesToShow: 3,
  slidesToScroll: 1,
   arrows: false,
  dots: true,
  centerMode: false,
  focusOnSelect: true,
    asNavFor: $(this).find('.slider-for'),
   
  });
});
  
  