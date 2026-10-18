"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const cardStyle = {
    "--product-color": product.themeColor,
    "--card-delay": `${index * 70}ms`,
  } as CSSProperties;
  const isUnpublished =
    !product.productUrl || product.productUrl.startsWith("https://example.com");

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isNoticeOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isNoticeOpen && dialog.open) {
      dialog.close();
    }
  }, [isNoticeOpen]);

  const content = (
    <>
      <div className="product-card__copy">
        <h2 style={{ fontFamily: product.fontFamily }}>{product.name}</h2>
        <p className="product-card__description"><mark>{product.shortDescription}</mark></p>
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

  if (!isUnpublished) {
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
    <>
      <button
        className="product-card"
        type="button"
        style={cardStyle}
        aria-label={`${product.name}: ${product.shortDescription}`}
        aria-haspopup="dialog"
        onClick={() => setIsNoticeOpen(true)}
      >
        {content}
      </button>
      <dialog
        ref={dialogRef}
        className="not-published-dialog"
        aria-labelledby={`not-published-title-${product.slug}`}
        onClose={() => setIsNoticeOpen(false)}
      >
        <h2 id={`not-published-title-${product.slug}`}>Not Published!</h2>
        <button
          className="not-published-dialog__button"
          type="button"
          onClick={() => dialogRef.current?.close()}
        >
          Okay
        </button>
      </dialog>
    </>
  );
}
