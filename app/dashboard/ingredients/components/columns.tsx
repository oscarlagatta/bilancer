"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { IngredientSelect } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import {Badge} from "@/components/ui/badge";

export const columns: ColumnDef<IngredientSelect>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "categoryId",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Category" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("categoryId")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "description",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Description" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                      {row.getValue("description")}
                </div>
            )
        },
    },
    {
        accessorKey: "sugar",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Sugar" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    {row.getValue("sugar")}
                </div>
            )
        },
    },
    {
        accessorKey: "fat",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Fat" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    {row.getValue("fat")}
                </div>
            )
        },
    },
    {
        accessorKey: "slng",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="SLNG" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    {row.getValue("slng")}
                </div>
            )
        },
    },
    {
        accessorKey: "altriSolidi",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Altri Solidi" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    {row.getValue("altriSolidi")}
                </div>
            )
        },
    },
    {
        accessorKey: "bilanciaSuLiquidi",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Bilancia Su Liquidi" />
        ),
        cell: ({ row }) => {
            const value = row.getValue("bilanciaSuLiquidi") as boolean;

            return (
                <div className="flex space-x-2">
                    <Badge
                        className={value ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}
                    >
                        {value ? "Si" : "No"}
                    </Badge>
                </div>
            );
        },
    },
    {
        accessorKey: "pod",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="POD" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    {row.getValue("pod")}
                </div>
            )
        },
    },
    {
        accessorKey: "pac",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="PAC" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    {row.getValue("pac")}
                </div>
            )
        },
    },
    {
        accessorKey: "minPercentage",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Min" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    {row.getValue("minPercentage")}
                </div>
            )
        },
    },
    {
        accessorKey: "maxPercentage",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Max" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    {row.getValue("maxPercentage")}
                </div>
            )
        },
    },
    {
        accessorKey: "foodCostForKg",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Food Cost For Kg" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    {row.getValue("foodCostForKg")}
                </div>
            )
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]
