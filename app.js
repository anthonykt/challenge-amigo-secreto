

const amigos = [];

const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultadoEl = document.getElementById('resultado');

function actualizarLista() {

    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

}

function agregarAmigo() {
    const nombre = (inputAmigo.value || "").trim();

    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        inputAmigo.focus();
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = "";
    inputAmigo.focus();

    actualizarLista();

}

function sortearAmigo() {

    if (amigos.length === 0) {
        resultadoEl.innerHTML = "<li>No hay amigos para sortear.</li>"
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);

    const elegido = amigos[indice];

    resultadoEl.innerHTML = `<li>🎉Tu amigo secreto es: <strong>${elegido}</strong></li>`;

}

inputAmigo.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
});