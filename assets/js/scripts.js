function myFunction() {
    alert("Kan dah ku bilang jangan di klik!");
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById('mobile-sidebar');
  const backdrop = document.getElementById('backdrop');

  const isOpen = sidebar.classList.contains('active');

  sidebar.classList.toggle('active');
  backdrop.classList.toggle('show');
  // const sidebar = document.getElementById('mobile-sidebar');
  // sidebar.classList.toggle('-translate-x-full');
  // sidebar.classList.toggle('translate-x-0');
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
