import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import NewIngredientForm from "@/app/dashboard/ingredients/new/new-ingredient-form";
import {getCategories} from "@/DATA/getCategories";

export default async function NewIngredientPage() {

    const categories = await getCategories();

    return (
        <div className='w-full mx-auto px-4 py-10'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='/dashboard'>Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='/dashboard/ingredients'>Ingredients</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            Nuovo Ingrediente
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Card className='mt-4 w-full'>
                <CardHeader>
                    <CardTitle>
                        Nuovo Ingrediente
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <NewIngredientForm categories={categories} />

                </CardContent>
            </Card>
        </div>
    )

}