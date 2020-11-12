const menuBtn = document.querySelector(".menu-btn");
// console.log(showHide);
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    let showHide = document.querySelector(".header-ul");
    showHide.classList.add("show");
    showHide = true;
    document.getElementById("myTopnav").style.width = "100%";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    let showHide = document.querySelector(".header-ul");
    showHide.classList.remove("show");
    showHide = false;
    document.getElementById("myTopnav").style.width = "0px";
  }
});
