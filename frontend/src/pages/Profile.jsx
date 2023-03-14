import { useParams } from 'react-router-dom';
import { Main, Sidebar } from '../components/Layout';
import { Dashboard, HeaderProfile } from '../components/Dashboard';
import { ActivityChart, AverageChart, PerformanceChart, ScoreChart } from '../components/Charts';
import { NutrientGroup } from '../components/Nutrient';
import { useGetUserStore } from '../hooks/user';

function Profile() {
  const { userId } = useParams();
  const { data, isLoading } = useGetUserStore(userId);

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
