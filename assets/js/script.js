var userInput = document.getElementById("search");
var pokeImg = document.getElementById("poke-pic");
var pokeName = document.getElementById("pokemon-name");
var pokeNum = document.getElementById("pokemon-number");
var pokeTypeOne = document.getElementById("pokemon-type-1");
var pokeTypeTwo = document.getElementById("pokemon-type-2");

function getPokemon() {
  var requestUrl =
    "https://pokeapi.co/api/v2/pokemon/" + userInput.value.toLowerCase();
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayPokemonInfo(data);
    });
}
userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getPokemon();
    userInput.value = "";
  }
});

function displayPokemonInfo(data) {
  pokeImg.src = data.sprites.front_default;
  pokeName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  pokeNum.textContent = "#" + data.id;
  var pokemonType1 =
    data.types[0].type.name.charAt(0).toUpperCase() +
    data.types[0].type.name.slice(1);
  pokeTypeOne.textContent = pokemonType1;
  if (data.types[1]) {
    var pokemonType2 =
      data.types[1].type.name.charAt(0).toUpperCase() +
      data.types[1].type.name.slice(1);
    pokeTypeTwo.textContent = pokemonType2;
  } else {
    pokeTypeTwo.textContent = " ";
  }

  // if()
}
