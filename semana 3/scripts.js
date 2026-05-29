
const form = document.getElementById("form");
const text = document.getElementById("text");
const button = document.getElementById("button");
const list = document.getElementById("list");

console.log(form);
console.log(text);
console.log(button);
console.log(list);
let arraynotas = JSON.parse(localStorage.getItem("notas")) || [];
cargarNotas();

form.addEventListener("submit", agregar);

function agregar(event) {
    event.preventDefault();
    if (text.value === "") {
        alert("no hay nada");
        text.focus();
        return;
    }

    const content = text.value
    const notas = document.createElement("li");

    notas.textContent = text.value;
    arraynotas.push(text.value)
    localStorage.setItem('notas', JSON.stringify(arraynotas))

    const deleteli = document.createElement("button")
    deleteli.textContent = "delete";
    deleteli.addEventListener("click", function () {
        for (let i = 0; i < arraynotas.length; i++) {
            if (arraynotas[i] === content) {
                arraynotas.splice(i, 1);
                break;

            }
        }

        list.removeChild(notas);
        console.log("you delete");

    });
    notas.appendChild(deleteli);
    list.appendChild(notas);
    text.value = "";

    text.focus();
    console.log("se agrego nota");
    console.log(arraynotas);

}
function cargarNotas() {
    arraynotas.forEach(function (even) {
        const notas = document.createElement("li");
        notas.textContent = even;

        const deleteli = document.createElement("button");
        deleteli.textContent = "delete";
        deleteli.addEventListener("click", function () {
            for (let i = 0; i < arraynotas.length; i++) {
                if (arraynotas[i] === even) {
                    arraynotas.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("notas", JSON.stringify(arraynotas));
            list.removeChild(notas);
        });

        notas.appendChild(deleteli);
        list.appendChild(notas);
    });
}
