const limitInput = document.getElementById("limit");
const saveButton = document.getElementById("save");
const status = document.getElementById("status");

// Load saved value when popup opens
chrome.storage.sync.get(["messageLimit"], (result) => {
  if (result.messageLimit) {
    limitInput.value = result.messageLimit;
  }
});

saveButton.addEventListener("click", () => {
  const limit = parseInt(limitInput.value);

  chrome.storage.sync.set({ messageLimit: limit }, () => {
    status.textContent = "Saved!";
    setTimeout(() => {
      status.textContent = "";
    }, 1500);
  });
});