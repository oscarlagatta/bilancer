"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const getBarColor = (value: number, min: number, max: number) => {
  if (value < min) return "#FFC107"; // Giallo sotto il minimo
  if (value > max) return "#FF5252"; // Rosso sopra il massimo
  return "#4CAF50"; // Verde dentro il range
};

const chartData = [
  { proprietà: "Zuccheri", value: 15, min: 16, max: 22 },
  { proprietà: "Grassi", value: 14, min: 5, max: 12 },
  { proprietà: "SLNG", value: 9, min: 7.5, max: 11.5 },
  { proprietà: "Altri Solidi", value: 8, min: 5, max: 10 },
  { proprietà: "Neutri & Basi", value: 3, min: 0, max: 5 },
  { proprietà: "Solidi Totali", value: 20, min: 15, max: 25 },
  { proprietà: "POD", value: 18, min: 16, max: 20 },
  { proprietà: "PAC", value: 28, min: 26, max: 31 },
].map((item) => ({
  ...item,
  fill: getBarColor(item.value, item.min, item.max), // Aggiunge il colore direttamente nei dati
}));

const chartConfig = {
  value: {
    label: "value",
    color: "hsl(var(--chart-1))",
  },

  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function BalancerChart() {
  return (
    <Card className="flex flex-col md:w-[800px] mx-2">
      <CardHeader>
        <CardTitle>Grafico Percentuali Ingredienti</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ right: 30 }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="proprietà"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0)}
              hide
            />
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="value"
              layout="vertical"
              radius={4}
              fill={({ payload }) => payload.fill} // Usa il valore di fill pre-calcolato
            >
              <LabelList
                dataKey="proprietà"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="value"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
