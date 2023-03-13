var userInput = document.getElementById("search");
var pokeImg = document.getElementsByClassName("poke-pic");
var pokeName = document.getElementsByClassName("pokemon-name");
var pokeNum = document.getElementsByClassName("pokemon-number");
var pokeTypeOne = document.getElementsByClassName("pokemon-type-1");
var pokeTypeTwo = document.getElementsByClassName("pokemon-type-2");
var pokeLink = document.getElementsByClassName("wiki-link");
var pokeDescription = document.getElementsByClassName("pokemon-description");
var savePokemon = document.getElementsByClassName("add-fav");
var viewFavoritePokemon = document.getElementsByClassName("view-fav");

function getPokemon() {
  var requestUrl =
    "https://pokeapi.co/api/v2/pokemon/" + userInput.value.toLowerCase();
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      wikipedia(data);
      displayPokemonInfo(data);
    });
}

function getPokemonDescription() {
  var requestUrl =
    "https://pokeapi.co/api/v2/pokemon-species/" +
    userInput.value.toLowerCase();
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayPokemonDescription(data);
    });
}

function wikipedia(data) {
  console.log(data["name"]);
  var url = "https://en.wikipedia.org/w/api.php";
  var pokemon = data["name"];
  var params = {
    action: "opensearch",
    search: pokemon,
    limit: "1",
    namespace: "0",
    format: "json",
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) {
    url += "&" + key + "=" + params[key];
  });

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayWikiLink(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function displayWikiLink(data) {
  for (var i = 0; i < pokeLink.length; i++) {
    console.log(pokeLink);
    pokeLink[i].href = data[3][0];
    console.log(pokeLink[i].href);
  }
}

userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && userInput.value === "") {
  } else if (event.key === "Enter") {
    event.preventDefault();
    getPokemon();
    getPokemonDescription();
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
}

function displayPokemonDescription(data) {
  for (var i = 0; i < pokeDescription.length; i++) {
    for (var j = 0; j < data.flavor_text_entries.length; j++) {
      if (data.flavor_text_entries[j].language.name === "en") {
        var description = data.flavor_text_entries[j].flavor_text
          .replace("\n", " ")
          .replace("\f", " ");
        break;
      }
    }
    pokeDescription[i].textContent = description;
  }
}

for (var i = 0; i < savePokemon.length; i++) {
  savePokemon[i].addEventListener("click", function () {
    localStorage.setItem("favPkmn", pokeName[0].textContent);
  });
}

for (var i = 0; i < viewFavoritePokemon.length; i++) {
  viewFavoritePokemon[i].addEventListener("click", function () {
    var favPkmn = localStorage.getItem("favPkmn");
    console.log(favPkmn);
    getFavoritePokemon(favPkmn);
  });
}

function getFavoritePokemon(favPkmn) {
  var requestUrl = "https://pokeapi.co/api/v2/pokemon/" + favPkmn.toLowerCase();
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      wikipedia(data);
      displayPokemonInfo(data);
    });
}
