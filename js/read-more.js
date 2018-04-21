$(document).ready(function () {

    $readMores = $('.more');

    $readMores.hide().before('<a class="read-more" href="#">Read more</a>');

    $readMores.append('<a class="read-less" href="#">Read Less</a>');

    $('#primary').click(function () { 
        
        var $t = $(event.target);

        if ($t.is('.read-more')) {
            $t.hide();
            $t.siblings('.more').slideDown();
            event.preventDefault;
        
        } else if ($t.is('.read-less')) {
            $t.parents('.more').slideUp();
            $t.parents('.more').siblings('.read-more').show();
            event.preventDefault;
        }
    });
    
});