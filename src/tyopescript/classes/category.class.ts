import {TCategory} from '../types/category.type';

export class Category {
  id: string;
  name: string;
  url: string;
  type: TCategory;
  public constructor(id: string, name: string, url: string, type: TCategory) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.type = type;
  }
}
