const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"



const displayDefinition = (event) => {
  event.preventDefault();
  const word = document.getElementById("word").value;
  // TODO: Display your age with an AJAX call instead of the console.log()
  fetch(apiUrl + word)
    .then(response => response.json())
    .then(data => {
      const definition = data[0].meanings[0].definitions[0].definition;
      const definitionElement = document.getElementById("definition");
      definitionElement.innerHTML = definition;
    })
}

const form = document.getElementById("fetch-word");
form.addEventListener("submit", displayDefinition);
