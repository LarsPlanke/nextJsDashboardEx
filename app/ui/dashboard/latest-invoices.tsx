import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();
  return (
    <div className="flex w-full flex-col">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className={`${lusitana.className} text-xl font-bold text-slate-900`}>
              Activity detection
            </h2>
            <p className="text-sm text-slate-600 mt-1">Recent transactions</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">Active</span>
          </div>
        </div>

        <div className="space-y-1">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 pb-3 border-b border-slate-100">
            <div className="col-span-1 text-xs font-medium text-slate-500 uppercase tracking-wide">
              
            </div>
            <div className="col-span-4 text-xs font-medium text-slate-500 uppercase tracking-wide">
              Transaction
            </div>
            <div className="col-span-3 text-xs font-medium text-slate-500 uppercase tracking-wide">
              Endpoint
            </div>
            <div className="col-span-2 text-xs font-medium text-slate-500 uppercase tracking-wide">
              Time
            </div>
            <div className="col-span-2 text-xs font-medium text-slate-500 uppercase tracking-wide text-right">
              Amount
            </div>
          </div>

          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className="grid grid-cols-12 gap-4 py-3 hover:bg-slate-50 rounded-lg px-2 transition-colors group"
              >
                <div className="col-span-1 flex items-center">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="rounded-full"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="col-span-4 flex flex-col justify-center min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">
                    {invoice.name}
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {invoice.email}
                  </p>
                </div>
                <div className="col-span-3 flex items-center">
                  <span className="text-sm text-slate-600">Statistics</span>
                </div>
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-slate-600">
                    Dec 2, 2024, 17:48
                  </span>
                </div>
                <div className="col-span-2 flex items-center justify-end">
                  <span className={`${lusitana.className} text-sm font-semibold text-slate-900`}>
                    {invoice.amount}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <ArrowPathIcon className="h-4 w-4 text-slate-500" />
            <span className="text-sm text-slate-600">Updated just now</span>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
