var userInput = document.getElementById("search");

function getPokemon() {
  var requestUrl = "https://pokeapi.co/api/v2/pokemon/" + userInput.value;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
<<<<<<< HEAD
userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getPokemon();
    userInput.value = "";
  }
});
=======

getPokemon();

// Open Modal
// needs fixing
// $(document).ready(function(){
//   $('#modal1').openModal();
// });
>>>>>>> 74947d228108dc92ebe3b846eb8cfee3e1917a09
