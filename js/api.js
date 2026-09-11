// ======================================
// File: js/api.js
// ======================================

const API = "https://jax-backend-b3pv.onrender.com";

// ==========================
// Health Check
// ==========================
async function checkHealth() {

    const response = await fetch(`${API}/api/health`);

    if (!response.ok) {
        throw new Error("Backend is offline.");
    }

    return await response.json();

}

// ==========================
// Send Chat
// ==========================
async function sendMessage(message) {

    const response = await fetch(`${API}/api/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message.trim()
        })
    });

    let data;

    try {
        data = await response.json();
    } catch {
        throw new Error("Invalid response from backend.");
    }

    if (!response.ok) {
        throw new Error(data.message || data.error || "Backend request failed.");
    }

    return data;

}
