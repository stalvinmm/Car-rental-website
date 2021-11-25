function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btnText = document.getElementById("morebtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        more.style.display = "inline";
    }
}