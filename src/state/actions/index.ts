import { ActionsTypes } from "../actioonTypes";

interface SearchAction {
  type: ActionsTypes.SEARCH_REPO;
}

interface SearchSuccessAction {
  type: ActionsTypes.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface SearchErrorAction {
  type: ActionsTypes.SEARCH_REPO_ERROR;
  payload: string;
}

export type Actions = SearchAction | SearchErrorAction | SearchSuccessAction;
