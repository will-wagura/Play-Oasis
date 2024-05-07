import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
   ...import.meta.env,
    key: import.meta.env.RAWG_API_KEY,
  },
});