// ========================
// Toast Notification Logic
// ========================

function showToast(message) {
  // Remove any existing toast so multiple notifications don't overlap
  const existingToast = document.querySelector(".chatgpt-toast");
  if (existingToast) existingToast.remove();

  // Create a new toast element
  const toast = document.createElement("div");
  toast.classList.add("chatgpt-toast");
  toast.textContent = message;

  // Apply inline styles for positioning and appearance
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

  // Add toast to page
  document.body.appendChild(toast);

  // Automatically remove toast after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}


// ========================
// Message Trimming Logic
// ========================

function trimMessages() {
  // ChatGPT messages contain the attribute `data-message-author-role`
  // We select all messages in DOM order (oldest → newest)
  const messages = document.querySelectorAll("div[data-message-author-role]");

  // Only trim if more than 10 messages are present
  if (messages.length > 10) {
    const numberToRemove = messages.length - 10;

    // Remove the oldest messages first
    for (let i = 0; i < numberToRemove; i++) {
      messages[i].remove();
    }

    showToast("Trimmed " + numberToRemove + " old messages.");
  }
}


// ========================
// DOM Observer
// ========================

function startObserver() {
  // ChatGPT renders messages dynamically using React.
  // We observe DOM changes so trimming happens whenever
  // new messages appear or a conversation thread loads.
  const observer = new MutationObserver(() => {
    trimMessages();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}


// ========================
// Extension Initialization
// ========================

// Notify that the extension has been injected
showToast("ChatGPT UI Trimmer injected successfully.");

// Start watching the page for message changes
startObserver();