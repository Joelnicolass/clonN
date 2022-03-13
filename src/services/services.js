import axios from "axios";
import globals from "../globals";
import { apiUrls } from "../utils/apiUtils";

// get popular movies from server
export const getPopularMovies = async (page = 1) => {
  const url = apiUrls.urlPopularMovies(page);
  console.log(url);
  const response = await axios.get(url);
  return response.data;
};

// get popular tv from server
export const getPopularTv = async (page = 1) => {
  const url = apiUrls.urlPopularTv(page);
  const response = await axios.get(url);
  return response.data;
};

// get movie by id from server
export const getMovieById = async (id) => {
  const url = apiUrls.urlMovieById(id);
  const response = await axios.get(url);
  return response.data;
};

// get popular tv from server
export const getTvById = async (id) => {
  const url = apiUrls.urlTvById(id);
  const response = await axios.get(url);
  return response.data;
};

// get discover movies from server
export const getDiscoverMovies = async (page = 1) => {
  const url = apiUrls.urlDiscoverMovies(page);
  const response = await axios.get(url);
  return response.data;
};

// get discover tv from server
export const getDiscoverTv = async (page = 1) => {
  const url = apiUrls.urlDiscoverTv(page);
  const response = await axios.get(url);
  return response.data;
};
