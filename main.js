// // show/hide

// const menu = document.querySelector(".nav_menu");
// const menuBtn = document.querySelector("#open-menu-btn");
// const closeBtn = document.querySelector("#close-menu-btn");

// menuBtn.addEventlistener('click', () => {
//     menu.style.display = "flex";
//     closeBtn.style.display = "inline-block";
//     menuBtn.style.display = "none";
// })

const navbar = document.querySelector(`.navbar`);

window.addEventListener(`scroll`, () => {
  if (scrollY > 450) {
    navbar.classList.add(`background`);
  } else {
    navbar.classList.remove(`background`);
  }
});
