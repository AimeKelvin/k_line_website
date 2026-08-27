import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Pencil, Trash2, ArrowLeft, Lock, LogOut } from 'lucide-react';
import { ProductForm, emptyProduct } from '../components/admin/ProductForm';
import { SettingsForm } from '../components/admin/SettingsForm';
import { useStore } from '../contexts/StoreContext';
import { api } from '../lib/api';
import type { Product } from '../types/product';

type Tab = 'products' | 'settings';

export function Admin() {
  const { products, settings, saveProduct, deleteProduct, updateSettings, loading } = useStore();
  const [authLoading, setAuthLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [tab, setTab] = useState<Tab>('products');
  const [editing, setEditing] = useState<Product | null>(null);
  const [creating, setCreating] = useState(false);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [actionError, setActionError] = useState('');

  useEffect(() => {
    api.me().then((me) => setAuthenticated(me.authenticated)).catch(() => setAuthenticated(false)).finally(() => setAuthLoading(false));
  }, []);

  if (authLoading) return <main className="min-h-screen bg-paper flex items-center justify-center text-[11px] uppercase tracking-[0.2em] text-ink/55">Checking session…</main>;

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center px-6">
        <form onSubmit={async (e) => {
          e.preventDefault(); setAuthError('');
          try { await api.login(email, password); setAuthenticated(true); setPassword(''); }
          catch (err) { setAuthError(err instanceof Error ? err.message : 'Could not sign in'); }
        }} className="w-full max-w-sm border border-ink/15 bg-shell/60 p-8">
          <Lock size={18} strokeWidth={1.2} className="text-ink" />
          <h1 className="mt-4 text-[16px] uppercase tracking-[0.16em] font-light text-ink">Shop admin</h1>
          <p className="mt-2 text-[11px] text-ink/55 leading-[1.7]">Sign in to manage products and store contact details.</p>
          <label htmlFor="admin-email" className="block mt-6 text-[9px] uppercase tracking-[0.2em] text-ink/55 mb-1.5">Email</label>
          <input id="admin-email" type="email" autoComplete="username" required value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full bg-white border border-ink/20 px-3 py-2 text-[12px] text-ink focus:outline-none focus:border-ink" />
          <label htmlFor="admin-password" className="block mt-4 text-[9px] uppercase tracking-[0.2em] text-ink/55 mb-1.5">Password</label>
          <input id="admin-password" type="password" autoComplete="current-password" required minLength={8} value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full bg-white border border-ink/20 px-3 py-2 text-[12px] text-ink focus:outline-none focus:border-ink" />
          {authError && <p role="alert" className="mt-2 text-[11px] text-red-700">{authError}</p>}
          <button type="submit" className="mt-6 w-full bg-ink text-white text-[10px] uppercase tracking-[0.22em] py-3 hover:bg-ink/85 transition-colors">Sign in</button>
          <Link to="/" className="mt-5 inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-ink/50 hover:text-ink"><ArrowLeft size={12} />Back to store</Link>
        </form>
      </main>
    );
  }

  const formOpen = creating || editing !== null;
  return (
    <main className="min-h-screen bg-paper px-6 md:px-10 lg:px-14 py-10">
      <header className="flex flex-wrap items-end justify-between gap-4 pb-8 border-b border-ink/15">
        <div><h1 className="text-[22px] md:text-[28px] uppercase tracking-[0.12em] font-light text-ink">Shop admin <span className="text-ink/40">//</span></h1><p className="mt-2 text-[11px] text-ink/55">{loading ? 'Loading catalog…' : `${products.length} pieces published · changes are stored in MongoDB`}</p></div>
        <div className="flex gap-4"><Link to="/" className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-ink border-b border-ink pb-0.5"><ArrowLeft size={12}/>View store</Link><button onClick={async()=>{await api.logout(); setAuthenticated(false);}} className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-ink/60"><LogOut size={12}/>Sign out</button></div>
      </header>
      <nav className="flex gap-2 py-6">{([['products','Products'],['settings','Store settings']] as const).map(([value,text])=><button key={value} onClick={()=>setTab(value)} className={`text-[9px] uppercase tracking-[0.2em] px-5 py-2.5 border ${tab===value?'bg-ink text-white border-ink':'border-ink/25 text-ink/70'}`}>{text}</button>)}</nav>
      {actionError && <p className="mb-4 text-[11px] text-red-700">{actionError}</p>}
      {tab === 'settings' ? <SettingsForm settings={settings} onSave={async (next)=>{setActionError('');try{await updateSettings(next)}catch(e){setActionError(e instanceof Error?e.message:'Could not save settings');throw e}}} /> : formOpen ?
        <ProductForm initial={editing ?? emptyProduct} isNewRecord={creating} onSave={async(product)=>{setActionError('');try{await saveProduct(product);setEditing(null);setCreating(false)}catch(e){setActionError(e instanceof Error?e.message:'Could not save product');throw e}}} onCancel={()=>{setEditing(null);setCreating(false)}} /> :
        <><div className="flex items-center justify-between gap-3 pb-5"><button onClick={()=>{setCreating(true);setEditing(null)}} className="inline-flex items-center gap-2 bg-ink text-white text-[10px] uppercase tracking-[0.22em] px-6 py-3"><Plus size={14}/>New piece</button></div>
        <ul className="border-t border-ink/15">{products.map(product=><li key={product.id} className="flex items-center gap-4 border-b border-ink/15 py-4"><img src={product.images[0]} alt="" className="h-16 w-16 object-cover shrink-0 bg-shell"/><div className="min-w-0 flex-1"><h2 className="text-[11px] uppercase tracking-[0.14em] text-ink truncate">{product.name}</h2><p className="text-[10px] text-ink/50 mt-1 truncate">{product.category} · {product.collection} · $ {product.price}</p><div className="flex flex-wrap gap-1.5 mt-2">{product.isNew&&<Tag>New arrival</Tag>}{product.isBestseller&&<Tag>Bestseller</Tag>}{!product.inStock&&<Tag>Made to order</Tag>}<Tag>{product.images.length} photos</Tag></div></div>{confirmId===product.id?<div className="flex gap-2"><button onClick={async()=>{try{await deleteProduct(product.id);setConfirmId(null)}catch(e){setActionError(e instanceof Error?e.message:'Delete failed')}}} className="text-[9px] uppercase tracking-[0.18em] bg-ink text-white px-4 py-2">Delete</button><button onClick={()=>setConfirmId(null)} className="text-[9px] uppercase tracking-[0.18em] border border-ink/25 px-4 py-2">Keep</button></div>:<div className="flex gap-2"><button aria-label={`Edit ${product.name}`} onClick={()=>{setEditing(product);setCreating(false)}} className="h-9 w-9 flex items-center justify-center border border-ink/20"><Pencil size={14}/></button><button aria-label={`Delete ${product.name}`} onClick={()=>setConfirmId(product.id)} className="h-9 w-9 flex items-center justify-center border border-ink/20"><Trash2 size={14}/></button></div>}</li>)}</ul>{products.length===0&&<p className="py-10 text-[12px] text-ink/55">No pieces yet. Add your first product.</p>}</>}
    </main>
  );
}

function Tag({children}:{children:React.ReactNode}) { return <span className="text-[8px] uppercase tracking-[0.15em] border border-ink/15 px-1.5 py-0.5 text-ink/50">{children}</span>; }
