// Station 1: Click Event
document.getElementById("click-me").addEventListener("click", function () {
  alert("Button clicked!");
  this.style.backgroundColor = "#1f8c37";
});

// Station 2: Mouse Events
document.getElementById("hover-area").addEventListener("mousemove", function (event) {
  this.style.backgroundColor = `rgb(${event.offsetX + 50}, ${event.offsetY + 50}, 50)`;
});

// Station 3: Keyboard Events
document.getElementById("key-input").addEventListener("keydown", function (event) {
  document.getElementById("key-output").textContent = `You pressed: ${event.key}`;
});

// Station 4: Form Submit Event
document.getElementById("submit-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting
  document.getElementById("form-message").textContent = "Thank you for submitting!";
});

// Station 5: Window Events
window.addEventListener("resize", function () {
  document.getElementById("scroll-message").textContent = "Window resized!";
});

window.addEventListener("scroll", function () {
  document.getElementById("scroll-message").textContent = "You are scrolling!";
});
