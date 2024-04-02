document.addEventListener("DOMContentLoaded", function () {
  var logo = document.getElementById("logo");
  var container = document.getElementById("container");

  // Function to move the image in steps
  function moveImage(targetX, targetY) {
    var containerRect = container.getBoundingClientRect();
    var logoRect = logo.getBoundingClientRect();
    var currentX = logoRect.left - containerRect.left + logoRect.width / 2;
    var currentY = logoRect.top - containerRect.top + logoRect.height / 2;

    var dx = targetX - currentX;
    var dy = targetY - currentY;
    if (dx > 0) {
      logo.style.transform = "scaleX(-1)";
    } else {
      logo.style.transform = "scaleX(1)";
    }
    var distance = Math.sqrt(dx * dx + dy * dy);

    var stepSize = 12; // Adjust step size as needed
    var steps = distance / stepSize;
    var stepX = dx / steps;
    var stepY = dy / steps;

    function moveStep(step) {
      if (step <= steps) {
        logo.style.left = currentX + stepX * step - logoRect.width / 2 + "px";
        logo.style.top = currentY + stepY * step - logoRect.height / 2 + "px";
        setTimeout(function () {
          moveStep(step + 1);
        }, 100); // Adjust step duration as needed
      }
    }

    moveStep(1);
  }

  // Event listener for click
  document.addEventListener("click", function (event) {
    var clickX = event.clientX;
    var clickY = event.clientY;

    var containerRect = container.getBoundingClientRect();
    var targetX = clickX - containerRect.left;
    var targetY = clickY - containerRect.top;

    moveImage(targetX, targetY);
  });
});
