import Image from "next/image";
import type { CSSProperties } from "react";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const cardStyle = {
    "--product-color": product.themeColor,
    "--card-delay": `${index * 70}ms`,
  } as CSSProperties;

  const content = (
    <>
      <div className="product-card__copy">
        <h2 style={{ fontFamily: product.fontFamily }}>{product.name}</h2>
        <p><mark>{product.shortDescription}</mark></p>
      </div>
      <div className="product-card__artwork" aria-hidden="true">
        <Image
          className="product-card__image"
          src={product.logo}
          alt=""
          width={560}
          height={560}
          sizes="(max-width: 760px) 72vw, 22vw"
        />
      </div>
    </>
  );

  if (product.productUrl) {
    return (
      <a
        className="product-card"
        href={product.productUrl}
        target="_blank"
        rel="noreferrer"
        style={cardStyle}
        aria-label={`${product.name}: ${product.shortDescription}`}
      >
        {content}
      </a>
    );
  }

  return (
    <article className="product-card" style={cardStyle}>
      {content}
    </article>
  );
}
