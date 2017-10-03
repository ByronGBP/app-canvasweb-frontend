export class Painting {
  id: string;
  name: string;
  code: string;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
