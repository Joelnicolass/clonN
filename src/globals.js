const globals = {
  apiTMDB: {
    baseUrl: "https://api.themoviedb.org/3",
    type: {
      tv: "/tv",
      movie: "/movie",
      person: "/person",
      searchMovie: "/search/movie",
      searchTv: "/search/tv",
      searchPerson: "/search/person",
      popularMovies: "/movie/popular",
      popularTv: "/tv/popular",
      topRatedMovie: "/movie/top_rated",
      topRatedTv: "/tv/top_rated",
      dicoveredMovie: "/discover/movie",
      dicoveredTv: "/discover/tv",
    },
    key: "?api_key=4731f843be0ef719c516f748dad07f59",
    language: {
      en: "&language=en-US",
      es: "&language=es-ES",
    },
    posterUrl: "https://image.tmdb.org/t/p",
    backdropUrl: "https://image.tmdb.org/t/p",
    quality: {
      posterSmall: "/w200",
      posterMedium: "/w300",
      posterLarge: "/w500",
      backdropSmall: "/w300",
      backdropMedium: "/w780",
      backdropLarge: "/w1280",
    },
    pagination: "&page=",
  },
};

export default globals;
