import type { Product } from "./product";

export type ChatMessage = {
  message: string;
  time: string;
  fromUser: boolean;
  product?: Product;
};