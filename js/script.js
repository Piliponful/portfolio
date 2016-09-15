(function () {
  $('.hamburger-menu').on('click',function() {
    $('.bar').toggleClass('animate');
  });

  $('.hamburger-menu').click(function() {
    $('.offcanvas').toggleClass('margin-right');
  });
})();

// $( document ).ready(function(){
//   var sidebar  = $('.sidebar'),
//       start    = sidebar.offset().top,
//       newsH    = $('.news').height(),
//       end      = ($('.news').offset().top + newsH) - sidebar.height(),
//       margin   = 10,
//       dFromTop = function() { return $(window).scrollTop() + $('.header').height() + margin};

//   window.onscroll = stickySidebar;
//   function stickySidebar () {

//     if(dFromTop() < start)
//       sidebar.css('margin-top', '0');
//     if(dFromTop() > start)
//       sidebar.css('margin-top', dFromTop()-start + 'px');
//     if(dFromTop() > end)
//       sidebar.css('margin-top', newsH - sidebar.height() + 'px');
//   }
// });