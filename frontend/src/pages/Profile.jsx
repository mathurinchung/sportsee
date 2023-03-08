import { Main, Sidebar } from '../components/Layout';
import { Dashboard, HeaderProfile } from '../components/Dashboard';
import { ActivityChart, AverageChart, PerformanceChart, ScoreChart } from '../components/Charts';
import { NutrientGroup } from '../components/Nutrient';

function Profile() {
  return (
    <Main className="Profile">
      <Sidebar />

      <Dashboard>
        <HeaderProfile />

        <ActivityChart />
        <AverageChart />
        <PerformanceChart />
        <ScoreChart />
        <NutrientGroup />
      </Dashboard>
    </Main>
  );
}

export default Profile;
