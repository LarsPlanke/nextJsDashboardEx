import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
  const revenue = await fetchRevenue();
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className={`${lusitana.className} text-xl font-bold text-slate-900`}>
              Statistics
            </h2>
            <p className="text-sm text-slate-600 mt-1">Revenue overview</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg">
            <CalendarIcon className="h-4 w-4 text-slate-500" />
            <span className="text-sm text-slate-600">Last 12 months</span>
          </div>
        </div>

        <div className="relative">
          <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-3 p-4">
            <div
              className="mb-6 hidden flex-col justify-between text-xs text-slate-400 sm:flex"
              style={{ height: `${chartHeight}px` }}
            >
              {yAxisLabels.map((label) => (
                <p key={label}>{label}</p>
              ))}
            </div>

            {revenue.map((month, index) => (
              <div key={month.month} className="flex flex-col items-center gap-2 group">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 transition-all duration-300 relative overflow-hidden"
                  style={{
                    height: `${(chartHeight / topLabel) * month.revenue}px`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"></div>
                </div>
                <p className="text-xs text-slate-500 font-medium -rotate-90 sm:rotate-0">
                  {month.month}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
