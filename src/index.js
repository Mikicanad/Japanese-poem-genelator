function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "From time to time, The clouds give rest, To the moon-beholders.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);