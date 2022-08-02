var login;

function showLoginLoad(control) {
  login.innerHTML = control
    ? "<div id='page-load' style='display: flex;' class='load'></div>"
    : "Login";
  login.style.backgroundColor = control ? "#2562FF" : "#C4C4C4";
}
async function handleLogin(e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("pass").value;

  if (password.length < 8) {
    // showBanner é uma função em ./scrips/banner.js
    showBanner("error", "A senha deve conter 8 caracteres");
    return;
  }

  showLoginLoad(true);
  //try {
    // response retorna true para sucesso, e false para error
  //  const auth = new Auth();
  //  console.log(login);
  // const response = await auth.login(username, password); //Auth é um classe em ./scripts/Auth.js
  //  if (response) {
  //    showBanner("success", "Login realizado com sucesso");
  //    window.location.href = "../ListCustomers/index.html";
  // } else {
  //    showBanner("error", "Usuário ou senha inválidos");
  //  }
  //} catch (e) {
  //  showBanner("error", "Desconhecido!");
  //} finally {
  // showLoginLoad(false);
  //}

  window.location.href = "../ListCustomers/index.html";
  showLoginLoad(false);
}
//<div id="page-load" class="load"></div>

function init(){
  login = document.querySelector("#login")
  const form = document.querySelector("#form-login")
  form.addEventListener('submit', handleLogin)
}