'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import {
  UserGroupIcon as UserGroupIconSolid,
  HomeIcon as HomeIconSolid,
  DocumentDuplicateIcon as DocumentDuplicateIconSolid,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { 
    name: 'Home', 
    href: '/dashboard', 
    icon: HomeIcon,
    iconSolid: HomeIconSolid
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
    iconSolid: DocumentDuplicateIconSolid
  },
  { 
    name: 'Customers', 
    href: '/dashboard/customers', 
    icon: UserGroupIcon,
    iconSolid: UserGroupIconSolid
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;
        const LinkIcon = isActive ? link.iconSolid : link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group relative",
              {
                "bg-blue-50 text-blue-700 shadow-sm": isActive,
                "text-slate-600 hover:text-slate-900 hover:bg-slate-50": !isActive,
              }
            )}
          >
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full"></div>
            )}
            <LinkIcon className={clsx(
              "w-5 h-5 transition-colors",
              {
                "text-blue-600": isActive,
                "text-slate-400 group-hover:text-slate-600": !isActive,
              }
            )} />
            <span className="hidden md:block">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
