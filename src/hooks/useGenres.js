import genres from '../data/genre.js';

const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;