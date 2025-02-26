import "server-only";

import {iceCreamCategories} from "@/DB/schema";
import {and, eq} from "drizzle-orm";
import {db} from "@/DB";

export async function getCategory(categoryId: number) {

    const [transaction] = await db.select().from(iceCreamCategories).where(and(
        eq(iceCreamCategories.id, categoryId),
    ));

    return transaction;
}