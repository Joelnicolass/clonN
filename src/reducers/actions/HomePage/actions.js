import { homePageTypes } from "../../types/HomePage/types";
import { getPopularMovies as getPopularMoviesService } from "../../../services/services";

export const getPopularMovies = (page = 1) => {
  return async (dispatch) => {
    dispatch({ type: homePageTypes.START_LOADING });
    try {
      const res = await getPopularMoviesService(page);
      dispatch({ type: homePageTypes.SUCCESS_LOADING, payload: res });
    } catch (error) {
      dispatch({ type: homePageTypes.ERROR_LOADING, payload: error.message });
    }
  };
};
