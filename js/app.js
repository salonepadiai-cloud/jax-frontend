// ======================================
// J.A.X Frontend
// ======================================

const chat = document.getElementById("chat");
const input = document.getElementById("message");
const send = document.getElementById("send");
const typing = document.getElementById("typing");
const backendStatus = document.getElementById("backendStatus");

// ==========================
// Backend Status
// ==========================

async function init() {

    try {

        const health = await checkHealth();

        backendStatus.textContent =
            health.success
                ? "🟢 Backend Online"
                : "🔴 Backend Offline";

    } catch {

        backendStatus.textContent = "🔴 Backend Offline";

    }

}

// ==========================
// Add Message
// ==========================

function addMessage(text, sender) {

    const div = document.createElement("div");

    div.className =
        sender === "user"
            ? "user-message"
            : "bot-message";

    div.innerHTML = `<p>${text}</p>`;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;

}

// ==========================
// Send Message
// ==========================

async function chatWithJAX() {

    const message = input.value.trim();

    if (!message) return;

    addMessage(message, "user");

    input.value = "";

    typing.classList.remove("hidden");

    try {

        const result = await sendMessage(message);

        typing.classList.add("hidden");

        addMessage(result.reply, "bot");

    } catch (error) {

        typing.classList.add("hidden");

        addMessage(
            "❌ Failed to contact J.A.X Backend.",
            "bot"
        );

        console.error(error);

    }

}

// ==========================
// Events
// ==========================

send.onclick = chatWithJAX;

input.addEventListener("keydown", (e) => {

    if (e.key === "Enter" && !e.shiftKey) {

        e.preventDefault();

        chatWithJAX();

    }

});

// ==========================
// Start
// ==========================

init();
