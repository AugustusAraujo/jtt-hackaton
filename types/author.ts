import { Posts } from "./posts";
import { Investments} from "./investments";


export type Author = {
    name: string;
    img: string;
    bio: string;
    posts: Posts[];
    investments: Investments[];
}