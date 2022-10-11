// image slider with swiper.js
const imageSlider = new Swiper(".image-slider", {
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const textFlipper = new Swiper(".text-flipper", {
  effect: "flip",
  allowTouchMove: false,
  grabCursor: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const navbar = document.querySelector("nav");
// mobile navbar function
function openCloseNavbar
(
  oldIconElement, 
  newIconElement, 
  tailwindClass_add, 
  tailwindClass_remove, 
  visibility_one, 
  visibility_two,
  logo_visibility_one,
  logo_visibility_two,
)
  
{
  // open/close navbar
  navbar.classList.add(tailwindClass_add);
  navbar.classList.remove(tailwindClass_remove);

  // switch icons 
  const oldIcon = oldIconElement;
  oldIcon.classList.remove("grid");
  oldIcon.classList.add("hidden");

  const newIcon = newIconElement;
  newIcon.classList.add("grid");
  newIcon.classList.remove("hidden");

  //display listItems
  const listItems = document.querySelectorAll(".list-items");
  listItems.forEach((listItem) => {
    listItem.classList.add(visibility_one);
    listItem.classList.remove(visibility_two);
  });

  // hide logo if opened
  const logo = document.getElementById("company-logo");
  logo.classList.add(logo_visibility_one);
  logo.classList.add(logo_visibility_two);
}


const openNavbarButton = document.getElementById("open-navbar-button");
const closeNavbarButton = document.getElementById("close-navbar-button");

openNavbarButton.addEventListener("click", () => {
  openCloseNavbar(openNavbarButton, closeNavbarButton, "bg-white", "bg-transparent", "grid", "hidden", "hidden", "grid");
});

closeNavbarButton.addEventListener("click", () => {
  openCloseNavbar(closeNavbarButton, openNavbarButton, "bg-transparent", "bg-white","hidden", "grid", "grid", "hidden");
});

// set navbar to default styling after resize
window.addEventListener("resize", () => {
  if(navbar.classList.contains("bg-white")){
    location.reload()
  }
  else{

  }
});