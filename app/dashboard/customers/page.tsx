import { fetchFilteredCustomers } from '@/app/lib/data';
import CostumersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Customers',
  };


export default async function Page(props: { 
    searchParams: Promise<{ 
        query?: string;
        page?: string;
     }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams.query || '';
    
    const customers = await fetchFilteredCustomers(query);
    
    return (
        <main>
            <CostumersTable customers={customers} /> 
        </main>
    );
}