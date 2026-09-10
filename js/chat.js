// =====================================
// J.A.X Chat Manager
// =====================================

const chatHistory = [];

function saveChat(role, content) {

    chatHistory.push({
        role,
        content,
        time: new Date().toISOString()
    });

    localStorage.setItem(
        "jax-chat-history",
        JSON.stringify(chatHistory)
    );
}

function loadChat() {

    const saved = JSON.parse(
        localStorage.getItem("jax-chat-history") || "[]"
    );

    saved.forEach(msg => {

        addMessage(
            msg.content,
            msg.role === "user" ? "user" : "bot"
        );

        chatHistory.push(msg);

    });

}
