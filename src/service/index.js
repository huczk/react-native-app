import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import { parseSearchText } from '../helpers';

/**
 * config for new axios instance with caching
 */
const config = {
  baseURL: 'https://api.github.com/',
  adapter: cacheAdapterEnhancer(
    axios.defaults.adapter,
    {
      enabledByDefault: false,
      cacheFlag: 'useCache',
    },
  ),
};

/**
 * create new axiox instane witch caching
 */
const api = axios.create(config);

/**
 * Fetch releases for giver repository
 * @param {object} params
 * @param {string} params.fullName
 */
const fetchReleases = async ({
  fullName,
}) => api.get(
  `repos/${fullName}/releases`,
  { useCache: true },
);

/**
 * Fetch repositories for given search phrase
 * @param {object} params
 * @param {string} params.searchText
 * @param {number} params.page
 * @param {number} params.perPage
 */
const searchRepositories = async ({
  searchText = '',
  page = 1,
  perPage = 10,
}) => api.get(
  `search/repositories?q=${parseSearchText(searchText)}&page=${page}&per_page=${perPage}`,
  { useCache: true },
);

export {
  fetchReleases,
  searchRepositories,
};
