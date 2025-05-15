function myFunction() {
    alert("Kan dah ku bilang jangan di klik!");
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
    const iconImg = document.getElementById("theme-icon");
    const body = document.body;

    const sunIcon = "/assets/images/hidup.png";
    const moonIcon = "/assets/images/mati.png";

    // Cek preferensi
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark");
      iconImg.src = sunIcon;
    }

    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark");
      const isDark = body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      iconImg.src = isDark ? sunIcon : moonIcon;
    });
  });
