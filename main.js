// let up = document.querySelector(".go-top");

// window.onscroll = function () {
//     window.scrollY >= 1000 ? up.style.display = "block" :up.style.display = "none";
// };

// up.onclick = function () {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// };
let up = document.querySelector(".go-top");

function toggleUpButton() {
  window.scrollY >= 1000
    ? (up.style.display = "block")
    : (up.style.display = "none");
}

toggleUpButton();

window.onscroll = toggleUpButton;

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
