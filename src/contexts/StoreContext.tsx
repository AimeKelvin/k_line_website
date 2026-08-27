import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Product, StoreSettings } from '../types/product';
import { defaultSettings } from '../data/products';
import { api } from '../lib/api';

interface StoreValue {
  products: Product[];
  settings: StoreSettings;
  loading: boolean;
  error: string | null;
  getProduct: (id: string) => Product | undefined;
  saveProduct: (product: Product) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  updateSettings: (settings: StoreSettings) => Promise<void>;
  refreshStore: () => Promise<void>;
}
const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [settings, setSettings] = useState<StoreSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshStore = useCallback(async () => {
    try {
      setError(null);
      const [nextProducts, nextSettings] = await Promise.all([api.products(), api.settings()]);
      setProducts(nextProducts);
      if (nextSettings) setSettings(nextSettings);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load store');
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { void refreshStore(); }, [refreshStore]);
  const getProduct = useCallback((id: string) => products.find((p) => p.id === id), [products]);

  const saveProduct = useCallback(async (product: Product) => {
    const existing = products.some((p) => p.id === product.id);
    const saved = existing ? await api.updateProduct(product.id, product) : await api.createProduct(product);
    setProducts((prev) => existing ? prev.map((p) => p.id === saved.id ? saved : p) : [saved, ...prev]);
  }, [products]);

  const deleteProduct = useCallback(async (id: string) => {
    await api.deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const updateSettings = useCallback(async (next: StoreSettings) => {
    setSettings(await api.updateSettings(next));
  }, []);

  const value = useMemo(() => ({ products, settings, loading, error, getProduct, saveProduct, deleteProduct, updateSettings, refreshStore }), [products, settings, loading, error, getProduct, saveProduct, deleteProduct, updateSettings, refreshStore]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreValue {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  return context;
}
