export type ProductType = {
  id: string;
  _id: string;
  title: string;
  imageCover: string;
  description: string;
  category: CategoryType;
  brand: string;
  price: number
  reatingAverage: number
  PriceAfterDiscount?: number
}


export type CategoryType = {
  _id: string
  name: string
  slug: string
  image: string
}


export type brandType = {
  _id: string,
  name: string,
  slug: string,
  image: string
}
