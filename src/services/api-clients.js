import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: `${import.meta.env.RAWG_API_KEY}`,
  },
});