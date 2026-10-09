let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];
console.log(fructe); 
console.log(fructe[0]);
console.log(fructe[4]);
console.log(fructe.length);

let orase = ["Chișinău", "Bălți", "Cahul"];
orase.push("Orhei");
orase.unshift("Soroca");
orase.splice(0,1);
orase.splice(3,1);
console.log(orase);

let produse = ["Pâine", "Lapte", "Ouă"];

function afiseazaLista() {
    let zona = document.getElementById("lista");
    zona.innerHTML = produse.join(" | ");
}

document.getElementById("btn-sfarsit").addEventListener("click", function () {
    let produs = document.getElementById("input").value;
    produse.push(produs);
    afiseazaLista();
});

document.getElementById("btn-inceput").addEventListener("click", function () {
    let produs = document.getElementById("input").value;
    produse.unshift(produs);
    afiseazaLista();
});

document.getElementById("btn-sterge-sfarsit").addEventListener("click", function () {
     if (produse.length === 0) {
        alert("Lista este goală!");
    } else {
        produse.pop();
        afiseazaLista();
    }
});

document.getElementById("btn-sterge-inceput").addEventListener("click", function () {
  if (produse.length === 0) {
        alert("Lista este goală!");
    } else {
        produse.shift();
        afiseazaLista();
    }
});

let elevi = [
    { nume: "Popescu Ana", varsta: 17, nota: 9 },
    { nume: "Rusu Mihai", varsta: 18, nota: 8 },
    { nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

function afiseazaElevi() {
    document.getElementById("numar").innerHTML = "Numar de elevi: " + elevi.length;

    let catalog = document.getElementById("catalog");
    catalog.innerHTML = "";

    elevi.forEach(function (elev, index) {
        catalog.innerHTML +=
            "<p><b>" + (index + 1) + ". " + elev.nume + "</b><br>" +
            "Vârsta: " + elev.varsta + "<br>" +
            "Nota: " + elev.nota + "</p>";
    });
}

function adaugaElev() {
    let nume = document.getElementById("nume").value.trim();
    let varsta = Number(document.getElementById("varsta").value);
    let nota = Number(document.getElementById("nota").value);

    if (nume === "" || varsta <= 0 || nota < 1 || nota > 10) {
        alert("Completeaza corect toate campurile (nota intre 1 si 10)!");
        return;
    }

    let elevNou = {
        nume: nume,
        varsta: varsta,
        nota: nota
    };

    elevi.push(elevNou);

    document.getElementById("nume").value = "";
    document.getElementById("varsta").value = "";
    document.getElementById("nota").value = "";

    afiseazaElevi();
}

function stergeElev() {
    let numeCautat = document.getElementById("nume-sterge").value.trim().toLowerCase();
    let mesaj = document.getElementById("mesaj-sterge");

    let elevGasit = elevi.find(function (elev) {
        return elev.nume.toLowerCase() === numeCautat;
    });

    if (elevGasit) {
        let pozitie = elevi.indexOf(elevGasit);
        elevi.splice(pozitie, 1);
        mesaj.innerHTML = "Elevul " + elevGasit.nume + " a fost sters.";
    } else {
        mesaj.innerHTML = "Elevul nu a fost gasit";
    }

    document.getElementById("nume-sterge").value = "";
    afiseazaElevi();
}

function cautaElev() {
    let numeCautat = document.getElementById("nume-cauta").value.trim().toLowerCase();
    let rezultat = document.getElementById("rezultat-cautare");

    let elevGasit = elevi.find(function (elev) {
        return elev.nume.toLowerCase() === numeCautat;
    });

    if (elevGasit) {
        rezultat.innerHTML =
            "<p><b>Elev gasit</b><br>" +
            "Nume: " + elevGasit.nume + "<br>" +
            "Vârsta: " + elevGasit.varsta + "<br>" +
            "Nota: " + elevGasit.nota + "</p>";
    } else {
        rezultat.innerHTML = "<p>Elevul nu a fost gasit</p>";
    }
}

document.getElementById("btn-adauga").addEventListener("click", adaugaElev);
document.getElementById("btn-sterge").addEventListener("click", stergeElev);
document.getElementById("btn-cauta").addEventListener("click", cautaElev);

afiseazaElevi();