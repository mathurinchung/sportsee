import axios from './axios';

/**
 * Provides methods to make API requests using Axios.
 *
 * @class
 * @name Api
 */
export class Api {
  /**
   * Retrieves data from the API using the provided endpoint.
   *
   * @async
   * @method
   * @name Api#get
   * @param { Object } params - Parameters for the API request.
   * @param { string } params.endpoint - The endpoint to retrieve data from.
   * @returns { Promise<Object> } A Promise that resolves to the data retrieved from the API.
   */
  get = async ({ endpoint }) => {
    const { data } = await axios.get(endpoint);
    return data;
  }
}

export { ApiEntity } from './entity';