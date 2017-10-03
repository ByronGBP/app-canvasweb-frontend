
export class User {
  id: string;
  username: string;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
