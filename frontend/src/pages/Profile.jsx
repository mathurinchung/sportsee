import { useParams } from 'react-router-dom';
import { Main, Sidebar } from '../components/Layout';
import { Dashboard, HeaderProfile } from '../components/Dashboard';
// import { ActivityChart, AverageChart, PerformanceChart, ScoreChart } from '../components/Charts';
import { NutrientGroup } from '../components/Nutrient';
// import { UserServiceAPI } from '../services/user';
import { UserServiceMocked } from '../services/user';

function Profile() {
  const { userId } = useParams();
  // const userServiceAPI = new UserServiceAPI(userId);  
  // const user = userServiceAPI.getUserMainData();
  // const activity = userServiceAPI.getUserActivity();
  // const average = userServiceAPI.getUserAverageSessions();
  // const performance = userServiceAPI.getUserPerformance();
  
  const userServiceMocked = new UserServiceMocked(userId);
  const user = userServiceMocked.getUserMainData();
  const activity = userServiceMocked.getUserActivity();
  const average = userServiceMocked.getUserAverageSessions();
  const performance = userServiceMocked.getUserPerformance();

  console.log(user);
  console.log(activity);
  console.log(average);
  console.log(performance);

  return (
    <Main className="Profile">
      <Sidebar />

      <Dashboard>
        <HeaderProfile userInfos={ user.userInfos } />

        {/* <ActivityChart data={ activity } /> */}
        {/* <AverageChart data={ average } /> */}
        {/* <PerformanceChart data={ performance } /> */}
        {/* <ScoreChart data={ user.todayScore } /> */}
        <NutrientGroup keyData={ user.keyData } />
      </Dashboard>
    </Main>
  );
}

export default Profile;
