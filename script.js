let plusButtons = document.querySelectorAll(".plus");
let minusButtons = document.querySelectorAll(".icon-minus");
let paragraphs = document.querySelectorAll(".wording");

plusButtons.forEach((plus, index) => {
  plus.addEventListener('click', function(e) {
    // Show corresponding minus button and paragraph, hide plus button
    minusButtons[index].style.display = "block";
    paragraphs[index].style.display = "block";
    e.target.style.display = "none";
  });
});

minusButtons.forEach((minus, index) => {
  minus.addEventListener('click', function(e) {
    // Hide corresponding minus button and paragraph, show plus button
    plusButtons[index].style.display = "block";
    e.target.style.display = "none";
    paragraphs[index].style.display = "none";
  });
});