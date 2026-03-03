function showToast(message) {
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

function countMessages() {
  const messages = document.querySelectorAll("div[data-message-author-role]");
  showToast("Message count: " + messages.length);
}

showToast("ChatGPT UI Trimmer injected successfully.");

countMessages();