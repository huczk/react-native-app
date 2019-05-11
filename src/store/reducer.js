import {
  RELEASES,
  SEARCH_REPOSITORIES,
} from './types';
import { mergeUniques } from '../helpers';

const INITIAL_STATE = {
  /**
   * @typedef {{ [string]: object }} search
   */
  repositories: {},
  /**
   * @typedef {{ [string]: object }} search
   */
  releases: {},
  /**
   * @typedef {{ [string]: array[string] }} search
   */
  search: {},
};

const Repositories = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
  case RELEASES:
    return {
      ...state,
      releases: {
        ...state.releases,
        [payload.id]: payload.data,
      },
    };
  case SEARCH_REPOSITORIES:
    return {
      ...state,
      repositories: { ...state.repositories, ...payload.repositories },
      search: {
        ...state.search,
        [payload.search.text]: mergeUniques(
          state?.search?.[payload.search.text],
          payload.search.data,
        ),
      },
    };
  default:
    return state;
  }
};

export default Repositories;
