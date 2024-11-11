function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}


document.addEventListener("DOMContentLoaded", () => {
    const introParagraph = document.querySelector(".intro");
    const words = introParagraph.innerText.split(" ");
    introParagraph.innerHTML = words
        .map(word => `<span>${word}</span>`)
        .join(" ");
});
