import RecentRecipes from "@/app/dashboard/recent-recipes";

export default function DashboardPage() {
  return (
      <div className="max-w-screen-xl mx-auto py-5">
        <h1 className='text-4xl font-semibold pb-5'>Dashboard Gelato Perfetto</h1>
        <RecentRecipes />
      </div>
  )
}
