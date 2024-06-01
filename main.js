const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const imgs = document.querySelectorAll("span img");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    const image = imgs[i];
    const answer = answers[i];

    answer.classList.toggle("answer_toggle");

    if (answer.classList.contains("answer_toggle")) {
      const currentSrc = image.src;
      const newSrc = "img/icon-minus.svg";
      image.src = newSrc;
    } else {
      image.src = "img/icon-plus.svg";
    }
  });
}
