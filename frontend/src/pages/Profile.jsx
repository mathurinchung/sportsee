import { useParams } from 'react-router-dom';
import { useGetUserStore } from '../hooks';
import { Main, Sidebar } from '../components/Layout';
import { Dashboard, HeaderProfile } from '../components/Dashboard';
import { ActivityChart, AverageChart, PerformanceChart, ScoreChart } from '../components/Charts';
import { NutrientGroup } from '../components/Nutrient';

/**
 * React component for the "Profile" page.
 *
 * @function
 * @name Profile
 * @returns { JSX.Element } React component
 */
function Profile() {
  const { id } = useParams();
  const [ data, isLoading ] = useGetUserStore(id);

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
