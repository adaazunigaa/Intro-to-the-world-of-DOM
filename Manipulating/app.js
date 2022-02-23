// inner.Text  ************************************************************
//document.querySelector("p").innerText = "hahahahahahah"
//document.querySelector("h1").innerText = "<1>...."




// text.Content  ************************************************************
//document.querySelector("p").textContent;





// inner.HTML  ************************************************************
// document.querySelector("p").innerHTML;
// document.querySelector("h1").innerHTML += "<sup>infinity</sup>"




//ATRIBUTES  id/href *********************************************************
//Renaming an id 
//document.querySelector("#banner").id = "other";

const firstLink = document.querySelector("a");

//gets the info from the object (goes trough the JS object & returns the value)
firstLink.href;

//gets the 'text' directly from the HTML file 
firstLink.getAttribute("href");

//sets the href attribute to http://www.google.com
//firstLink.setAttribute("href", "http://www.google.com");



//.... ATRIBUTES input  ************************************************************
document.querySelector("input[type='text'");
const input = document.querySelector("input[type='text'");
//input.type = "color";
//input.setAttribute("type", "text");



//example of set attributs 
// const img = document.querySelector("img");
// img.setAttribute("src", "https://devsprouthosting.com/imges/chicken.jpg");
// img.setAttribute("alt", "chicken");






// STYLE ***********************************************************************
const allLinks = document.querySelectorAll("a");
for (let link of allLinks) {
    link.style.color = "red";
    link.style.textDecorationColor = "fuchsia";
    link.style.textDecorationStyle = "wavy"
}



//CLASSLIST add/remove/contains/**********************************************


const h2 = document.querySelector("h2");
// h2.setAttribute("class", "purple")
// h2.setAttribute("class", "border")

h2.classList.add("purple");
h2.classList.add("border");

h2.classList.remove("border");

console.log(h2.classList.contains("border"));

//switch true to false.. 
h2.classList.toggle("purple");



//Example of classList
const li = document.querySelectorAll("li");
for (let list of li) {
    list.classList.toggle("highlight");
}




//TRAVERSING PARENT/CHILD/SIBILING **************************************************
const firstBold = document.querySelector("b");

console.log(firstBold.parentElement);
console.log(firstBold.parentElement.parentElement);
console.log(firstBold.parentElement.parentElement.parentElement);

const paragraph = firstBold.parentElement;
paragraph.childElementCount;
paragraph.children;


const squareImage = document.querySelector(".square");

//they return nodes (?Text nodes?)
squareImage.nextSibling;
squareImage.previousSibling;


squareImage.nextElementSibling;
squareImage.previousElementSibling;



//APPEND AND APPEND CHILD *********************************************************
//creating and appending an img element 
const newImg = document.createElement("img");

newImg.src = "https://ih1.redbubble.net/image.1032377149.5615/flat,750x1000,075,f.jpg"
//Append img to the boody
document.body.appendChild(newImg);

newImg.classList.add("square");



//creating and appending a h3 element 
const newH3 = document.createElement("h3");
newH3.innerText = "I am NEW";
document.body.appendChild(newH3);
newH3.classList.add("purple");



//APEND (adds at the end)
const p = document.querySelector("p");
p.append("HELLO HELLO HELLO HELLO", "HOLA, HOLA HOLA, HOLA"); //appends at the end of the p element


//PREPEND (adds at the beginning)
const newB = document.createElement("b");
newB.append("HIII! ");
p.prepend(newB);


const h3 = document.createElement("h3");
h3.append("Cats are adorable too!!!");

const h1 = document.querySelector("h1");

h1.insertAdjacentElement("afterend", h3);











