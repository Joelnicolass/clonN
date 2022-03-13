import { detectLang } from "./generalUtils";
import globals from "../globals";

export const apiUrls = {
  urlPopularMovies: (page) => {
    const baseUrl = globals.api.baseUrl;
    const type = globals.api.type.popularMovies;
    const key = globals.api.key;
    const language = globals.api.language[detectLang()];
    const pagination = globals.api.pagination + page;

    const url = `${baseUrl}${type}${key}${language}${pagination}`;

    return url;
  },

  urlMovieById: (id) => {
    const baseUrl = globals.api.baseUrl;
    const type = globals.api.type.movie;
    const key = globals.api.key;
    const language = globals.api.language[detectLang()];

    const url = `${baseUrl}${type}/${id}${key}${language}`;

    return url;
  },

  urlPopularTv: (page) => {
    const baseUrl = globals.api.baseUrl;
    const type = globals.api.type.popularTv;
    const key = globals.api.key;
    const language = globals.api.language[detectLang()];
    const pagination = globals.api.pagination + page;

    const url = `${baseUrl}${type}${key}${language}${pagination}`;

    return url;
  },

  urlTvById: (id) => {
    const baseUrl = globals.api.baseUrl;
    const type = globals.api.type.tv;
    const key = globals.api.key;
    const language = globals.api.language[detectLang()];

    const url = `${baseUrl}${type}/${id}${key}${language}`;

    return url;
  },
  urlDiscoverMovies: (page) => {
    const baseUrl = globals.api.baseUrl;
    const type = globals.api.type.dicoveredMovie;
    const key = globals.api.key;
    const language = globals.api.language[detectLang()];
    const pagination = globals.api.pagination + page;

    const url = `${baseUrl}${type}${key}${language}${pagination}`;

    return url;
  },
  urlDiscoverTv: (page) => {
    const baseUrl = globals.api.baseUrl;
    const type = globals.api.type.dicoveredTv;
    const key = globals.api.key;
    const language = globals.api.language[detectLang()];
    const pagination = globals.api.pagination + page;

    const url = `${baseUrl}${type}${key}${language}${pagination}`;

    return url;
  },
};

export const apiImages = {
  poster: (posterPath, quality = "medium") => {
    let config;

    switch (quality) {
      case "small":
        config = globals.api.quality.posterSmall;
        break;
      case "medium":
        config = globals.api.quality.posterMedium;
        break;
      case "large":
        config = globals.api.quality.posterLarge;
        break;

      default:
        config = globals.api.quality.posterMedium;
        break;
    }

    const baseUrl = globals.api.posterUrl;
    const url = `${baseUrl}${config}${posterPath}`;

    return url;
  },
  backdrop: (backdropPath, quality = "medium") => {
    let config;

    switch (quality) {
      case "small":
        config = globals.api.quality.backdropSmall;
        break;
      case "medium":
        config = globals.api.quality.backdropMedium;
        break;
      case "large":
        config = globals.api.quality.backdropLarge;
        break;

      default:
        config = globals.api.quality.backdropMedium;
        break;
    }

    const baseUrl = globals.api.backdropUrl;
    const url = `${baseUrl}${config}${backdropPath}`;

    return url;
  },
  config: {
    small: "small",
    medium: "medium",
    large: "large",
  },
};
