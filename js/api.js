// ======================================
// J.A.X API
// ======================================

const API = "https://jax-backend-b3pv.onrender.com";

// Health Check
export async function checkHealth() {
    const response = await fetch(`${API}/api/health`);
    return await response.json();
}

// Chat
export async function sendMessage(message) {

    const response = await fetch(`${API}/api/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message.trim()
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || data.error || "Backend request failed.");
    }

    return data;
}
