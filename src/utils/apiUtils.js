import { detectLang } from "./generalUtils";
import globals from "../globals";

export const apiUrls = {
  urlPopularMovies: (page) => {
    const baseUrl = globals.apiTMDB.baseUrl;
    const type = globals.apiTMDB.type.popularMovies;
    const key = globals.apiTMDB.key;
    const language = globals.apiTMDB.language[detectLang()];
    const pagination = globals.apiTMDB.pagination + page;

    const url = `${baseUrl}${type}${key}${language}${pagination}`;

    return url;
  },

  urlMovieById: (id) => {
    const baseUrl = globals.apiTMDB.baseUrl;
    const type = globals.apiTMDB.type.movie;
    const key = globals.apiTMDB.key;
    const language = globals.apiTMDB.language[detectLang()];

    const url = `${baseUrl}${type}/${id}${key}${language}`;

    return url;
  },

  urlPopularTv: (page) => {
    const baseUrl = globals.apiTMDB.baseUrl;
    const type = globals.apiTMDB.type.popularTv;
    const key = globals.apiTMDB.key;
    const language = globals.apiTMDB.language[detectLang()];
    const pagination = globals.apiTMDB.pagination + page;

    const url = `${baseUrl}${type}${key}${language}${pagination}`;

    return url;
  },

  urlTvById: (id) => {
    const baseUrl = globals.apiTMDB.baseUrl;
    const type = globals.apiTMDB.type.tv;
    const key = globals.apiTMDB.key;
    const language = globals.apiTMDB.language[detectLang()];

    const url = `${baseUrl}${type}/${id}${key}${language}`;

    return url;
  },
  urlDiscoverMovies: (page) => {
    const baseUrl = globals.apiTMDB.baseUrl;
    const type = globals.apiTMDB.type.dicoveredMovie;
    const key = globals.apiTMDB.key;
    const language = globals.apiTMDB.language[detectLang()];
    const pagination = globals.apiTMDB.pagination + page;

    const url = `${baseUrl}${type}${key}${language}${pagination}`;

    return url;
  },
  urlDiscoverTv: (page) => {
    const baseUrl = globals.apiTMDB.baseUrl;
    const type = globals.apiTMDB.type.dicoveredTv;
    const key = globals.apiTMDB.key;
    const language = globals.apiTMDB.language[detectLang()];
    const pagination = globals.apiTMDB.pagination + page;

    const url = `${baseUrl}${type}${key}${language}${pagination}`;

    return url;
  },
};

export const apiImages = {
  poster: (posterPath, quality = "medium") => {
    let config;

    switch (quality) {
      case "small":
        config = globals.apiTMDB.quality.posterSmall;
        break;
      case "medium":
        config = globals.apiTMDB.quality.posterMedium;
        break;
      case "large":
        config = globals.apiTMDB.quality.posterLarge;
        break;

      default:
        config = globals.apiTMDB.quality.posterMedium;
        break;
    }

    const baseUrl = globals.apiTMDB.posterUrl;
    const url = `${baseUrl}${config}${posterPath}`;

    return url;
  },
  backdrop: (backdropPath, quality = "medium") => {
    let config;

    switch (quality) {
      case "small":
        config = globals.apiTMDB.quality.backdropSmall;
        break;
      case "medium":
        config = globals.apiTMDB.quality.backdropMedium;
        break;
      case "large":
        config = globals.apiTMDB.quality.backdropLarge;
        break;

      default:
        config = globals.apiTMDB.quality.backdropMedium;
        break;
    }

    const baseUrl = globals.apiTMDB.backdropUrl;
    const url = `${baseUrl}${config}${backdropPath}`;

    return url;
  },
  config: {
    small: "small",
    medium: "medium",
    large: "large",
  },
};
