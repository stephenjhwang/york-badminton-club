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

    if (window.location.origin.indexOf("github") !== -1)
        var filepath = window.location.origin + "/york-badminton-club/announcements.txt" 
    else
        var filepath = window.location.origin + "/announcements.txt";

    $.get(filepath, function(txt) {
        var lines = txt.split("\n"),
            stage = 0,
            linebreaks = 0,
            html = {
                title: "",
                date: "",
                content: "",
                url: ""
            };

        var i = 0,
            len = lines.length;

        while (lines[i] === "" && i < len) { // skip empty lines in beginning of text file
            i++;
        }
        
        while (i < len) {
            if (lines[i] === "") linebreaks++; // add 1 if theres a line with no text
            if (linebreaks > 0 && lines[i] !== "") stage++; // add 1 to stage when there has been 1 or more lines consecutively without text
            
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


/*         for (var i = 0, len = lines.length; i < len; i++) {
            if (lines[i] === "") linebreaks++; // add 1 if theres a line with no text 
            if ((linebreaks > 0 && lines[i] !== "") || lines[i] === "skip") stage++; // add 1 to stage when there has been 1 or more lines consecutively without text
                linebreaks = 0; // reset linebreaks so we can read text
            if (stage === 0) { // Title
                html.title += lines[i];
            } else if (stage === 1) { // Date
                html.date += lines[i];
            } else if (stage === 2) { // Description
                html.content += lines[i];
            } else if (stage === 3) { // URL
                html.content += lines[i]
            }
        } */


    });
});
