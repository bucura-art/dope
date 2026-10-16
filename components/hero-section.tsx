import { products } from "@/data/products";
import ProductCard from "@/components/product-card";

export default function HeroSection() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__intro">
        <h1 id="home-title">The Dope<br />Company</h1>
      </div>

      <div className="product-showcase" role="group" aria-label="Our products">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
