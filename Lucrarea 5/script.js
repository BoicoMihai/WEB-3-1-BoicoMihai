// Task 1: the array holding all students
let students = [
  { id: 1, name: "Boico Mihai", group: "DAW-241", age: 18, major: "Informatică", avatar: "avatar.png" },
  { id: 2, name: "Culbida Mihail", group: "DAW-241", age: 17, major: "Design Web", avatar: "avatar.png" },
  { id: 3, name: "Voljin Polina", group: "DAW-241", age: 18, major: "Sisteme informatice", avatar: "avatar.png" },
  { id: 4, name: "Bogatu Alexei", group: "DAW-241", age: 17, major: "Securitate cibernetică", avatar: "avatar.png" },
  { id: 5, name: "Caliniuc Nichita", group: "DAW-241", age: 18, major: "Informatică", avatar: "avatar.png" }
];

let nextId = 6;

const list = document.getElementById("list");
const count = document.getElementById("count");
const error = document.getElementById("error");

function render() {
  list.innerHTML = "";
  count.textContent = students.length;

  if (students.length === 0) {
    list.textContent = "Nu există studenți în listă.";
    return;
  }

  students.forEach(s => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${s.avatar}" alt="${s.name}" width="100">
      <h3>${s.name}</h3>
      <p>Grupa: ${s.group}</p>
      <p>Vârsta: ${s.age}</p>
      <p>Specialitatea: ${s.major}</p>
      <button data-id="${s.id}">Șterge</button>
    `;
    list.appendChild(card);
  });
}

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const group = document.getElementById("group").value.trim();
  const ageText = document.getElementById("age").value.trim();
  const major = document.getElementById("major").value.trim();

  if (!name || !group || !ageText || !major) {
    error.textContent = "Boico gay.";
    return;
  }

  const age = Number(ageText);
  if (!Number.isInteger(age) || age < 14 || age > 100) {
    error.textContent = "Vârsta trebuie să fie un număr întreg între 14 și 100.";
    return;
  }

  error.textContent = "";
  const id = nextId++;
  students.push({ id, name, group, age, major, avatar: "avatar.png" });
  e.target.reset();
  render();
});

list.addEventListener("click", e => {
  const id = e.target.dataset.id;
  if (!id) return;
  students = students.filter(s => s.id !== Number(id));
  render();
});

document.querySelectorAll("button[data-prop]").forEach(btn => {
  btn.addEventListener("click", () => {
    list.style[btn.dataset.prop] = btn.dataset.val;
  });
});

document.getElementById("gap").addEventListener("input", e => {
  list.style.gap = e.target.value + "px";
  document.getElementById("gapValue").textContent = e.target.value;
});

render();