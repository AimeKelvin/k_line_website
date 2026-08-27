import type { Product, StoreSettings } from '../types/product';

const API = import.meta.env.VITE_API_URL || '/api';

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API}${path}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  if (!response.ok) {
    const body = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(body.error || `Request failed (${response.status})`);
  }
  if (response.status === 204) return undefined as T;
  return response.json();
}

export const api = {
  products: () => request<Product[]>('/products'),
  settings: () => request<StoreSettings>('/settings'),
  createProduct: (product: Product) => request<Product>('/products', { method: 'POST', body: JSON.stringify(product) }),
  updateProduct: (id: string, product: Product) => request<Product>(`/products/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(product) }),
  deleteProduct: (id: string) => request<void>(`/products/${encodeURIComponent(id)}`, { method: 'DELETE' }),
  updateSettings: (settings: StoreSettings) => request<StoreSettings>('/settings', { method: 'PUT', body: JSON.stringify(settings) }),
  me: () => request<{authenticated:boolean; email?:string}>('/auth/me'),
  login: (email: string, password: string) => request<{authenticated:boolean; email:string}>('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  logout: () => request<void>('/auth/logout', { method: 'POST' })
};
