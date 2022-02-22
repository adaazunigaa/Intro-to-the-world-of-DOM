// GETELEMENTBYID ****************************************************************************
const b = document.getElementById("banner");
console.dir(b);




//GETELEMENTSBYTAGNAME **********************************************************************
const allImgs = document.getElementsByTagName("img");
//console.dir(allImgs[1])

//
// for (let img of allImgs){
//     //console.log(image.src);
//     //img.src="https://www.seekpng.com/png/detail/77-772752_kawaii-chicken.png";
// }




//GETELEMENTBYCLASSNAME **********************************************************************
const squaredImages = document.getElementsByClassName("square");

// for (let img of squaredImages){
//     img.src="https://www.seekpng.com/png/detail/77-772752_kawaii-chicken.png";
// }



//QUERYSELECTOR *************************************************
document.querySelector('p');
document.querySelector(".square");
document.querySelector("a[title='Java']");

//QUERYSELECTORALL *************************************************
document.querySelectorAll('p');
document.querySelectorAll(".square");

const links = document.querySelectorAll("p a");
for (let link of links) {
    console.log(link.href);
}
