import axios from './axios';

export default class Api {
  static get = async (endpoint, useNavigate) => {
    try {
      const { data } = await axios.get(endpoint)
      return data;
    } catch (error) {
      if (error.response.status === 404) useNavigate();
    }
  }
}