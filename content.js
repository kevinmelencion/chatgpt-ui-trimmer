function showToast(message) {
  // Remove existing toast if present
  const existingToast = document.querySelector(".chatgpt-toast");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.classList.add("chatgpt-toast");
  toast.textContent = message;

  Object.assign(toast.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "12px 16px",
    backgroundColor: "#111111",
    color: "#fff",
    borderRadius: "8px",
    fontSize: "14px",
    zIndex: "9999",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  });

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function trimMessages() {
  const messages = document.querySelectorAll("div[data-message-author-role]");

  if (messages.length > 10) {
    const numberToRemove = messages.length - 10;

    for (let i = 0; i < numberToRemove; i++) {
      messages[i].remove();
    }

    showToast("Trimmed " + numberToRemove + " old messages.");
  }
}

function startObserver() {
  const observer = new MutationObserver(() => {
    trimMessages();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// Show injection confirmation once
showToast("ChatGPT UI Trimmer injected successfully.");

startObserver();