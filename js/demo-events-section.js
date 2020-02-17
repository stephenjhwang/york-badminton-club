const options = {
    noHeaderId: true,
}


$( document ).ready(function() {
    const converter = new showdown.Converter(options);

    let defaultHTML = converter.makeHtml($('#markdown-editor').val());
    $('#announcements').html(defaultHTML);
    
    $('#translate-md').click(function() {
        let value = $('#markdown-editor').val()
        let html = converter.makeHtml(value);
        $('#announcements').html(html);
    });

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