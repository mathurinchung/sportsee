import axios from 'axios';

/**
 * Configuration object for the Axios instance.
 *
 * @typedef { Object } AxiosConfig
 * @property { string } baseURL - The base URL of the API.
 */

/**
 * Axios instance configured to use the API URL defined in the environment variables.
 *
 * @type { axios.AxiosInstance }
 */
const config = { baseURL: import.meta.env.VITE_API_URL };

export default axios.create(config);
