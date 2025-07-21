function register() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, pass)
    .then(() => location.href = "dashboard.html")
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => location.href = "dashboard.html")
    .catch(err => alert(err.message));
}

function logout() {
  auth.signOut().then(() => location.href = "index.html");
}