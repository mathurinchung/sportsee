import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserServicesMocked, UserServicesAPI } from '../services/user';
import { UserModel } from '../models/user';

export function useGetUserStore(userId) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    return async () => {
      try {
        const userServices = (userId === '10') ? new UserServicesMocked(userId) : new UserServicesAPI(userId);

        const store = {
          user: await userServices.getUserMainData(),
          activity: await userServices.getUserActivity(),
          average: await userServices.getUserAverageSessions(),
          performance: await userServices.getUserPerformance()
        };
      
        setData(new UserModel(store));
        setIsLoading(false);
      } catch(error) {
        (error.response.status === 404) && navigate("/notfound");
      }
    }
  }, [ userId, navigate ]);

  return { data, isLoading };
}
