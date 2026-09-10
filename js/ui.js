// =====================================
// J.A.X UI
// =====================================

const drawer = document.getElementById("drawer");
const profileBtn = document.getElementById("profileBtn");
const closeDrawer = document.getElementById("closeDrawer");

// Open Drawer
profileBtn.addEventListener("click", () => {
    drawer.classList.add("open");
});

// Close Drawer
closeDrawer.addEventListener("click", () => {
    drawer.classList.remove("open");
});

// Close when tapping outside
drawer.addEventListener("click", (e) => {
    if (e.target === drawer) {
        drawer.classList.remove("open");
    }
});

// Auto expand textarea
const textarea = document.getElementById("message");

textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
});

// Focus input when app loads
window.addEventListener("load", () => {
    textarea.focus();
});
