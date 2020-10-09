import { Item } from "./item";

export interface Root {
    total_count: number;
    incomplete_results: boolean;
    items: Item[];
  }