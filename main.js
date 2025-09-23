// add "To-top" Button
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

//Add Progress-Bar to the page "Scroller"
let scroller = document.querySelector(".scroller");

window.addEventListener("scroll", () => {
  let hight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / hight) * 100}% `;
});

// Add counter to awsome section
let spans = document.querySelectorAll(".awesome .container .box span");
let awsSection = document.querySelector(".awesome");
let started = false;
window.onscroll = () => {
  if (window.scrollY >= awsSection.offsetTop) {
    if (!started) {
      spans.forEach((el) => {
        Startcount(el);
      });
    }
    started = true;
  }
};

function Startcount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Skills Counter
let skillsSection = document.querySelector(".our-skills");
let spansWidth = document.querySelectorAll(".our-skills .progres span");
let spansCount = document.querySelectorAll(".our-skills .skill h2 span");
let started1 = false;
window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSection.offsetTop - 100) {
    if (!started) {
      spansWidth.forEach((el, index) => {
        let goal = parseInt(el.dataset.width);
        el.style.width = el.dataset.width;

        let count = 0;
        let counter = setInterval(() => {
          count++;
          spansCount[index].textContent = count + "%";
          if (count === goal) {
            clearInterval(counter);
          }
        }, 500 / goal);
      });
    }
    started1 = true;
  }
});
