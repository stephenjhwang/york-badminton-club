$(document).ready(function() {
    if (window.location.origin.indexOf("github") !== -1)
        var filepath = window.location.origin + "/york-badminton-club/events/events-section.txt"
    else
        var filepath = window.location.origin + "/events/events-section.txt";

    $.get(filepath, function(txt) {
        var lines = txt.split("\n"),
            stage = 0,
            linebreaks = 0,
            html = {
                title: "",
                date: "",
                content: "",
                url: ""
            },
            events = [];
        // gotta parse the text    
        var i = 0,
            len = lines.length;
        // skip empty lines in beginning of text file
        while (lines[i] === "" && i < len) i++;

        while (i < len) {
            if (lines[i] === "") { // add 1 to line break if there is an empty line
                linebreaks++;
                while (i < len && lines[i] === "") i++; // skip consecutive empty lines
            }
            if (linebreaks > 0 && lines[i] !== "") { // add 1 to stage if there have been linebreak(s)
                stage++;
                linebreaks = 0;
            }
            if (stage === 4) { // reset stage/html and add html to list
                stage = 0;
                events.push(html);
                html = {
                    title: "",
                    date: "",
                    content: "",
                    url: ""
                }
            }

            if (stage === 0) { // Title
                html.title += " " + lines[i];
            } else if (stage === 1) { // Date
                html.date += " " + lines[i];
            } else if (stage === 2) { // Description
                html.content += " " + lines[i];
            } else if (stage === 3) { // URL
                html.url += " " + lines[i]
            }

            i++;
            if (lines[i] === "skip") { // skip all subsequent empty lines and add 1 to stage
                i++;
                linebreaks = 0;
                stage++;
                while (lines[i] === "" && i < len) {
                    i++
                }
            }
        }

        console.log(events);

        var messages = "";
        events.forEach(function(e) {
            messages += '<div class="ann-message">' +
                (e.title != "" ? ('<h3 class="ann-title">' + e.title.trim() + '</h3>') : "") +
                (e.date != "" ? ('<p class="ann-date">' + e.date.trim() + '</p>') : "") +
                (e.content != "" ? ('<p class="ann-content">' + e.content.trim() + '</p>') : "") +
                (e.url != "" ? ('<a class="ann-url" href="' + e.url.trim() + '">See Details</a>') : "") +
                '</div>'
        });
        if (messages != "")
            $('#events').html("<h2>events</h2>" + messages);
        else
            $('#events').html("<h2>events</h2>" + '<p class="ann-date">No events to Show</p>');

    });
});