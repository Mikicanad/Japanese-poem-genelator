function displayPoem(response) {
    console.log("poem generatated");
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
let context="User instruction: You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br /> Make sure to follow the user instructions. Do not include the title to the poem. Sign the poem with 'SheCodes AI' inside a <strong>element.";
let prompt=`Generate a Japanese poem about ${instructionsInput} `;
let aipURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


console.log("Generating poem");
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);

axios.get(aipURL).then(displayPoem);

  
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);