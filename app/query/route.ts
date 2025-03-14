// TODO: can delete this file

import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// async function listInvoices() {
// 	const data = await sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;

// 	return data;
// }

async function listTenInvoices() {
  const result = await sql`
          SELECT * 
          FROM invoices 
          LIMIT 15
          `;
  return result; 
}


export async function GET() {

  // try {
  // 	return Response.json(await listInvoices());
  // } catch (error) {
  // 	return Response.json({ error }, { status: 500 });
  // }


  try {
  	return Response.json(await listTenInvoices());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
