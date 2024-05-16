const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"


const displayDefinition = (event) => {
  event.preventDefault();
  const word = document.querySelector("#word").value;
  // TODO: Display your age with an AJAX call instead of the console.log()
  fetch(apiUrl + word)
    .then(response => response.json())
    .then(data => {
      const definition = data[0].meanings[0].definitions[0].definition;
      const definitionElement = document.querySelector("#definition");
      definitionElement.innerHTML = "Definition: " + definition;

      const phonetic = data[0].phonetics[0].text;
      const phoneticElement = document.querySelector("#phonetic");
      phoneticElement.innerHTML = "Phonetic: " + phonetic;

      const synonyms = data[0].meanings[0].synonyms;
      const synonymsElement = document.querySelector('#synonyms');
      if (synonyms && synonyms.length > 0) {
        synonymsElement.innerHTML = "Synonyms: " + synonyms.join(', ');
      } else {
        synonymsElement.innerHTML = "No synonyms available.";
      }
    })
}



const form = document.querySelector("#fetch-word");
form.addEventListener("submit", displayDefinition);
// this must be placed AFTER defining dsiplayDefinition. Otherwise there is a reference error.
