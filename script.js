const pics = document.querySelectorAll(".pictures")
const next = document.getElementById("next")
const prev = document.getElementById("prev")

let current = 0;

function showSlide(index) {
  pics[current].classList.remove("active");
  current = (index + pics.length) % pics.length;
  pics[current].classList.add("active");
}

next.addEventListener("click", () => showSlide(current + 1));
prev.addEventListener("click", () => showSlide(current - 1));