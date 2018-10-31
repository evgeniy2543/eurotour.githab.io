$(function(){
  $("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
 });

   $('#slick-slide').slick({
     arrows: true,
            prevArrow:"<a class='prev-left'><i class='fa fa-angle-left' aria-hidden='true'></i></a>",
            nextArrow:"<a class='prev-next'><i class='fa fa-angle-right' aria-hidden='true'></i></a>"
   });

    $('#da-slider').cslider({
        bgincrement : 0
    });

    $("form").submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                $(formNm).html(data);
            },
            error: function (jqXHR, text, error) {
                $(formNm).html(error);
            }
        });
        return false;
    });
});

