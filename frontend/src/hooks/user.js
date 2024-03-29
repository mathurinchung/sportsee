import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserServicesMocked, UserServicesAPI } from '../services/user';
import { UserModel } from '../models';

/**
 * Custom hook for fetching user data and storing it in a model.
 *
 * @param { string } userId - The user ID to fetch data for.
 * @returns { Array<object | boolean> } An array containing the user data stored in a UserModel instance, and a boolean indicating whether the data is currently being fetched.
 */
export default function useGetUserStore(userId) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
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
        error && navigate("/notfound");
      }
    })();
  }, [ userId, navigate ]);

  return [ data, isLoading ];
}