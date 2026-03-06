const limitInput = document.getElementById("limit");
const saveButton = document.getElementById("save");
const status = document.getElementById("status");

saveButton.addEventListener("click", () => {
  const limit = parseInt(limitInput.value);

  chrome.storage.sync.set({ messageLimit: limit }, () => {
    status.textContent = "Saved!";
    setTimeout(() => {
      status.textContent = "";
    }, 1500);
  });
});