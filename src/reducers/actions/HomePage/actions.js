import { movieTypes } from "../../types/common/movies";
import { getPopularMovies as getPopularMoviesService } from "../../../services/services";

export const getPopularMovies = (page = 1) => {
  return async (dispatch) => {
    dispatch({ type: movieTypes.START_LOADING_POPULAR_MOVIES });
    try {
      const res = await getPopularMoviesService(page);
      dispatch({
        type: movieTypes.SUCCESS_LOADING_POPULAR_MOVIES,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: movieTypes.ERROR_LOADING_POPULAR_MOVIES,
        payload: error.message,
      });
    }
  };
};
