var ImgFirst = document.querySelector(".ImgFirst");
var minitureImg = document.querySelector(".mySlides");

minitureImg.addEventListener("click", change);

function change (e) {
  ImgFirst.src = e.target.src ;
}