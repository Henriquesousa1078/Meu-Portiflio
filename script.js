const menu = document.getElementById("menuPrincipal");
const colapso = bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false });

document.querySelectorAll("#menuPrincipal .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        if (menu.classList.contains("show")) colapso.hide();
    });
});
document.getElementById("ano").textContent = new Date().getFullYear();
