export class Shipping {
  _id: string;
  first_name: string;
  last_name: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  phone_number: string;
  phone_code: string;
  street_address_1: string;
  street_address_2?: string;
  public constructor(
    id: string,
    first_name: string,
    last_name: string,
    country: string,
    state: string,
    city: string,
    zip: string,
    phone_number: string,
    phone_code: string,
    street_address_1: string,
    street_address_2?: string,
  ) {
    this._id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.country = country;
    this.state = state;
    this.city = city;
    this.zip = zip;
    this.phone_number = phone_number;
    this.phone_code = phone_code;
    this.street_address_1 = street_address_1;
    this.street_address_2 = street_address_2 || '';
  }
}
