import { ActionsTypes } from "../actioonTypes";

const searchRepository = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionsTypes.SEARCH_REPO,
    });

    try {
    } catch (error) {
      if (error instanceof Error)
        dispatch({
          type: ActionsTypes.SEARCH_REPO_ERROR,
          payload: error.message,
        });
    }
  };
};
