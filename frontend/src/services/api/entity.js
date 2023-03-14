export class ApiEntity {
  constructor({ key, api }) {
    this.key = key;
    this.api = api
  }

  select = async ({ selector }) => {
    const { data } = await this.api.get({ endpoint: `/${this.key}/${selector}` });
    return data;
  }
}
