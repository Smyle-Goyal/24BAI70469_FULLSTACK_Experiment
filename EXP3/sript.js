const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

// Set default theme
let theme = localStorage.getItem("theme");
if (!theme) {
    theme = "light";
    localStorage.setItem("theme", theme);
}
root.setAttribute("data-theme", theme);

// Toggle theme
toggleBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});
