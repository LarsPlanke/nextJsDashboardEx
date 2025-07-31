import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-white border-r border-slate-200 shadow-sm">
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-100">
        <Link
          className="flex items-center gap-3 group"
          href="/"
        >
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
              <div className="w-6 text-white">
                <AcmeLogo />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              Dashboard
            </h2>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 flex flex-col py-6">
        <nav className="flex-1 px-4 space-y-2">
          <NavLinks />
        </nav>
        
        {/* Spacer */}
        <div className="flex-1"></div>
        
        {/* Sign Out */}
        <div className="px-4 pb-4">
          <form           
              action={async () => {
              'use server';
              await signOut({ redirectTo: '/' });
            }}
          >
            <button className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 group">
              <PowerIcon className="w-5 h-5 group-hover:text-red-600" />
              <span className="hidden md:block">Sign Out</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
