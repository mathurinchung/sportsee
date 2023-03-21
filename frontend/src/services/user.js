import { Api, ApiEntity } from '../api';
import mock from '../__mocks__/user';

export class UserServicesAPI {
  constructor(userId) {
    this.userId = userId;
    this.api = new Api();
  }

  getUserMainData = () => new ApiEntity({ key: 'user', api: this.api }).select({ selector: this.userId });
  getUserActivity = () => new ApiEntity({ key: 'user',api: this.api }).select({ selector: `${this.userId}/activity` });
  getUserAverageSessions = () => new ApiEntity({ key: 'user',api: this.api }).select({ selector: `${this.userId}/average-sessions` });
  getUserPerformance = () => new ApiEntity({ key: 'user',api: this.api }).select({ selector: `${this.userId}/performance` });
}

export class UserServicesMocked {
  constructor(userId) {
    this.userId = userId;
    this.mock = mock;
  }

  getUserMainData = () => Promise.resolve(this.mock['USER_MAIN_DATA'].find(user => user.id === parseInt(this.userId)));
  getUserActivity = () => Promise.resolve(this.mock['USER_ACTIVITY'].find(user => user.userId === parseInt(this.userId)));
  getUserAverageSessions = () => Promise.resolve(this.mock['USER_AVERAGE_SESSIONS'].find(user => user.userId === parseInt(this.userId)));
  getUserPerformance = () => Promise.resolve(this.mock['USER_PERFORMANCE'].find(user => user.userId === parseInt(this.userId)));
}