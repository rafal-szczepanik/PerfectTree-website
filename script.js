const images = new Array();
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}
preload(
  "images/rafnew.jpeg",
  "images/pienki.jpg",
  "images/1616019682192new.jpeg"
);

const navTel = document.querySelector(".navTel");
const navItem = document.querySelector(".navWrapper");
const logo = document.querySelector(".logo");
const menu = document.querySelectorAll(".menu");
const imgHeader = document.querySelector(".imgHeader");
const imgAbout = document.querySelector(".imgOne");
const goUpBtn = document.querySelector(".goUp");
const aboutSection = document.querySelector(".s1");
const hamburger = document.querySelector(".menuBtn");
const navUl = document.querySelector(".nav-list");
const navWrapper = document.querySelector(".navWrapper");
const smallNavBtns = document.querySelectorAll(".nav-item");

const defaultSet = () => {
  if (window.innerWidth <= 1024) {
    navTel.classList.add("activeNavTel");
    navItem.classList.add("activeNavList");
    logo.classList.add("activeImg");
  }
};
defaultSet();

const changeNavHeight = 80;
changeNav = () => {
  if (window.pageYOffset > changeNavHeight) {
    navTel.classList.add("activeNavTel");
    navItem.classList.add("activeNavList");
    logo.classList.add("activeImg");
    menu.forEach((element) => element.classList.add("activeA"));
  } else if (window.pageYOffset === 0 && window.innerWidth > 1024) {
    navTel.classList.remove("activeNavTel");
    navItem.classList.remove("activeNavList");
    logo.classList.remove("activeImg");
    menu.forEach((element) => element.classList.remove("activeA"));
  }
};

let index = 0;
changePicture = () => {
  const pictures = ["1616019682192new.jpeg", "rafnew.jpeg", "pienki.jpg"];
  index < pictures.length - 1 ? index++ : (index = 0);
  imgHeader.src = `images/${pictures[index]}`;
  addPictureOpacity();
};

addPictureOpacity = () => {
  if (index === 0) {
    setTimeout(() => {
      imgHeader.classList.add("activeImgHeader");
    }, 9000);
    setTimeout(() => {
      imgHeader.classList.remove("activeImgHeader");
    }, 100);
  } else if (index === 1) {
    setTimeout(() => {
      imgHeader.classList.add("activeImgHeader");
    }, 9000);

    setTimeout(() => {
      imgHeader.classList.remove("activeImgHeader");
    }, 100);
  } else if (index === 2) {
    setTimeout(() => {
      imgHeader.classList.add("activeImgHeader");
    }, 9000);

    setTimeout(() => {
      imgHeader.classList.remove("activeImgHeader");
    }, 100);
  }
};
addPictureOpacity();
addGoUpBtn = () => {
  const heightBtnAppear = aboutSection.offsetTop;
  let opacity = window.pageYOffset / heightBtnAppear - 1;
  if (window.pageYOffset > heightBtnAppear) {
    goUpBtn.classList.add("goUpActive");
    if (opacity >= 0.6) {
      opacity = 0.6;
    } else if (window.pageYOffset > heightBtnAppear) {
      goUpBtn.style.opacity = opacity;
    }
  } else if (window.pageYOffset < heightBtnAppear) {
    goUpBtn.classList.remove("goUpActive");
  }
};
goUpFunc = () => {
  document.documentElement.scrollTop = 0;
};

showSmallNav = () => {
  hamburger.classList.toggle("open");

  navUl.classList.toggle("show");
  navWrapper.classList.toggle("navWrapperActive");
};
closeSmallNav = () => {
  setTimeout(() => {
    navUl.classList.remove("show");
    hamburger.classList.remove("open");
  }, 400);
};

window.addEventListener("scroll", changeNav);
window.addEventListener("scroll", addGoUpBtn);
setInterval(changePicture, 10000);
goUpBtn.addEventListener("click", goUpFunc);
hamburger.addEventListener("click", showSmallNav);

smallNavBtns.forEach((btn) => btn.addEventListener("click", closeSmallNav));
