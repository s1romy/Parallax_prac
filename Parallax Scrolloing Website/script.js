let text = document.getElementById("text");
let pLeft1 = document.getElementById("planet-left01");
let pRight1 = document.getElementById("planet-right01");
let pLeft2 = document.getElementById("planet-left02");
let pRight2 = document.getElementById("planet-right02");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  pLeft1.style.left = value * -1.5 + "px";
  pRight1.style.left = value * 1.5 + "px";
  pLeft2.style.left = value * 0.5 + "px";
  pRight2.style.left = value * -0.5 + "px";
});
