$( document ).ready(function() {
    const options = {
        noHeaderId: true,
    }

    const converter = new showdown.Converter(options);

    fetch('https://yorkubadminton.com/events/events-section.txt')
    .then(res => {
        if (res.status == 200) return res.text();
        else throw new Error("something went wrong")
    })
    .then((data) => {
        let html = converter.makeHtml(data);
        $('#announcements').html(html);
    })
    .catch(err => {
        let html = "<center>Currently No Events</center>"
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
