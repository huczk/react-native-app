import { RELEASES, SEARCH_REPOSITORIES } from './types';
import { fetchReleases, searchRepositories } from '../service';
import { arrayToObjectByKey } from '../helpers';

/**
 * Fetch and dispatch to store releases for given repository
 * @param {object} params
 * @param {string} params.id
 * @param {string} params.fullName
 */
const getReleases = ({ id, fullName }) => async (dispatch) => {
  try {
    const { data } = await fetchReleases({ fullName });

    dispatch({
      type: RELEASES,
      payload: {
        id,
        data,
      },
    });
  } catch (e) {
    //
  }
};

/**
 * Fetch and dispatch to store repositories for given search phrase
 * @param {object} params
 * @param {string} params.searchText
 * @param {number} params.page
 * @param {number} params.perPage
 */
const getSearchedRepositories = params => async (dispatch) => {
  try {
    const { data } = await searchRepositories(params);

    dispatch({
      type: SEARCH_REPOSITORIES,
      payload: {
        repositories: arrayToObjectByKey(data.items, 'id'),
        search: {
          text: params.searchText,
          data: data.items.map(({ id }) => id),
        },
      },
    });
  } catch (e) {
    //
  }
};

export {
  getReleases,
  getSearchedRepositories,
};
