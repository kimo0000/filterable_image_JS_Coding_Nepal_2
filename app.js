const btns = document.querySelectorAll(".btns button");
const cards = document.querySelectorAll(".cards .card");

const filterBtn = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  cards.forEach((card) => {
    card.classList.add("hide");
    if (
      e.target.dataset.name === card.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

btns.forEach((btn) => btn.addEventListener("click", filterBtn));
