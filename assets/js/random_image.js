window.onload = displayImage;
var imagesArray = ["Picsart_23-10-04_15-30-03-057.jpg"];

function displayImage() {
    var num = Math.floor(Math.random() * (imagesArray.length));
    document.getElementById("main_image1").src = "assets/img/animes/" + imagesArray[num];
}
