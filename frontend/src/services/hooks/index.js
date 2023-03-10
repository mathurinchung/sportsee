import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export function useServicesAPI(endpoint) {
  const [ data, setData ] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    return async () => {
      const response = await api.get(endpoint, () => { navigate('/notfound') });
      if (response) setData(response.data);
    }
  }, [ endpoint, navigate ]);

  return data;
}
