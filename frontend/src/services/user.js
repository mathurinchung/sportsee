import { Api, ApiEntity } from '../api';
import mock from '../__mocks__/user';

/**
 * Represents a UserServicesAPI.
 *
 * @constructor
 * @param { string } userId - The user ID.
 */
export class UserServicesAPI {
  constructor(userId) {
    this.userId = userId;
    this.api = new Api(); // The API instance
  }

  /**
   * Retrieves the main data for the user.
   * @returns { Promise<ApiEntity> } A promise that resolves with the user's main data.
   */
  getUserMainData = () => new ApiEntity({ key: 'user', api: this.api }).select({ selector: this.userId });

  /**
   * Retrieves the user's activity.
   * @returns { Promise<ApiEntity> } A promise that resolves with the user's activity.
   */
  getUserActivity = () => new ApiEntity({ key: 'user',api: this.api }).select({ selector: `${this.userId}/activity` });

  /**
   * Retrieves the user's average sessions.
   * @returns { Promise<ApiEntity> } A promise that resolves with the user's average sessions.
   */
  getUserAverageSessions = () => new ApiEntity({ key: 'user',api: this.api }).select({ selector: `${this.userId}/average-sessions` });

  /**
   * Retrieves the user's performance.
   * @returns { Promise<ApiEntity> } A promise that resolves with the user's performance.
   */
  getUserPerformance = () => new ApiEntity({ key: 'user',api: this.api }).select({ selector: `${this.userId}/performance` });
}

/**
 * Represents a UserServicesMocked.
 *
 * @constructor
 * @param { string } userId - The user ID.
 */
export class UserServicesMocked {
  constructor(userId) {rId = userId;
    this.mock = mock; // The Mock data
  }

  /**
   * Retrieves the main data for the user from the mock data.
   * @returns { Promise<Object> } A promise that resolves with the user's main data.
   */
  getUserMainData = () => Promise.resolve(this.mock['USER_MAIN_DATA'].find(user => user.id === parseInt(this.userId)));

  /**
   * Retrieves the user's activity from the mock data.
   * @returns { Promise<Object> } A promise that resolves with the user's activity.
   */
  getUserActivity = () => Promise.resolve(this.mock['USER_ACTIVITY'].find(user => user.userId === parseInt(this.userId)));

  /**
   * Retrieves the user's average sessions from the mock data.
   * @returns { Promise<Object> } A promise that resolves with the user's average sessions.
   */
  getUserAverageSessions = () => Promise.resolve(this.mock['USER_AVERAGE_SESSIONS'].find(user => user.userId === parseInt(this.userId)));

  /**
   * Retrieves the user's performance from the mock data.
   * @returns { Promise<Object> } A promise that resolves with the user's performance.
   */
  getUserPerformance = () => Promise.resolve(this.mock['USER_PERFORMANCE'].find(user => user.userId === parseInt(this.userId)));
}