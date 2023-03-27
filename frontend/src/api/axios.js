import axios from 'axios';

/**
 * Axios instance configured to use the API URL defined in the environment variables.
 *
 * @typedef { Object } AxiosConfig
 * @property { string } baseURL - The base URL of the API.
 */
const config = { baseURL: import.meta.env.VITE_API_URL };

export default axios.create(config);
