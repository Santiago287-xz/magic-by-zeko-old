export interface Product {
  id: string;
  object: string;
  active: boolean;
  attributes: any[];
  created: number;
  default_price: DefaultPrice;
  description: null;
  features: any[];
  images: string[];
  livemode: boolean;
  metadata: PostMetadata;
  name: string;
}

export interface DefaultPrice {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  custom_unit_amount: null;
  livemode: boolean;
  lookup_key: null;
  metadata: DefaultPriceMetadata;
  nickname: null;
  product: string;
  recurring: null;
  tax_behavior: string;
  tiers_mode: null;
  transform_quantity: null;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
}

export interface DefaultPriceMetadata {}

export interface PostMetadata {
  product_tipe: string;
  custom_data_names: string;
  custom_data: string;
  image_1: string;
  image_2: string;
  image_3: string;
}
