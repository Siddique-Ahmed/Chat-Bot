let userMsg = document.querySelector("#userText");
let sendBtn = document.querySelector("#sendBtn");
let typing = document.querySelector("#typing");

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let userText = userMsg.value.trim().toLowerCase();
  if (userText !== "") {
    handleUserMessage(userText);
  }
});

userMsg.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    let userText = userMsg.value.trim().toLowerCase();
    if (userText !== "") {
      handleUserMessage(userText);
    }
  }
});

function handleUserMessage(userText) {
  let botMsg = document.querySelector("#messages");

  let userLi = document.createElement("li");
  userLi.textContent = userText;
  userLi.classList.add("userMessages");
  botMsg.appendChild(userLi);

  // Create typing indicator element
  let typingLi = document.createElement("li");
  typingLi.textContent = "Typing...";
  typingLi.classList.add("typing");
  botMsg.appendChild(typingLi);

  // Clear the input field
  userMsg.value = "";

  // Scroll to the bottom
  botMsg.scrollTop = botMsg.scrollHeight;

  // Set timeout for bot reply
  setTimeout(() => {
    botMessage(userText, typingLi);
  }, 1500); // 2000 ms = 2 seconds
}

function botMessage(userText, typingLi) {
  let botReplies = {
    hi: "hi bhai kaise ho?",
    hello: "hi bhai mein apki kia help kar sakta hoon?",
    "assalam o alaikum": "walaikum assalam kaise ho?",
    "me thik hoon aap kaise ho": "mein bhi thik hoon koi help kar sakta hoon kia apki ?",
    "g ik help chahiye thi": "g puchein me apki help karn ki puri koshish karunga",
  };

  // Remove typing indicator
  typingLi.remove();

  // Create bot message element
  let botLi = document.createElement("li");
  let botReply = botReplies[userText.toLowerCase()];
  if (botReply) {
    botLi.textContent = botReply;
  } else {
    botLi.textContent = "Sorry, I didn't understand that.";
  }
  botLi.classList.add("botMessages");

  // Append bot message
  let botMsg = document.querySelector("#messages");
  botMsg.appendChild(botLi);

  // Scroll to the bottom
  botMsg.scrollTop = botMsg.scrollHeight;
}
