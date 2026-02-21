function typeImage(i, t, ie, oe) {
    input = document.getElementById(ie).innerHTML;
    hello = input.split(" ");
    document.getElementById(oe).innerHTML += hello[i];
    setTimeout(function () {
        ((i < hello.length - 1) ? typeImage(i + 1, t, ie, oe) : false);
    }, t);
}
function appear(ie, t) {
    const input = document.getElementById(ie);
    setTimeout(() => {
        input.style.display = 'block';
    }, t)
}
appear("box1", 1000);
typeImage(0, 1, "text", "screen");
appear("box2", 4500);
appear("box3", 6000);