$(document).ready(function () {
  // alert('test')

  $('.pet__row__item').click(function (e) {
    e.preventDefault();
    if($(this).hasClass('active')){
      var parent_class = $(this).closest('.pet__row__inner');
      parent_class.find('.pet__row__item').removeClass('deactivate');
      parent_class.find('.pet__row__item').removeClass('active');
      $('.pet__row__item__info').removeClass('active');
    }else{
      var pr__class = $(this).data('pr');
      var parent_class = $(this).closest('.pet__row__inner');
      // parent_class.find('.pet__row__item').addClass('deactivate');
      $(this).addClass('active');
      $(this).removeClass('deactivate');
      $('.pet__row__item__info').removeClass('active');
      // parent_class.find('.' + pr__class).addClass('active');

      if(pr__class == "pr__1"){
        parent_class.find('.' + pr__class).delay(800).fadeIn(500);
        parent_class.find('[data-pr="pr__2"]').css({"transform":"translate(-400px,0)","z-index":"1"}).delay(800).fadeOut(0);
        parent_class.find('[data-pr="pr__3"]').css({"transform":"translate(-800px,0)","z-index":"2"}).delay(800).fadeOut(0);
        parent_class.find('[data-pr="pr__1"]').css({"z-index":"3"});

      } else if(pr__class == "pr__2"){

      }
      else if(pr__class == "pr__3"){

      }
    }

  });


  $('.pet__dogcat__nav ul li a').click(function(e){
    e.preventDefault();
    $(this).closest('ul').find('li').removeClass('active');
    $(this).closest('li').addClass('active');
    var tab__class = $(this).data('tab__class');
    $('.pet__cat').removeClass('active');
    $('.pet__dog').removeClass('active');

    $(tab__class).addClass('active');
  });

});