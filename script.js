function escrever() {
  var app = document.getElementById("txt");

  var typewriter = new Typewriter(app, {
    loop: true,
  });

  typewriter
    .typeString("Matheus <span class='cor-text-secundario'>Claubert</span>")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Desenvolvedor <span class='cor-text-secundario'>Web</span>")
    .pauseFor(2500)
    .deleteAll()
    .start();
}
escrever();
