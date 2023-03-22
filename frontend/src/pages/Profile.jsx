import { useParams } from 'react-router-dom';
import { useGetUserStore } from '../hooks';
import { Main, Sidebar } from '../components/Layout';
import { Dashboard, HeaderProfile } from '../components/Dashboard';
import { ActivityChart, AverageChart, PerformanceChart, ScoreChart } from '../components/Charts';
import { NutrientGroup } from '../components/Nutrient';

/**
 * @function
 * @name Profile
 * @returns { JSX.Element } React component
 */
function Profile() {
  const { userId } = useParams();

  /**
   * User data retrieved from the server.
   *
   * @typedef { Object } UserData
   * @property { Object } userInfos - User's basic information.
   * @property { Object[] } activitySessions - User's activity sessions.
   * @property { Object[] } averageSessions - User's average sessions.
   * @property { Object[] } performance - User's performance data.
   * @property { Object } keyData - User's key data.
   */

  /**
   * User data and loading status.
   *
   * @typedef { Object } UserStore
   * @property { UserData } data - User data.
   * @property { boolean } isLoading - Indicates if data is currently loading.
   */

  /**
   * Retrieves user data from the server.
   *
   * @function
   * @name useGetUserStore
   * @param { string } userId - The ID of the user whose data should be retrieved.
   * @returns { UserStore } User data and loading status.
   */

  const [ data, isLoading ] = useGetUserStore(userId);

  return !isLoading && (
    <Main className="Profile">
      <Sidebar />

      <Dashboard>
        <HeaderProfile data={ data.userInfos } />

        <ActivityChart data={ data.activitySessions } />

        <AverageChart data={ data.averageSessions } />
        <PerformanceChart data={ data.performance } />
        <ScoreChart data={ data } />

        <NutrientGroup data={ data.keyData } />
      </Dashboard>
    </Main>
  );
}

export default Profile;
