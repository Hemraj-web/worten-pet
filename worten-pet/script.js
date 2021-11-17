$(document).ready(function () {
  // alert('test')

  $('.pet__row__item').click(function (e) {
    e.preventDefault();
    var windowsize = $(window).width();
    var pr__class = $(this).data('pr');
    var parent_class = $(this).closest('.pet__row__inner');
    if ($(this).hasClass('active')) {

      parent_class.find('.pet__row__item').removeClass('active');
      if (windowsize > 600) {
        pet__animation(parent_class, pr__class, "0", "0", false);
      }else{
        parent_class.find('.' + pr__class).slideUp('slow')
          .animate(
            { opacity: 1 },
            { queue: false, duration: 'slow' }
          );
      }

    } else {

      $(this).addClass('active');
      $(this).removeClass('deactivate');
      $('.pet__row__item__info').removeClass('active');

      if (windowsize > 1131) {
        pet__animation(parent_class, pr__class, "-400px", "-800px", true);
      } else if (windowsize < 1131 && windowsize > 1072) {
        pet__animation(parent_class, pr__class, "-367px", "-743px", true);
      } else if (windowsize < 1072 && windowsize > 991) {
        pet__animation(parent_class, pr__class, "-333px", "-682px", true);
      } else if (windowsize < 991 && windowsize > 888) {
        pet__animation(parent_class, pr__class, "-313px", "-645px", true);
      }else if (windowsize < 888 && windowsize > 808) {
        pet__animation(parent_class, pr__class, "-288px", "-593px", true);
      }else if (windowsize < 808 && windowsize > 750) {
        pet__animation(parent_class, pr__class, "-260px", "-544px", true);
      }else if (windowsize < 750 && windowsize > 706) {
        pet__animation(parent_class, pr__class, "-250px", "-507px", true);
      }else if (windowsize < 706 && windowsize > 648) {
        pet__animation(parent_class, pr__class, "-240px", "-470px", true);
      }else if (windowsize < 648 && windowsize > 600) {
        pet__animation(parent_class, pr__class, "-230px", "-419px", true);
      }else{
        parent_class.find('.' + pr__class).slideDown('slow')
          .animate(
            { opacity: 1 },
            { queue: false, duration: 'slow' }
          );
      }

    }

  });

  function pet__animation(parent_class, pr__class, second_px, third_px, fadeIn) {
    if (fadeIn) {
      parent_class.find('.' + pr__class).fadeIn(600);
    } else {
      parent_class.find('.' + pr__class).fadeOut(1000);
    }
    if (pr__class == "pr__1") {
      parent_class.find('[data-pr="pr__2"]').css({"transform": "translate(" + second_px + ",0)", "z-index": "1"});
      parent_class.find('[data-pr="pr__3"]').css({"transform": "translate(" + third_px + ",0)", "z-index": "2"});
      parent_class.find('[data-pr="pr__1"]').css({"z-index": "3"});

    } else if (pr__class == "pr__2") {
      parent_class.find('[data-pr="pr__1"]').css({"z-index": "1"});
      parent_class.find('[data-pr="pr__3"]').css({"transform": "translate(" + third_px + ",0)", "z-index": "2"});
      parent_class.find('[data-pr="pr__2"]').css({"transform": "translate(" + second_px + ",0)", "z-index": "3"});
    } else if (pr__class == "pr__3") {
      parent_class.find('[data-pr="pr__1"]').css({"z-index": "1"});
      parent_class.find('[data-pr="pr__2"]').css({"transform": "translate(" + second_px + ",0)", "z-index": "2"});
      parent_class.find('[data-pr="pr__3"]').css({"transform": "translate(" + third_px + ",0)", "z-index": "3"});
    }
  }


  $('.pet__dogcat__nav ul li a').click(function (e) {
    e.preventDefault();
    $(this).closest('ul').find('li').removeClass('active');
    $(this).closest('li').addClass('active');
    var tab__class = $(this).data('tab__class');
    $('.pet__cat').removeClass('active');
    $('.pet__dog').removeClass('active');

    $(tab__class).addClass('active');
  });

});