import Link from 'next/link';
import { products } from '../products';

export const metadata = {
  title: 'Admin | Looking Good Rugged',
  description: 'Collection administration for Looking Good Rugged.'
};

export default function AdminPage() {
  return (
    <main className="admin-page">
      <header className="admin-header">
        <Link className="logo" href="/">LOOKING GOOD <span>RUGGED</span></Link>
        <Link className="admin-back" href="/">← Back to website</Link>
      </header>

      <section className="admin-intro" aria-labelledby="admin-title">
        <p className="eyebrow">COLLECTION ADMIN</p>
        <h1 id="admin-title">Manage your collection.</h1>
        <p>Use this overview to keep track of the products presented on your website.</p>
      </section>

      <section className="admin-panel" aria-labelledby="inventory-title">
        <div className="admin-panel-heading">
          <div>
            <p className="eyebrow">CURRENT INVENTORY</p>
            <h2 id="inventory-title">{products.length} pieces in the collection</h2>
          </div>
          <a className="button" href="mailto:lookinggoodrugged@example.com?subject=Website%20collection%20update">Request an update</a>
        </div>
        <div className="admin-table-wrap">
          <table>
            <thead>
              <tr><th scope="col">Product</th><th scope="col">Collection</th><th scope="col">Type</th></tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.tag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
