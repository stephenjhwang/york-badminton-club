$( document ).ready(function() {
    const options = {
        noHeaderId: true,
    }

    const converter = new showdown.Converter(options);

    fetch('https://yorkubadminton.com/events/events-page.txt')
    .then(res => {
        if (res.status == 200) return res.text();
        else throw new Error("something went wrong")
    })
    .then(data => {
        //let value = $('#markdown-editor').val()
        if (data == "") throw new Error("no text");
        let html = converter.makeHtml(data);
        $('#events').html(html);
    })
    .catch(err => {
        let html = "<h1>Events</h1><h2>Currently no events to show</h2>"
        $('#events').html(html);
    }); 
});
