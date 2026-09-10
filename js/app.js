// =====================================
// J.A.X APP
// =====================================

const chat = document.getElementById("chat");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");
const typing = document.getElementById("typing");
const backendStatus = document.getElementById("backendStatus");


// =====================================
// Check Backend
// =====================================

async function checkBackend() {

    const data = await getBackendStatus();

    if (data.success) {

        backendStatus.textContent = "🟢 Backend Online";

    } else {

        backendStatus.textContent = "🔴 Backend Offline";

    }

}


// =====================================
// Add Message
// =====================================

function addMessage(text, sender) {

    const div = document.createElement("div");

    div.className =
        sender === "user"
        ? "user-message"
        : "bot-message";

    div.innerHTML = `
        <p>${text}</p>
    `;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;

}


// =====================================
// Send Message
// =====================================

async function sendChat() {

    const message = messageInput.value.trim();

    if (!message) return;

    addMessage(message, "user");

    messageInput.value = "";

    typing.classList.remove("hidden");

    try {

        const data = await sendMessage(message);

        typing.classList.add("hidden");

        addMessage(data.reply, "bot");

    }

    catch (err) {

        typing.classList.add("hidden");

        addMessage(
            "⚠️ Unable to connect to J.A.X Backend.",
            "bot"
        );

        console.error(err);

    }

}


// =====================================
// Events
// =====================================

sendButton.addEventListener(
    "click",
    sendChat
);

messageInput.addEventListener(
    "keydown",
    (e) => {

        if (e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();

            sendChat();

        }

    }
);


// =====================================
// Startup
// =====================================

checkBackend();
