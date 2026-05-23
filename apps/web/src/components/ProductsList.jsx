import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { getProducts, getProductQuantities } from '@/api/EcommerceApi';

const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRTVFN0VCIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJRdWlja3NhbmQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD4KPC9zdmc+Cg==";

const ProductCard = ({ product, index }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const displayVariant = useMemo(() => product.variants[0], [product]);
  const hasSale = useMemo(() => displayVariant && displayVariant.sale_price_in_cents !== null, [displayVariant]);
  const displayPrice = useMemo(() => hasSale ? displayVariant.sale_price_formatted : displayVariant.price_formatted, [displayVariant, hasSale]);
  const originalPrice = useMemo(() => hasSale ? displayVariant.price_formatted : null, [displayVariant, hasSale]);

  const handleAddToCart = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.variants.length > 1) {
      navigate(`/product/${product.id}`);
      return;
    }

    const defaultVariant = product.variants[0];

    try {
      await addToCart(product, defaultVariant, 1, defaultVariant.inventory_quantity);
      toast({
        title: 'Added to Cart',
        description: `${product.title} has been added to your cart.`,
      });
    } catch (error) {
      toast({
        title: 'Error adding to cart',
        description: error.message,
        variant: 'destructive'
      });
    }
  }, [product, addToCart, toast, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="h-full"
    >
      <Link to={`/product/${product.id}`} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#e9dfce] bg-white shadow-[0_18px_60px_rgba(55,43,30,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(55,43,30,0.13)]">
        <div className="relative h-[19rem] overflow-hidden bg-[#efe8dc] sm:h-[21rem] lg:h-[22rem]">
          <img
            src={product.image || placeholderImage}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-transparent" />
          {product.ribbon_text && (
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#4a3927] shadow-sm backdrop-blur-sm">
              {product.ribbon_text}
            </div>
          )}
          {hasSale && (
            <div className="absolute right-4 top-4 rounded-full bg-[#8f4c3b] px-3 py-1.5 text-xs font-bold text-white shadow-sm">
              Sale
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-start justify-between gap-4">
            <h3 className="line-clamp-2 text-[1.25rem] font-bold leading-tight tracking-[-0.025em] text-[#2f281f] transition-colors group-hover:text-[#9d7b33]">
              {product.title}
            </h3>
            <div className="shrink-0 text-right text-sm font-bold text-[#2f281f]">
              {hasSale && <span className="block text-xs text-[#8f4c3b] line-through">{originalPrice}</span>}
              <span>{displayPrice}</span>
            </div>
          </div>

          <p className="mb-5 line-clamp-2 text-[0.95rem] leading-6 text-[#6c6256]">
            {product.subtitle || 'Premium curated ritual piece for home, gifting, and calm daily moments.'}
          </p>

          <Button
            onClick={handleAddToCart}
            variant="outline"
            className="mt-auto h-11 rounded-full border-[#d8c696] bg-white text-sm font-bold text-[#3a2c1c] hover:border-[#c9a84f] hover:bg-[#c9a84f] hover:text-[#21180f]"
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </Link>
    </motion.div>
  );
};

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsWithQuantities = async () => {
      try {
        setLoading(true);
        setError(null);
        const productsResponse = await getProducts();
        if (productsResponse.products.length === 0) {
          setProducts([]);
          return;
        }
        const productIds = productsResponse.products.map(product => product.id);
        const quantitiesResponse = await getProductQuantities({ fields: 'inventory_quantity', product_ids: productIds });
        const variantQuantityMap = new Map();
        quantitiesResponse.variants.forEach(variant => variantQuantityMap.set(variant.id, variant.inventory_quantity));
        setProducts(productsResponse.products.map(product => ({
          ...product,
          variants: product.variants.map(variant => ({
            ...variant,
            inventory_quantity: variantQuantityMap.get(variant.id) ?? variant.inventory_quantity
          }))
        })));
      } catch (err) {
        setError(err.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    fetchProductsWithQuantities();
  }, []);

  if (loading) {
    return <div className="flex h-60 items-center justify-center"><Loader2 className="h-9 w-9 animate-spin text-[#c9a84f]" /></div>;
  }

  if (error) {
    return <div className="rounded-2xl bg-[#8f4c3b]/10 p-8 text-center text-[#8f4c3b]">Error loading products: {error}</div>;
  }

  if (products.length === 0) {
    return <div className="rounded-2xl bg-white p-10 text-center text-[#6c6256]">No products available at the moment.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
      {products.slice(0, 8).map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductsList;
