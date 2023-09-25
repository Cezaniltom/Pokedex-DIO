

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
   /*retorno da promise*/ 
   .then((response) => response.json()) //informa que o then dessa function está retornando uma promise de any

   /*retorno do primeiro then*/
    .then((jsonBody) => console.log(jsonBody)) //informa que o then dessa function é a partir de uma promise de any

    .catch((error) => console.error(error))
    
// => Significa arrow  function