import axios from 'axios'

const apiMarvelWHTOffset = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/characters?apikey=07f05d67192c439bf8203269fc153fdd&hash=a2110823d4049282bfbe666bd8e79fff&ts=1609890812920"

})

export default apiMarvelWHTOffset;
