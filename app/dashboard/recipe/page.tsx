import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
    Breadcrumb
} from "@/components/ui/breadcrumb";
import {TableHeader, TableRow, TableHead, Table, TableBody, TableCell} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {Badge, PencilIcon} from "lucide-react";
import {format} from "date-fns";
type Ricetta = {
    id: number,
    description: string,
    transactionDate: Date,
    transactionType: string,
    category: string,
    amount: number
}
export default function RecipePage() {

    const ricette: Ricetta[] = [];

    return (
        <div className='max-w-screen-xl mx-auto py-10'>
            <Breadcrumb>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href='/dashboard'>Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            Ricette
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Breadcrumb>

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
                        <Link href={'/dashboard/transactions/new'}>
                            New Transaction
                        </Link>
                    </Button>
                    {!ricette?.length && (
                        <p className='text-center py-10 text-lg text-muted-foreground'>There are no transactions for this month</p>
                    )}
                    {!!ricette?.length && (<Table className='mt-4'>
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    Date
                                </TableHead>
                                <TableHead>
                                    Description
                                </TableHead>
                                <TableHead>
                                    Type
                                </TableHead>
                                <TableHead>
                                    Category
                                </TableHead>
                                <TableHead>
                                    Amount
                                </TableHead>
                                <TableHead />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {ricette.map(ricetta => (
                                <TableRow key={ricetta.id}>
                                    <TableCell>
                                        {format(ricetta.transactionDate, 'do MMM yyyy')}
                                    </TableCell>
                                    <TableCell>
                                        {ricetta.description}
                                    </TableCell>
                                    <TableCell className='capitalize'>
                                        <Badge className={ricetta.transactionType === "income"
                                            ? "bg-lime-500" : "bg-orange-500"}>
                                            {ricetta.transactionType }
                                        </Badge>

                                    </TableCell>
                                    <TableCell>
                                        {ricetta.category}
                                    </TableCell>
                                    <TableCell className='text-center'>
                                        {/*£{numeral(transaction.amount).format("0,0[.]00")}*/}
                                    </TableCell>
                                    <TableCell className='text-right'>
                                        <Button variant='outline' asChild size='icon' aria-label='Edit transaction'>
                                            <Link href={`/dashboard/transactions/${ricetta.id}`}>
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