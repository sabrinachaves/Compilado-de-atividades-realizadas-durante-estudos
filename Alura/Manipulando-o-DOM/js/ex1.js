let texto =  document.getElementById('texto');
let botaoDark = document.getElementById('btn');

texto.innerText = "O inverno já chegou!"

botaoDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
})