////
var modal = document.getElementById("modal");

function openModal(){
  modal.classList.add("display");
  setTimeout(function(){
    modal.classList.add("transition");    
  },20);//20milliseconds
}

function closeModal(){
  modal.classList.remove("transition");    
  setTimeout(function(){
    modal.classList.remove("display"); 
  },200);//0.3s
}
  
modal.addEventListener("click",function(){
 closeModal(); 
});

//Prevents so that the modal doesn't close when clicking on children within.
modal.children[0].addEventListener("click",function(event){
  event.stopPropagation();
});



///Slide
var imgs = document.querySelectorAll(".container img");
var dots = document.querySelectorAll(".dot i");
var leftArrow = document.querySelector(".arrow-left");
var rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
let time = 5000; // default time for auto slideshow

function defClass(startPos,index) {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};

defClass(1, 0);

leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});

rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});

function startAutoSlide() {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};

startAutoSlide(); // Start the slideshow
////JSON
function load(){

    var json = JSON.parse(menu);
    console.log(json);
}