// =====================================
// J.A.X API
// =====================================

const API_BASE = "https://jax-backend-b3pv.onrender.com";

// =====================================
// Backend Status
// =====================================

async function getBackendStatus() {

    try {

        const response = await fetch(`${API_BASE}/api/health`);

        return await response.json();

    } catch (error) {

        return {
            success: false,
            status: "offline"
        };

    }

}

// =====================================
// Chat
// =====================================

async function sendMessage(message) {

    const response = await fetch(`${API_BASE}/api/chat`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            message
        })

    });

    if (!response.ok) {

        throw new Error("Unable to contact backend.");

    }

    return await response.json();

}

// =====================================
// Voice
// =====================================

async function textToSpeech(text) {

    const response = await fetch(`${API_BASE}/api/voice`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            text
        })

    });

    return await response.blob();

}
