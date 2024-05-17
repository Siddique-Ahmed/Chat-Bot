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
  }, 1000);
}

function botMessage(userText, typingLi) {
  let botReplies = {
    hi: "hi bhai kaise ho? me apki kia madad kar sakta hoon ?",
    ih: "hi bhai kaise ho? me apki kia madad kar sakta hoon ?",
    hey: "hi bhai kaise ho? me apki kia madad kar sakta hoon ?",
    hye: "hi bhai kaise ho? me apki kia madad kar sakta hoon ?",
    yo: "hi bhai kaise ho? me apki kia madad kar sakta hoon ?",
    "assalam-o-alaikum": "walaikum assalam bhai kaise ho? ",
    asslamualaikum: "walaikum assalam bhai kaise ho? ",
    salam: "walaikum assalam bhai kaise ho? ",
    "assalam o alaikum": "walaikum assalam bhai kaise ho? ",
    hello: "hello bro how can i help you ?",
    helo: "hello bro how can i help you ?",
    hlo: "hello bro how can i help you ?",
    hleo: "hello bro how can i help you ?",
    helllo: "hello bro how can i help you ?",
    heli: "hello bro how can i help you ?",
    helli: "hello bro how can i help you ?",
    heklo: "hello bro how can i help you ?",
    hel: "hello bro how can i help you ?",
    hell: "hello bro how can i help you ?",
    "how are you": "i am fine what about you ? and how can i help you ?",
    "how are u": "i am fine what about you ? and how can i help you ?",
    "how r u": "i am fine what about you ? and how can i help you ?",
    "how aer you": "i am fine what about you ? and how can i help you ?",
    "hwo are you": "i am fine what about you ? and how can i help you ?",
    "hwo are you": "i am fine what about you ? and how can i help you ?",
    "kese ho": "me thik aap kaise ho ? me apki kia help kar sakta hoon ?",
    "kse ho": "me thik aap kaise ho ? me apki kia help kar sakta hoon ?",
    "kaise ho": "me thik aap kaise ho ? me apki kia help kar sakta hoon ?",
    "kesy ho": "me thik aap kaise ho ? me apki kia help kar sakta hoon ?",
    "kaisa he": "me thik aap kaise ho ? me apki kia help kar sakta hoon ?",
    "kaisa hai": "me thik aap kaise ho ? me apki kia help kar sakta hoon ?",
    "han mujhe kuch puchna tha ? ": "g puchiye?",
    "haan mujhy kch pochna tha ? ": "g puchiye?",
    "g han mujhe kuch puchna tha ? ": "g puchiye?",
    "g haan mujhe kuch puchna tha? ": "g puchiye?",
    "g han mujhy kuch pochna tha ? ": "g puchiye?",
    "saylani mein admission open hain ? ": "G available hain",
    "kon konse courses available hain ?": "g saylani mein abhi filhal ye course available hain PYTHON,WEB AND APP DEVELOPMENT, AI,FEMALE WEB AND APP DEVELOPMENT,GRAPHIC DESIGINING",
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
