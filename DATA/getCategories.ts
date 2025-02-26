import {iceCreamCategories} from "@/DB/schema";
import {db} from "@/DB";

export async function getCategories() {
    return db.select().from(iceCreamCategories)
}