import {Category} from './category.class';
import {Product} from './product.class';
import {
  ManPants,
  ManShiert,
  ManShoes,
  ManTShirts,
  ManUnderwears,
  ManWorkEquipment,
  WomanBags,
  WomanBikini,
  WomanDress,
  WomanHeels,
  WomanPants,
  WomanSkirts,
  WomanTShirts,
} from 'src/theme/asset';
import {ICategory} from '../interfaces/category.interface';
import {IProduct} from '../interfaces/product.interface';
import {FSNikeAirMax270} from 'src/theme/asset';

export class AppRepository {
  static instance: AppRepository;
  sizes: number[] = [6, 6.5, 7, 7.5, 8, 8.5];
  colors: string[] = ['red', 'green', 'yellow', 'purple', 'orange'];
  categories: ICategory[] = [];
  products: IProduct[] = [];

  private constructor() {
    this.categories = this.getCategories();
    // replace this logic later on
    this.products = this.getProducts();
  }

  public static getInstance(): AppRepository {
    if (!AppRepository.instance) {
      AppRepository.instance = new AppRepository();
    }
    return AppRepository.instance;
  }

  private getCategories() {
    return [
      new Category('1', 'Man Shirt', ManShiert, 'man'),
      new Category('2', 'Man Work Equipment', ManWorkEquipment, 'man'),
      new Category('3', 'Man T shirt', ManTShirts, 'man'),
      new Category('4', 'Man Shoes', ManShoes, 'man'),
      new Category('5', 'Man Pants', ManPants, 'man'),
      new Category('6', 'Man Underwear', ManUnderwears, 'man'),
      new Category('7', 'Dress', WomanDress, 'woman'),
      new Category('8', 'Woman T-Shirt', WomanTShirts, 'woman'),
      new Category('9', 'Woman Pants', WomanPants, 'woman'),
      new Category('10', 'Skirt', WomanSkirts, 'woman'),
      new Category('11', 'Woman Bag', WomanBags, 'woman'),
      new Category('12', 'High Heels', WomanHeels, 'woman'),
      new Category('13', 'Bikini', WomanBikini, 'woman'),
    ];
  }

  private getProducts(): Product[] {
    return Array.from({length: this.categories.length}).map((_, i) => ({
      price: 534.33,
      discount: 24.0,
      _id: i.toString(),
      sizes: this.sizes,
      colors: this.colors,
      images: [FSNikeAirMax270, FSNikeAirMax270, FSNikeAirMax270],
      product_style: 'CD0113-400',
      category: this.categories[i],
      name: 'Nike Air Zoom Pegasus 36 Miami',
      short_description: 'Laser Blue/Anthracite/Watermelon/White',
      full_description:
        'The Nike Air Max 270 React ENG combines a full-length React foam midsole with a 270 Max Air unit for unrivaled comfort and a striking visual experience.',
    }));
  }
}
