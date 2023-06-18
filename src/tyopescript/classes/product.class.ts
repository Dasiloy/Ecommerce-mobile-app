import {ICategory} from '../interfaces/category.interface';

export class Product {
  _id: string;
  name: string;
  price: number;
  sizes: number[];
  colors: string[];
  images: string[];
  discount: number;
  category: ICategory;
  short_description: string;
  full_description: string;
  product_style: string;
  public constructor(
    id: string,
    name: string,
    price: number,
    sizes: number[],
    colors: string[],
    images: string[],
    discount: number,
    category: ICategory,
    product_style: string,
    short_description: string,
    full_description: string,
  ) {
    this._id = id;
    this.name = name;
    this.price = price;
    this.sizes = sizes;
    this.colors = colors;
    this.images = images;
    this.discount = discount;
    this.category = category;
    this.product_style = product_style;
    this.short_description = short_description;
    this.full_description = full_description;
  }
}
