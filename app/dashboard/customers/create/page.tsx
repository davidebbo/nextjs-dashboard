import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/customers/breadcrumbs';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create Customer',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Create Customer
      </h1>
      <Form />
    </main>
  );
}