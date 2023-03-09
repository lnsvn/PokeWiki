function getPokemon() {
  var requestUrl = "https://pokeapi.co/api/v2/pokemon/gholdengo";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getPokemon();

// Open Modal
// needs fixing
// $(document).ready(function(){
//   $('#modal1').openModal();
// });