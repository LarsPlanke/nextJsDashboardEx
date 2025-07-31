import CardWrapper from '@/app/ui/dashboard/cards';
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana, inter } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { 
         LatestInvoicesSkeleton, 
         RevenueChartSkeleton, 
         CardsSkeleton 
       } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { CalendarDaysIcon, BellIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: 'Dashboard',
  };
 
export default async function Page() {
    const {
        totalPaidInvoices, 
        totalPendingInvoices,
        numberOfInvoices,
        numberOfCustomers
    } = await fetchCardData();

    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
  return (
    <main className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-slate-900`}>
            Welcome back, Magnus
          </h1>
          <p className={`${inter.className} text-slate-600 mt-2 flex items-center gap-2`}>
            <CalendarDaysIcon className="w-4 h-4" />
            {currentDate}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className={`${inter.className} text-sm font-medium text-slate-700`}>Live</span>
            </div>
          </div>
          
          <button className="relative p-3 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <BellIcon className="w-5 h-5 text-slate-600" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">4</span>
            </div>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>
        </div>
        <div className="lg:col-span-1">
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <LatestInvoices />
          </Suspense>
        </div>
      </div>
    </main>
  );
}