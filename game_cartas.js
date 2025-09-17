function home_page() {
  document.getElementById("voltar_home").style.display = "none";
}

function mostrar_perfil() {
  document.getElementById("perfil_player").style.display = "block";
  document.getElementById("select").style.display = "none";
  document.getElementById("voltar_home").style.display = "none";
}

function iniciar_jogo() {
  document.getElementById("top_navbar").style.display = "none";
  document.getElementById("select").style.display = "none";
  document.getElementById("voltar_home").style.display = "block";
  document.getElementById("hamburger").style.display = "none";
}

function toggleSidebar() {
  const sidebar = document.getElementById("top_navbar");
  const hamburger = document.querySelector(".hamburger");

  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "block";
  }
}

document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("top_navbar");
  const hamburger = document.querySelector(".hamburger");

  const clickedInsideSidebar = sidebar.contains(event.target);
  const clickedHamburger = hamburger.contains(event.target);

  if (sidebar.classList.contains("active") && !clickedInsideSidebar && !clickedHamburger) {
    sidebar.classList.remove("active");
    hamburger.style.display = "block";
  }
});
