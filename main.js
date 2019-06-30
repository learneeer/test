var board = document.createElement("div");
board.setAttribute("class", "board");
document.body.appendChild(board);



for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 10; x++) {
        var p = document.createElement("div");
        var t = document.createTextNode(x + "," + y);
        p.setAttribute("class", x + " " + y);
        p.setAttribute("id", x + "" + y);
        p.setAttribute("onclick", "choice(" + x + "," + y + ")");
        p.appendChild(t);
        board.appendChild(p);
    }
}

var choice = function(x, y) {
    console.log("x:" + x + " y:" + y);
}