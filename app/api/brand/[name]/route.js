import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const { name } = params;  

  console.log("brand= ",name);
  
 
  try {
    // Fetch categories based on the "type" parameter
    const categories = await prisma.product.findMany({
      where: { brand:name },
    });

    if (!categories || categories.length === 0) {
      return new Response(JSON.stringify({ message: 'No brand found for the specified type.' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.error('Error fetching brand:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
