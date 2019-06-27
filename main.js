var plansza = document.createElement("div");
plansza.setAttribute("class", "plansza");
document.body.appendChild(plansza);




for (x = 0; x <= 9; x++) {
    for (y = 0; y <= 9; y++) {
        var p = document.createElement("div");
        var t = document.createTextNode(x + "," + y);
        p.appendChild(t);
        plansza.appendChild(p);

    }

}