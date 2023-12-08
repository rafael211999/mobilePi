import axios from "axios";

// Aqui eu estou criando uma "conexão de api" para poder conectar no meu backend.
const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",

})

export default api;