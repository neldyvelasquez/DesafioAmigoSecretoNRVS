// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nameList = []

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let recibirNombre = inputNombre.value

    if (!recibirNombre) {
        alert ("Por favor, inserte un nombre");
        return;
    } 

    nameList.push(recibirNombre);
    inputNombre.value ="";   
    inputNombre.focus();
    listarNombres();
}

function listarNombres() {
    let listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = "";
    for (let i = 0; i < nameList.length; i++) {
        let nombre= document.createElement("li");
        nombre.textContent=nameList[i];
        listaNombres.appendChild(nombre);
    }
}

function sortearAmigo() {
    if (nameList.length < 2) {
        alert("Por favor inserte más nombres");
        return;
    }

    let indiceNombres = indiceAleatorio(); 
    alert(`El amigo secreto es: ${nameList[indiceNombres]}`);  

    document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

function indiceAleatorio() {
    return Math.floor(Math.random() * nameList.length);  
}
