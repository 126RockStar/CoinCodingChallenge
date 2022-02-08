import axios from 'axios';
import { baseURL } from 'utils/constants';

export const get = async (params) => {
  try {
    return await axios.get(`${baseURL}`, {params}).then(res => res.data)
  } catch (error) {
    throw error
  }
}