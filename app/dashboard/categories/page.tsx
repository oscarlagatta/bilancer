import {getCategories} from "@/DATA/getCategories";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

import {PencilIcon} from "lucide-react";

export default async function CategoriesPage() {

    const categories = await getCategories();

    return (
        <div className='max-w-screen-xl mx-auto py-10'>


            <Card className='mt-4'>
                <CardHeader>
                    <CardTitle className='flex justify-between' >
                        {/*<span>{format(selectedDate, "MMM yyyy")} Transactions</span>*/}
                        {/*<div>*/}
                        {/*    <Filters year={year} month={month} yearsRange={yearsRange}/>*/}
                        {/*</div>*/}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <Link href={'/dashboard/categories/new'}>
                            Nuova Categoria
                        </Link>
                    </Button>
                    {!categories?.length && (
                        <p className='text-center py-10 text-lg text-muted-foreground'>Non ci sono categorie!</p>
                    )}
                    {!!categories?.length && (<Table className='mt-4'>
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    Name
                                </TableHead>
                                <TableHead>
                                    Sugars Min
                                </TableHead>
                                <TableHead>
                                    Sugars Max
                                </TableHead>
                                <TableHead>
                                    Fats Min
                                </TableHead>
                                <TableHead>
                                    Fats Max
                                </TableHead>
                                <TableHead />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.map(category => (
                                <TableRow key={category.id}>
                                    <TableCell>
                                        {category.name}
                                    </TableCell>
                                    <TableCell>
                                        {category.sugarsMin}
                                    </TableCell>
                                    <TableCell className='capitalize'>
                                        {category.sugarsMax}
                                    </TableCell>
                                    <TableCell className='text-center'>
                                        {category.fatsMin}
                                    </TableCell>
                                    <TableCell className='text-center'>
                                        {category.fatsMax}
                                    </TableCell>
                                    <TableCell className='text-right'>
                                        <Button variant='outline' asChild size='icon' aria-label='Edit transaction'>
                                            <Link href={`/dashboard/categories/${category.id}`}>
                                                <PencilIcon />
                                            </Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                            }
                        </TableBody>
                    </Table>)}
                </CardContent>
            </Card>

        </div>
    );
}