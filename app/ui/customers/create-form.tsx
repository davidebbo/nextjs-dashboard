'use client';

import { Button } from '@/app/ui/button';
import { createCustomer } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function CreateForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useActionState(createCustomer, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm placeholder:text-gray-400"
            placeholder="Enter customer name"
            aria-describedby="name-error"
          />
          {state.errors?.name ? (
            <div id="name-error" className="mt-2 text-sm text-red-500">
              {state.errors.name[0]}
            </div>
          ) : null}
        </div>

        {/* Customer Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm placeholder:text-gray-400"
            placeholder="Enter customer email"
            aria-describedby="email-error"
          />
          {state.errors?.email ? (
            <div id="email-error" className="mt-2 text-sm text-red-500">
              {state.errors.email[0]}
            </div>
          ) : null}
        </div>

        {/* Customer Image URL */}
        <div className="mb-4">
          <label htmlFor="imageUrl" className="mb-2 block text-sm font-medium">
            Profile Image URL
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm placeholder:text-gray-400"
            placeholder="Enter profile image URL"
            aria-describedby="imageUrl-error"
          />
          {state.errors?.imageUrl ? (
            <div id="imageUrl-error" className="mt-2 text-sm text-red-500">
              {state.errors.imageUrl[0]}
            </div>
          ) : null}
        </div>

        {/* Display form errors if any */}
        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
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
        <Button type="submit">Create Customer</Button>
      </div>
    </form>
  );
}