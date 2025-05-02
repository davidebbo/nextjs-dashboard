import { Button } from '@/app/ui/button';
import { updateCustomer } from '@/app/lib/actions';
import { Customer } from '@/app/lib/definitions';

export default function EditForm({
  customer,
}: {
  customer: Customer;
}) {
  const updateCustomerWithId = updateCustomer.bind(null, customer.id);

  return (
    <form action={updateCustomerWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            defaultValue={customer.name}
            type="text"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm placeholder:text-gray-400"
            placeholder="Enter customer name"
            aria-describedby="name-error"
          />
        </div>

        {/* Customer Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            defaultValue={customer.email}
            type="email"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm placeholder:text-gray-400"
            placeholder="Enter customer email"
            aria-describedby="email-error"
          />
        </div>

        {/* Customer Image URL */}
        <div className="mb-4">
          <label htmlFor="imageUrl" className="mb-2 block text-sm font-medium">
            Profile Image URL
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            defaultValue={customer.image_url}
            type="text"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm placeholder:text-gray-400"
            placeholder="Enter profile image URL"
            aria-describedby="imageUrl-error"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button
          type="button"
          href="/dashboard/customers"
          variant="secondary"
        >
          Cancel
        </Button>
        <Button type="submit">Edit Customer</Button>
      </div>
    </form>
  );
}