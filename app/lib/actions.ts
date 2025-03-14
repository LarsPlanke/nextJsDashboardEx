'use server';
// mark all the export func within the file as Server actions

export async function createInvoice(formData: FormData) {    
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      };

      console.log(typeof rawFormData.amount);
      // Test it out:
      console.log(rawFormData);
}

