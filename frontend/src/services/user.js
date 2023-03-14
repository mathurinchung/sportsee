import { Api, ApiEntity } from './api';
import data from '../__mocks__/user';

export class UserStoreAPI {
  constructor(userId) {
    this.userId = userId;
    this.api = new Api()
  }

  getUserMainData = () => new ApiEntity({ key: 'user', api: this.api }).select({ selector: this.userId });
  getUserActivity = () => new ApiEntity({ key: 'user',api: this.api }).select({ selector: `${this.userId}/activity` });
  getUserAverageSessions = () => new ApiEntity({ key: 'user',api: this.api }).select({ selector: `${this.userId}/average-sessions` });
  getUserPerformance = () => new ApiEntity({ key: 'user',api: this.api }).select({ selector: `${this.userId}/performance` });
}

export class UserStoreMocked {
  constructor(userId) {
    this.userId = userId;
    this.data = data;
  }

  getUserMainData = () => Promise.resolve(this.data['USER_MAIN_DATA'].find(user => user.id === parseInt(this.userId)));
  getUserActivity = () => Promise.resolve(this.data['USER_ACTIVITY'].find(user => user.userId === parseInt(this.userId)));
  getUserAverageSessions = () => Promise.resolve(this.data['USER_AVERAGE_SESSIONS'].find(user => user.userId === parseInt(this.userId)));
  getUserPerformance = () => Promise.resolve(this.data['USER_PERFORMANCE'].find(user => user.userId === parseInt(this.userId)));
}


export const getUserStore = async (userStore, setData, Model) => {
  const store = {
    user: await userStore.getUserMainData(),
    activity: await userStore.getUserActivity(),
    average: await userStore.getUserAverageSessions(),
    performance: await userStore.getUserPerformance()
  };

  setData(new Model(store));
}