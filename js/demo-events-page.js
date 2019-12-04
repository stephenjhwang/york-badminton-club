const options = {
    noHeaderId: true,
}

$( document ).ready(function() {
    const converter = new showdown.Converter(options);
    $('#translate-md').click(function() {
        let value = $('#markdown-editor').val()
        let html = converter.makeHtml(value);
        html = "<h1>Events</h1>" + html;
        $('#events').html(html);
    });
});

