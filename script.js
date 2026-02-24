const toggleBtn = document.getElementById("themeToggle");

function setTheme(mode) {
    if (mode === "light") {
        document.documentElement.classList.add("light-mode");
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.classList.remove("light-mode");
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
}

/* Detect device preference on first load */
(function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
    }
})();

toggleBtn.addEventListener("click", () => {
    const isLight = document.documentElement.classList.contains("light-mode");
    setTheme(isLight ? "dark" : "light");
});
// Letter by letter animation
const title = document.querySelector(".intro-title");

if (title) {
    const text = title.textContent;
    title.textContent = "";

    text.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.15}s`;
        title.appendChild(span);
    });
}