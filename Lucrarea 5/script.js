// Task 1: the array holding all students
let students = [
  { id: 1, name: "Ion Popescu", group: "TI-21", age: 19, major: "Informatică", avatar: "avatar.png" },
  { id: 2, name: "Maria Rusu", group: "TI-22", age: 20, major: "Design Web", avatar: "avatar.png" },
  { id: 3, name: "Andrei Ceban", group: "SI-21", age: 21, major: "Sisteme informatice", avatar: "avatar.png" },
  { id: 4, name: "Elena Munteanu", group: "SI-22", age: 18, major: "Securitate cibernetică", avatar: "avatar.png" },
  { id: 5, name: "Vlad Lungu", group: "TI-23", age: 19, major: "Informatică", avatar: "avatar.png" },
  { id: 6, name: "Ana Botnaru", group: "SI-23", age: 22, major: "Rețele", avatar: "avatar.png" }
];

let nextId = 7;

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

// Task 2: add a student from the form
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const group = document.getElementById("group").value.trim();
  const ageText = document.getElementById("age").value.trim();
  const major = document.getElementById("major").value.trim();

  if (!name || !group || !ageText || !major) {
    error.textContent = "Completați toate câmpurile.";
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

// Task 3: delete by ID
list.addEventListener("click", e => {
  const id = e.target.dataset.id;
  if (!id) return;
  students = students.filter(s => s.id !== Number(id));
  render();
});

// Task 4: flexbox controls
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