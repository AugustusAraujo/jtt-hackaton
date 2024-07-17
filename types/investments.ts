import { Author } from "./author";

export type Investments = {
    name: string;
    description: string;
    images: string[];
    author: Author;
    moneyValue: number;
    likes: string;
}