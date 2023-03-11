var userInput = document.getElementById("search");
var pokeImg = document.getElementsByClassName("poke-pic");
var pokeName = document.getElementsByClassName("pokemon-name");
var pokeNum = document.getElementsByClassName("pokemon-number");
var pokeTypeOne = document.getElementsByClassName("pokemon-type-1");
var pokeTypeTwo = document.getElementsByClassName("pokemon-type-2");

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
    //I don't think we need this for loop for the userInput.
    // for (var i = 0; i < userInput.length; i++) userInput[i].value = "";
    userInput.value = "";
  }
});

function displayPokemonInfo(data) {
  for (var i = 0; i < pokeImg.length; i++)
    pokeImg[i].src = data.sprites.front_default;
  for (var i = 0; i < pokeName.length; i++)
    pokeName[i].textContent =
      data.name.charAt(0).toUpperCase() + data.name.slice(1);
  for (var i = 0; i < pokeNum.length; i++)
    pokeNum[i].textContent = "#" + data.id;

  var pokemonType1 =
    data.types[0].type.name.charAt(0).toUpperCase() +
    data.types[0].type.name.slice(1);
  for (var i = 0; i < pokeTypeOne.length; i++)
    pokeTypeOne[i].textContent = pokemonType1;
  if (data.types[1]) {
    var pokemonType2 =
      data.types[1].type.name.charAt(0).toUpperCase() +
      data.types[1].type.name.slice(1);
    for (var i = 0; i < pokeTypeTwo.length; i++)
      pokeTypeTwo[i].textContent = pokemonType2;
  } else {
    for (var i = 0; i < pokeTypeTwo.length; i++)
      pokeTypeTwo[i].textContent = "-";
  }

  // if()
}
