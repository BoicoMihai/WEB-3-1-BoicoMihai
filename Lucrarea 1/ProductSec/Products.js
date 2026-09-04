const InputBox = document.getElementById("input-box");

const saved = JSON.parse(localStorage.getItem("Content"));
if (saved !== null) {
  InputBox.value = saved;
}
 
InputBox.addEventListener("input", () => {
  localStorage.setItem("Content", JSON.stringify(InputBox.value));
});