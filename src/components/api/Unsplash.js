import axios from "axios";

// Foi criado o 'axios.create' em uma pasta separada para melhorar a organização do código
// A refatoração foi feita com a importação do axios nesse arquivo(Unsplash.js) e no App.js no lugar de 'axios.get', foi colocado 'Unsplash.get'
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID j4FBTkbOkiyqNqQ0ar9nsZ6BnbSg5fD2FGi9Sb2MorI",
  },
});
