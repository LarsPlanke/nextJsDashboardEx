import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers, 
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  
  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  const getCardStyles = (cardType: string) => {
    switch (cardType) {
      case 'collected':
        return {
          bgGradient: 'bg-gradient-to-br from-green-50 to-emerald-50',
          iconColor: 'text-green-600',
          iconBg: 'bg-green-100',
          accent: 'border-green-200'
        };
      case 'pending':
        return {
          bgGradient: 'bg-gradient-to-br from-amber-50 to-yellow-50',
          iconColor: 'text-amber-600',
          iconBg: 'bg-amber-100',
          accent: 'border-amber-200'
        };
      case 'invoices':
        return {
          bgGradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
          iconColor: 'text-blue-600',
          iconBg: 'bg-blue-100',
          accent: 'border-blue-200'
        };
      case 'customers':
        return {
          bgGradient: 'bg-gradient-to-br from-purple-50 to-violet-50',
          iconColor: 'text-purple-600',
          iconBg: 'bg-purple-100',
          accent: 'border-purple-200'
        };
      default:
        return {
          bgGradient: 'bg-gradient-to-br from-slate-50 to-gray-50',
          iconColor: 'text-slate-600',
          iconBg: 'bg-slate-100',
          accent: 'border-slate-200'
        };
    }
  };

  const styles = getCardStyles(type);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white border ${styles.accent} shadow-sm hover:shadow-md transition-all duration-300 group`}>
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${styles.bgGradient} rounded-full blur-2xl opacity-30 -translate-y-8 translate-x-8`}></div>
      
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl ${styles.iconBg}`}>
            {Icon ? <Icon className={`h-6 w-6 ${styles.iconColor}`} /> : null}
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
            <p className={`${lusitana.className} text-2xl font-bold text-slate-900`}>
              {value}
            </p>
          </div>
        </div>
        
        {/* Trend indicator (you can add this later with real data) */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1 text-green-600">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
              <path d="M6 0L12 6H8V12H4V6H0L6 0Z"/>
            </svg>
            <span>+12%</span>
          </div>
          <span className="text-slate-500">vs last month</span>
        </div>
      </div>
    </div>
  );
}
