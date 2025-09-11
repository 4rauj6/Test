
function cadastrar(event) {
  event.preventDefault();
  
  const nome = document.getElementById("username_input").value.trim();
  const email = document.getElementById("email_input").value.trim();
  const senha = document.getElementById("senha_input").value.trim();
  const msg = document.getElementById("link_login");

  if(!nome || !email || !senha) {
    msg.textContent = "⚠️ Preencha todos os campos!";
    return;
  }


  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


  const existe = usuarios.some(u => u.nome === nome || u.email === email);
  if(existe) {
    msg.textContent = "❌ Usuário ou e-mail já cadastrado!";
    return;
  }


  usuarios.push({nome, email, senha});
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  msg.textContent = "✅ Cadastro realizado com sucesso!";

  setTimeout(() => {
    login_redirect();
  }, 1500);
}

function logar(event) {
  event.preventDefault();

  const nome = document.getElementById("name_account").value.trim();
  const senha = document.getElementById("senha_account").value.trim();
  const msg = document.getElementById("cadastro_link");

  if(!nome || !senha) {
    msg.textContent = "⚠️ Preencha todos os campos!";
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioEncontrado = usuarios.find(u => u.nome === nome && u.senha === senha);

  if(usuarioEncontrado) {
    msg.textContent = "✅ Login realizado com sucesso!";
  } else {
    msg.textContent = "❌ Usuário ou senha incorretos!";
  }
}

function login_redirect() {
  document.getElementById("cadastro_page").style.display = "none";
  document.getElementById("login_page").style.display = "block";
}

function cadastro_redirect() {
  document.getElementById("login_page").style.display = "none";
  document.getElementById("cadastro_page").style.display = "block";
}

window.onload = function() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  if(usuarios.length > 0) {
    login_redirect();
  }
};
