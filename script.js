// Select all <details> elements
const details = document.querySelectorAll("details");

// Add an event listener to each <details> element
details.forEach((detail) => {
  detail.addEventListener("click", function () {
    // Close all details except the one that was clicked
    details.forEach((otherDetail) => {
      if (otherDetail !== detail) {
        otherDetail.removeAttribute("open");
      }
    });
  });
});
