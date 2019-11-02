$( document ).ready(function() {
    $('#faq-toggle').click(function() {
        if ( $(this).hasClass('expand') ) {
            $(this).removeClass('expand').addClass('collapse');
            //$('#faq').css('max-height', 'none');
            let faq = document.getElementById("faq");
            faq.style.maxHeight = faq.scrollHeight + 50 + "px";
            
        }
        else if ( $(this).hasClass('collapse') ) {
            $(this).removeClass('collapse').addClass('expand');
            //$('#faq').css('max-height', '175px');
            let faq = document.getElementById("faq");
            faq.style.maxHeight = null;
        }
    });
});
