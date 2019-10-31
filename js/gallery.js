var max = 7;
for (let i = 0; i <= max; i++) {
    //To create a circular column thingie
    var column = (".column-" + ((i % 4) + 1));
    let grid = document.querySelector(column);
    let img = document.createElement('img');

    img.setAttribute("src", "images/club/picture" + i + ".png");
    img.setAttribute("class", "images");

    grid.appendChild(img);
}