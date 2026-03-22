const slider = document.getElementById("slider");
const valueDisplay = document.getElementById("value");
const saveButton = document.getElementById("save");
const status = document.getElementById("status");

// Update displayed value when slider moves
slider.addEventListener("input", () => {
  valueDisplay.textContent = slider.value;
});

// Load saved value
chrome.storage.sync.get(["messageLimit"], (result) => {
  const saved = result.messageLimit || 10;

  slider.value = saved;
  valueDisplay.textContent = saved;
});

// Save value
saveButton.addEventListener("click", () => {
  const limit = parseInt(slider.value);

  chrome.storage.sync.set({ messageLimit: limit }, () => {
    status.textContent = "Saved!";
    setTimeout(() => {
      status.textContent = "";
    }, 1500);
  });
});