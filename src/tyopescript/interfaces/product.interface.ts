import {ICategory} from './category.interface';

export interface IProduct {
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
}
