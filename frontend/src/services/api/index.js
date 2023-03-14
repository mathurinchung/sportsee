import axios from './axios';

export class Api {
  get = async ({ endpoint }) => {
    const { data } = await axios.get(endpoint);
    return data;
  }
}

export { ApiEntity } from './entity';