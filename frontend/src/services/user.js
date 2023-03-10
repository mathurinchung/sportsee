import { useServicesAPI } from './hooks';
import data from '../__mocks__/data';
import { UserModel, SessionsModel, PerformanceModel } from '../models';

export class UserServiceAPI {
  constructor(userId) {
    this.userId = userId;
  }

  getUserMainData = () => {
    const data = useServicesAPI(`/user/${ this.userId }`);
    return new UserModel(data);
  }

  getUserActivity = () => {
    const data = useServicesAPI(`/user/${ this.userId }/activity`);
    return new SessionsModel(data);
  }

  getUserAverageSessions = () => {
    const data = useServicesAPI(`/user/${ this.userId }/average-sessions`);
    return new SessionsModel(data);
  }

  getUserPerformance = () => {
    const data = useServicesAPI(`/user/${ this.userId }/performance`);
    return new PerformanceModel(data);
  }
}

export class UserServiceMocked {
  constructor(userId) {
    this.userId = userId;
    this.data = data;
  }

  getUserMainData = () => {
    const data = this.data['USER_MAIN_DATA'].find(user => user.id === parseInt(this.userId));
    return new UserModel(data);
  }

  getUserActivity = () => {
    const data = this.data['USER_ACTIVITY'].find(user => user.userId === parseInt(this.userId));
    return new SessionsModel(data);
  }

  getUserAverageSessions = () => {
    const data = this.data['USER_AVERAGE_SESSIONS'].find(user => user.userId === parseInt(this.userId));
    return new SessionsModel(data);
  }

  getUserPerformance = () => {
    const data = this.data['USER_PERFORMANCE'].find(user => user.userId === parseInt(this.userId));
    return new PerformanceModel(data);
  }
}
