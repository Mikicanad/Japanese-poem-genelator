function displayPoem(response) {

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

let instructionsInput = document.querySelector("#user-instruction");
let apiKey ="3c0eca18f3a2743b8tdo8c93b0a6483f";
let context = "User instruction: You are a romantic poem expert. Write a short 4-line Japanese poem. Make sure to generate it in HTML format using <br /> for line breaks, but do not include any extra HTML tags such as <html> or <body>. End the poem with 'SheCodes AI' at the end and bottom, and inside a <strong> tag.";
let prompt = `Generate a Japanese poem about ${instructionsInput}`; 
let aipURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">⌛️Generating a Japanese poem about ${instructionsInput.value}...</ div>`

axios.get(aipURL).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);