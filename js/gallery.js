var max = 10;
for (let i = 0; i <= max; i++) {
    //To create a circular column thingie
    var column = (".column-" + ((i % 4) + 1));
    let grid = document.querySelector(column);
    let img = document.createElement("img");
    let a = document.createElement("a");

    img.setAttribute("src", "images/club/picture" + i + ".png");
    img.setAttribute("class", "images");

    a.setAttribute("data-lightbox", "badminton")
    a.setAttribute("href", "images/club/picture" + i + ".png");

    a.append(img);
    grid.appendChild(a);
}