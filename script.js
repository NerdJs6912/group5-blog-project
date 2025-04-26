

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  // Toggle dropdown on click
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('a');
    trigger.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      // Close other open dropdowns
      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove('active');
      });
      // Toggle current dropdown
      dropdown.classList.toggle('active');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
});



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
