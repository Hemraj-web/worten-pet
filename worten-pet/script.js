$(document).ready(function(){
    // alert('test')
    
    $('.pet__row__item a').click(function(e){
        e.preventDefault();
        var pr__class = $(this).data('pr');
        $('.pet__row__item__info').removeClass('active');
        $('.'+pr__class).addClass('active');
    });


});