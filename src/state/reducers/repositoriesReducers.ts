import { Actions } from "../actions";
import { ActionsTypes } from "../actioonTypes";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export const reducer = (
  state: RepositoriesState,
  action: Actions
): RepositoriesState => {
  switch (action.type) {
    case ActionsTypes.SEARCH_REPO:
      return { loading: true, error: null, data: [] };

    case ActionsTypes.SEARCH_REPO_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionsTypes.SEARCH_REPO_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
