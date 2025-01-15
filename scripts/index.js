document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("input[value='Buscar']").addEventListener("click", searchMessages);

  const deleteMessagesButton = document.querySelectorAll(".secondary")[1];
  deleteMessagesButton.addEventListener("click", deleteMessages);
});

const historialDeMissatges = [];
const usuaris = [];

function addMessage(event) {
  console.log("Afegint missatge ...");
  event.preventDefault();

  const user = document.querySelector("input[name='user']").value.trim();
  const message = document.querySelector("input[name='message']").value.trim();

  if (!user || !message) {
    alert("Introdueix un Usuari i el missatge!");
    return;
  }

  const normalizedUser = user.toLowerCase(); // Normalizamos el usuario a minúsculas

  const dataActual = new Date();
  const dataFinal = dataActual.toLocaleDateString("es-ES") + " " + dataActual.toLocaleTimeString("es-ES").slice(0, 5); // Solo hh:mm

  const missatge = { username: user, message: message, date: dataFinal };
  historialDeMissatges.push(missatge);

  const missatgeJSON = JSON.stringify(missatge);
  console.log(missatgeJSON);

  document.getElementById("countMessages").textContent = historialDeMissatges.length;

  updateOutput();

  // Comprobamos si el usuario ya existe en la lista de usuarios normalizados
  if (!usuaris.some(existingUser => existingUser.toLowerCase() === normalizedUser)) {
    usuaris.push(user); // Añadimos el usuario original para mostrarlo en su formato
    updateUserButtons();
  }

  document.querySelector("input[name='user']").value = "";
  document.querySelector("input[name='message']").value = "";
}

function updateOutput() {
  const output = document.getElementById("output");
  output.innerHTML = historialDeMissatges.length
    ? historialDeMissatges
        .map(
          msg => `
          <p class="message_box">
              <span class="user">${msg.username}:</span>
              <span class="message">${msg.message}</span>
              <span class="date"><small>(${msg.date})</small></span>
          </p>`
        )
        .join("")
    : "<p>No hi ha missatges!</p>";
}

function searchMessages(event) {
  event.preventDefault();

  if (!historialDeMissatges.length) return alert("No hi ha missatges a la llista!");

  const searchQuery = document.getElementById("input_search").value.trim().toLowerCase();
  if (!searchQuery) return;

  const searchResults = historialDeMissatges.filter(msg => msg.message.toLowerCase().includes(searchQuery));

  const searchResultsList = document.getElementById("searchResults");
  searchResultsList.innerHTML = searchResults.length
    ? searchResults
        .map(
          msg =>
            `<li>${msg.username}: ${msg.message} <small>(${msg.date})</small></li>`
        )
        .join("")
    : "<li>0 resultats trobats!</li>";

  toggleModal(event);
  document.getElementById("input_search").value = "";
}

function updateUserButtons() {
  const actionButtons = document.querySelector(".action_buttons");
  const newUser = usuaris[usuaris.length - 1];

  const userButton = document.createElement("div");
  userButton.classList.add("outline", "user-filter");
  userButton.dataset.user = newUser;
  userButton.textContent = `Mostra missatges de ${newUser}`;
  userButton.setAttribute("role", "button");

  userButton.addEventListener("click", event => {
    const user = event.target.dataset.user;
    const filteredMessages = historialDeMissatges.filter(msg => msg.username === user);
    updateFilteredOutput(filteredMessages);
  });

  actionButtons.appendChild(userButton);
}

function updateFilteredOutput(messages) {
  const output = document.getElementById("output");
  output.innerHTML = messages
    .map(
      msg => `
      <p class="message_box">
          <span class="user">${msg.username}:</span>
          <span class="message">${msg.message}</span>
          <span class="date"><small>(${msg.date})</small></span>
      </p>`
    )
    .join("");
}

document.getElementById("showAllMessages").addEventListener("click", updateOutput);

function deleteMessages() {
  historialDeMissatges.length = 0;
  usuaris.length = 0;

  document.getElementById("countMessages").textContent = 0;
  updateOutput();

  const actionButtons = document.querySelector(".action_buttons");
  actionButtons.innerHTML = "";
}

