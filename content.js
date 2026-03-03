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

// Wait for ChatGPT messages to load (React timing fix)
function waitForMessages() {
  console.log("Observer started...");

  const observer = new MutationObserver((mutations) => {
    console.log("DOM mutation detected");

    const messages = document.querySelectorAll("div[data-message-author-role]");
    console.log("Current message count:", messages.length);

    if (messages.length > 0) {
      console.log("Messages found. Showing toast.");
      showToast("Message count: " + messages.length);
      observer.disconnect();
      console.log("Observer disconnected.");
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// Show injection confirmation once
showToast("ChatGPT UI Trimmer injected successfully.");

// Then wait for actual messages
countMessages();