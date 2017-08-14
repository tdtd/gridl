$(document).ready(function(){
  /*
    Prevents Page from moving to the href tag, instead scrolls to it over the course of 250ms.
  */
  $('.scrollTo').on('click', function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    $('html,body').animate({scrollTop: target.offset().top}, 250);
  });
  /*
    Watch for click to hide and show the data-activates attribute associated with the class
  */
  $('.button-collapse').on('click', function(e){
    var target = '#'+$(this).attr('data-activates');
    var isVis = $(target).is(':visible');
    if (isVis){
      console.log('vis')
      hideByWidth($(target));
    } else {
      console.log('invis')
      showByWidth($(target));
    }
  });
  
  /*
    Basic UI Functions
  */
    function hideByWidth(target){
      target.animate({ width: '0'  }, 250, function(){
        target.removeAttr('style');
        $('body').removeAttr('style');
      });
      
    }
  
    function showByWidth(target, callback){
      $('body').append('<div class="modal-under"></div>');
      target.css('display', 'flex');
      $('body').css('overflow', 'hidden');
      target.animate({ width: '25rem', 'max-width': '90%' }, 150, callback);
      $('.modal-under').on('click', function(){
        $(this).remove();
        hideByWidth(target);
      })
    }
  
});