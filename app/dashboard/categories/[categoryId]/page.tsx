import { getCategory } from "@/DATA/getCategory";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EditCategoryForm from "@/app/dashboard/categories/[categoryId]/edit-category-form";

export default async function ModificaCategoriePage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const paramsValues = await params;

  const categoryId = Number(paramsValues.categoryId);

  const category = await getCategory(categoryId);

  if (!category) {
    notFound();
  }

  return (
    <Card className="mt-4 max-w-screen-md">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>Modifica Categoria</span>
          {/*<DeleteTransactionDialog transactionId={transaction.id} transactionDate={transaction.transactionDate} />*/}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <EditCategoryForm category={category} />
      </CardContent>
    </Card>
  );
}
