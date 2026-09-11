// ======================================
// J.A.X API
// ======================================

const API = "https://jax-backend-b3pv.onrender.com";

// Health Check
async function checkHealth() {
    const response = await fetch(`${API}/api/health`);
    return await response.json();
}

// Chat
async function sendMessage(message) {

    const response = await fetch(`${API}/api/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message
        })
    });

    if (!response.ok) {
        throw new Error("Backend request failed.");
    }

    return await response.json();
}
