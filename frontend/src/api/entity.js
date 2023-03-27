/**
 * Represents an entity in the API, providing methods to retrieve data using selectors.
 *
 * @class
 * @name ApiEntity
 * @param { string } params.key - The key associated with the entity.
 * @param { axios.AxiosInstance } params.api - The Axios instance used to make API requests.
 */
export class ApiEntity {
  constructor({ key, api }) {
    this.key = key;
    this.api = api
  }

  /**
   * Retrieves data from the API using a selector.
   *
   * @async
   * @method
   * @name ApiEntity#select
   * @param { Object } params - Parameters for the API request.
   * @param { string } params.selector - The selector used to retrieve data from the API.
   * @returns { Promise<Object> } A Promise that resolves to the data retrieved from the API.
   */
  select = async ({ selector }) => {
    const { data } = await this.api.get({ endpoint: `/${this.key}/${selector}` });
    return data;
  }
}