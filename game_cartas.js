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
}