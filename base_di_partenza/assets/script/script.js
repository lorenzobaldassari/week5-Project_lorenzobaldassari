const sticky = document.getElementById("menu");
const button = document.getElementById("here");
console.log(line);
console.log(sticky);
window.addEventListener("scroll", (event) => {
  let h = this.scrollY;

  if (h > 400) {
    sticky.classList.add("menu2");
    button.classList.add("green");
    sticky.classList.remove("menu3");
    button.classList.remove("white");
  } else {
    button.classList.remove("green");
    button.classList.add("white");
    sticky.classList.remove("menu2");
    sticky.classList.add("menu3");
  }
});
// sticky.addEventListener("scroll", (event) => {
//   position1 = window.scrollY;
// });
// console.log(sticky);
