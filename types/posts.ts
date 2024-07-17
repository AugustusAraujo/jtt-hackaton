import type { Author } from "./author";

export type Posts = {
    name: string;
    description: string;
    images: string[];
    author: Author;
    likes: number;
}