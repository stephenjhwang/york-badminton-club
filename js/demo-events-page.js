const options = {
    noHeaderId: true,
}

$( document ).ready(function() {
    const converter = new showdown.Converter(options);

    let defaultHTML = converter.makeHtml($('#markdown-editor').val());
    $('#events').html(defaultHTML);

    $('#translate-md').click(function() {
        let value = $('#markdown-editor').val()
        let html = converter.makeHtml(value);
        $('#events').html(html);
    });
});

