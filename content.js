function showToast(message) {
  const toast = document.createElement("div");
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

showToast("ChatGPT UI Trimmer injected successfully.");

function countMessages() {
  const messages = document.querySelectorAll("div[data-message-author-role]");
  showToast("Message count: " + messages.length);
}

countMessages();