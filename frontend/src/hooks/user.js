import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserStore, UserStoreMocked, UserStoreAPI } from '../services/user';
import { UserModel } from '../models/user';

export function useGetUserStore(userId) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    return async () => {
      try {
        if (userId === '10') {
          const userStore = new UserStoreMocked(userId);
          await getUserStore(userStore, setData, UserModel);
        } else {
          const userStore = new UserStoreAPI(userId);
          await getUserStore(userStore, setData, UserModel);
        }
  
        setIsLoading(false);
      } catch(error) {
        navigate("/notfound");
      }
    }
  }, [ userId, navigate ]);

  return { data, isLoading };
}
