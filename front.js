//Estilização do menu
const menu = document.getElementById("menu");
const escondido = document.querySelectorAll("li");

menu.addEventListener("mouseenter", () => {
  escondido.forEach((element) => {
    element.style.visibility = "visible";
    element.style.opacity = "1";
  });
});

menu.addEventListener("mouseleave", () => {
  escondido.forEach((element) => {
    element.style.visibility = "hidden";
    element.style.opacity = "0";
  });
});

//Captação de dados do Formulário
