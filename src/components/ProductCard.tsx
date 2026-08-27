import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  aspect?: string;
}

export function ProductCard({
  product,
  aspect = 'aspect-[4/5]'
}: ProductCardProps) {
  return (
    <article className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className={`relative overflow-hidden bg-white ${aspect}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy" />
          
          {!product.inStock &&
          <span className="absolute top-3 left-3 bg-white/90 text-ink text-[8px] uppercase tracking-[0.2em] px-2 py-1">
              Made to order
            </span>
          }
          <span className="absolute inset-x-0 bottom-0 bg-ink text-white text-[9px] uppercase tracking-[0.26em] py-3 text-center translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300">
            View details
          </span>
        </div>

        <div className="pt-3">
          <h3 className="text-[10px] uppercase tracking-[0.16em] text-ink">
            {product.name}
          </h3>
          <p className="text-[10px] text-ink/45 mt-1">{product.material}</p>
          <p className="text-[11px] text-ink mt-2">$ {product.price}</p>
        </div>
      </Link>
    </article>);

}