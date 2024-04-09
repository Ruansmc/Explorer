function darkmode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  // pegar a tag img
  const img = document.querySelector("#profile img");
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver sem light mode, manter a imagem light
    img.setAttribute("src", "./assets/avatar.jpg");
  } else {
    // se tiver light mode, adicionar a imagem normal
    img.setAttribute("src", "./assets/avatar-light.jpeg");
  }
}
