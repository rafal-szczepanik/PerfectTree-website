const navTel = document.querySelector(".navTel");
const navItem = document.querySelector(".nav-list");
const logo = document.querySelector(".logo");
const menu = document.querySelectorAll(".menu");
const imgHeader = document.querySelector(".imgHeader");

const changeNavHeight = 100;
console.log();
let index = 0;

changeNav = () => {
  if (window.pageYOffset > changeNavHeight) {
    navTel.classList.add("activeNavTel");
    navItem.classList.add("activeNavList");
    logo.classList.add("activeImg");
    menu.forEach((element) => element.classList.add("activeA"));
  } else if (window.pageYOffset === 0) {
    navTel.classList.remove("activeNavTel");
    navItem.classList.remove("activeNavList");
    logo.classList.remove("activeImg");
    menu.forEach((element) => element.classList.remove("activeA"));
  }
};

changePicture = () => {
  const pictures = ["rafnew.jpeg", "pienki.jpg", "1616019682192new.jpeg"];

  pictures.forEach(() => (imgHeader.src = `images/${pictures[index]}`));
  index++;
  if (index === pictures.length) {
    index = 0;
  }
};

window.addEventListener("scroll", changeNav);
setInterval(changePicture, 10000);
