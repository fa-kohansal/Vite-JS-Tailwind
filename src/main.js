import "../public/css/main.css";
import"../public/css/style.css"
import"../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const dropdownMenu = document.getElementById("dropdown-menu");

  menuButton.addEventListener("click", function () {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);

    if (!isExpanded) {
      // Show the dropdown with transition
      dropdownMenu.classList.remove("opacity-0", "scale-95");
      dropdownMenu.classList.add("opacity-100", "scale-100");
    } else {
      // Hide the dropdown with transition
      dropdownMenu.classList.remove("opacity-100", "scale-100");
      dropdownMenu.classList.add("opacity-0", "scale-95");
    }
  });
});