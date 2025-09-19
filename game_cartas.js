window.onload = function() {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (usuarioLogado && usuarioLogado.nome) {
    document.getElementById("nickname_player").textContent = `Nome: ${usuarioLogado.nome}`;
  }
};

function home_page() {
  document.getElementById("voltar_home").style.display = "none";
  document.getElementById("cartas").style.display = "none";
  document.getElementById("top_navbar").style.display = "block";
}

function mostrar_perfil() {
  document.getElementById("perfil_player").style.display = "block";
  document.getElementById("select").style.display = "none";
  document.getElementById("voltar_home").style.display = "block";
  document.getElementById("top_navbar").style.display = "none";

  mostrarTempoPerfil();
}

function iniciar_jogo() {
  document.getElementById("select").style.display = "none";
  document.getElementById("voltar_home").style.display = "block";
  document.getElementById("perfil_player").style.display = "none";
  document.getElementById("top_navbar").style.display = "none";
}

let horasAcumuladas = parseFloat(localStorage.getItem("horasAcumuladas")) || 0;

let entradaSessao = Date.now();

function salvarTempo() {
  const agora = Date.now();
  const tempoSessao = (agora - entradaSessao) / (100 * 60 * 60);

  horasAcumuladas += tempoSessao;
  localStorage.setItem("horasAcumuladas", horasAcumuladas);

  entradaSessao = agora;
}

function mostrarTempoPerfil() {
  const horasSalvas = parseFloat(localStorage.getItem("horasAcumuladas")) || 0;
  document.getElementById("game_timer").innerText = horasSalvas.toFixed(2);
}

setInterval(salvarTempo, 1000);

window.addEventListener("beforeunload", salvarTempo);