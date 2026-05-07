

export default async function ProductDetailPage({ params }: {params:{id:string}}) {
  const { id } = await params;

  return (
    <section>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Product Name: Product {id}</p>
      <p>Product Description: This is product {id}</p>
    </section>
  );
}
