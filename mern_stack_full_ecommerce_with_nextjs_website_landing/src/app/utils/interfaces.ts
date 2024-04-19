export interface IProduct {
  product_name: string;
  _id: string;
}

export interface IcartItem {
  _id: string;
  product_id: IProduct;
  quantity: number;
}
