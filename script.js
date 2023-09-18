// var loader = document.getElementById("preloader");
// setTimeout(function () {
//   loader.style.opacity = 0;
//   loader.style.visibility = "hidden";
//   document.getElementById("content").style.opacity = 1;
// }, 2500);

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};


document.addEventListener("DOMContentLoaded", function () {
  const headerHomePageLink = document.querySelector(".header-home-page");
  headerHomePageLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.reload();
  });
});


