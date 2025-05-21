function sendMessage() {
  const input = document.getElementById("user-input");
  const msg = input.value.trim();
  if (!msg) return;

  addMessage("You", msg, "user");
  input.value = "";

  setTimeout(() => {
    const botReply = generateBotReply(msg);
    addMessage("Bot", botReply, "bot");
  }, 1000);
}

function addMessage(sender, text, cls) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${cls}`;
  msgDiv.innerText = `${sender}: ${text}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotReply(message) {
  const replies = [
    "That's interesting!",
    "Tell me more!",
    "I'm just a bot, but I care!",
    "Can you repeat that?",
    "Cool story!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}
