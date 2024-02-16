import { Item, Review } from "prisma/prisma-client";
export type Item = {
  id: number;
  url: string;
  avgRating: number;
  totalRatings: number;
  price: number;
  name: string;
};

export type Review = {
  id: number;
  email: string;
  itemId: number;
  rating: number;
  comment: string;
};
