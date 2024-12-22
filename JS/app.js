// DOM manipulation

// Variable declarations
const counterElement = document.querySelector(".counterElement");
const increaseButton = document.querySelector(".increaseButton");
const decreaseButton = document.querySelector(".decreaseButton");
const resetButton = document.querySelector(".resetButton");

const maximumLimit = 10; // Maximum counter limit
let counter = 0;

// Update counter function
const updateCounter = (value) => {
  counter += value;
  counterElement.textContent = counter;

  // Enable or disable the increment button
  if (counter >= maximumLimit) {
    increaseButton.setAttribute("disabled", true);
  } else {
    increaseButton.removeAttribute("disabled");
  }

  // Enable or disable the decrement button
  if (counter <= 0) {
    decreaseButton.setAttribute("disabled", true);
  } else {
    decreaseButton.removeAttribute("disabled");
  }
};

// Initialize the counter and buttons
const initialize = () => {
  counterElement.textContent = counter;
  decreaseButton.setAttribute("disabled", true); // Disable decrement initially
};

// Event Listeners
increaseButton.addEventListener("click", () => updateCounter(1));

decreaseButton.addEventListener("click", () => updateCounter(-1));

resetButton.addEventListener("click", () => {
  counter = 0; // Reset the counter to zero
  updateCounter(0); // Reuse updateCounter to refresh UI and button states
});

// Initialize the counter
initialize();
