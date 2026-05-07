import Link from "next/link";

const productIds = ["1", "2", "3"];

export default function ProductsPage() {
  return (
    <section>
      <h1>Products Page</h1>
      <p>Choose a product to view dynamic route details.</p>
      <ul>
        {productIds.map((id) => (
          <li key={id}>
            <Link href={`/products/${id}`}>Product {id}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
