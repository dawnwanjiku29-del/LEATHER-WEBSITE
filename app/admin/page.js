'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { products } from '../products';

const ACCESS_KEY = 'lgr-admin-member';
const team = [
  { email: 'owner@lookinggoodrugged.com', name: 'Collection owner', initials: 'CO', passcode: 'gallery' },
  { email: 'studio@lookinggoodrugged.com', name: 'Studio manager', initials: 'SM', passcode: 'atelier' }
];
const orders = [
  { id: 'LGR-2048', customer: 'Grace W.', item: 'Double-Buckle Briefcase', value: 'KSh 16,500', state: 'Ready to pack' },
  { id: 'LGR-2047', customer: 'Elias K.', item: 'Tan Leather Weekender', value: 'KSh 18,900', state: 'Awaiting payment' }
];
const categoryOrder = ['work', 'travel', 'everyday', 'accessories'];

function Icon({ children }) { return <span className="admin-icon" aria-hidden="true">{children}</span>; }

function AccessGate({ onUnlock }) {
  const [email, setEmail] = useState('');
  const [passcode, setPasscode] = useState('');
  const [message, setMessage] = useState('');
  function enterDesk(event) {
    event.preventDefault();
    const member = team.find((person) => person.email === email.trim().toLowerCase() && person.passcode === passcode);
    if (!member) return setMessage('That access pair is not recognised. Please check with the collection owner.');
    window.sessionStorage.setItem(ACCESS_KEY, member.email);
    onUnlock(member);
  }
  return <main className="admin-access-page">
    <header className="admin-header admin-access-header"><Link className="logo" href="/">LOOKING GOOD <span>RUGGED</span></Link><Link className="admin-back" href="/">← Return to collection</Link></header>
    <section className="access-layout"><div className="access-copy"><p className="eyebrow">PRIVATE STUDIO DESK</p><h1>The work behind<br /><em>the carry.</em></h1><p>Orders, collection notes and stock signals—kept in one quiet corner for the people who make it happen.</p><div className="access-rule"><Icon>✦</Icon><span>Access is reserved for two approved studio members.</span></div></div>
      <form className="access-card" onSubmit={enterDesk}><div className="access-card-top"><span className="admin-lock">⌁</span><p>IDENTITY CHECK</p></div><h2>Welcome back.</h2><p className="access-card-copy">Use your studio email and private phrase to enter the desk.</p><label htmlFor="admin-email">Studio email</label><input id="admin-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@lookinggoodrugged.com" autoComplete="email" required /><label htmlFor="admin-passcode">Private phrase</label><input id="admin-passcode" type="password" value={passcode} onChange={(event) => setPasscode(event.target.value)} placeholder="••••••••" autoComplete="current-password" required />{message && <p className="access-error" role="alert">{message}</p>}<button className="admin-primary" type="submit">Enter the studio desk <span>↗</span></button><p className="access-help">Need help? Contact the collection owner directly.</p></form>
    </section>
  </main>;
}

function Dashboard({ member, onLock }) {
  const [activeTab, setActiveTab] = useState('Overview');
  const [notice, setNotice] = useState('');
  const categoryCounts = useMemo(() => categoryOrder.map((category) => ({ category, count: products.filter((product) => product.category === category).length })), []);
  const featured = products.filter((product) => product.category === 'travel').slice(0, 3);
  function notify(text) { setNotice(text); window.setTimeout(() => setNotice(''), 3500); }
  return <main className="admin-shell">
    <aside className="admin-sidebar"><Link className="logo admin-side-logo" href="/">LOOKING GOOD <span>RUGGED</span></Link><div className="sidebar-label">STUDIO DESK</div><nav className="admin-nav" aria-label="Administration">{['Overview', 'Orders', 'Collection', 'Messages'].map((item, index) => <button key={item} className={activeTab === item ? 'active' : ''} onClick={() => { setActiveTab(item); notify(`${item} is selected.`); }}><Icon>{['▦', '◫', '◇', '✦'][index]}</Icon>{item}{item === 'Messages' && <b>3</b>}</button>)}</nav><div className="sidebar-footer"><div className="member-avatar">{member.initials}</div><div><strong>{member.name}</strong><span>Approved member</span></div><button className="lock-desk" onClick={onLock} aria-label="Lock studio desk">↪</button></div></aside>
    <section className="admin-content"><header className="admin-topbar"><div><p className="eyebrow">{activeTab.toUpperCase()} · STUDIO DESK</p><h1>Good morning, <em>studio.</em></h1></div><div className="topbar-actions"><span className="status-dot">All systems calm</span><Link href="/" className="view-store">View storefront ↗</Link></div></header>
      <section className="admin-summary" aria-label="Collection summary"><article><span className="metric-label">LIVE COLLECTION</span><strong>{products.length}</strong><p>pieces currently shown</p><div className="metric-line"><i style={{ width: '78%' }} /></div></article><article><span className="metric-label">OPEN ORDERS</span><strong>07</strong><p><b>+3</b> since Monday</p><div className="metric-order">↗ <span>Steady pace</span></div></article><article><span className="metric-label">STUDIO NOTES</span><strong>04</strong><p>actions need your eye</p><button onClick={() => notify('Studio notes opened.')}>Review notes <span>↗</span></button></article></section>
      <section className="admin-main-grid"><article className="admin-orders-card"><div className="section-heading"><div><p className="eyebrow">AT A GLANCE</p><h2>Orders in motion.</h2></div><button onClick={() => { setActiveTab('Orders'); notify('Orders is selected.'); }}>See all <span>↗</span></button></div><div className="order-list">{orders.map((order) => <div className="order-row" key={order.id}><div><strong>{order.id}</strong><span>{order.customer} · {order.item}</span></div><span className={`order-state ${order.state === 'Awaiting payment' ? 'pending' : ''}`}>{order.state}</span><b>{order.value}</b></div>)}</div></article><article className="admin-insight-card"><div className="insight-mark">✦</div><p className="eyebrow">COLLECTION PULSE</p><h2>Travel pieces are setting the pace.</h2><p>They make up <strong>35%</strong> of the pieces viewed this week.</p><div className="insight-bars">{categoryCounts.map(({ category, count }) => <div key={category}><span>{category}</span><i><b style={{ width: `${(count / 10) * 100}%` }} /></i><em>{count}</em></div>)}</div></article></section>
      <section className="admin-stock-section"><div className="section-heading"><div><p className="eyebrow">CURATED NEXT</p><h2>Ready for their close-up.</h2></div><button onClick={() => { setActiveTab('Collection'); notify('Collection is selected.'); }}>Open collection <span>↗</span></button></div><div className="admin-product-grid">{featured.map((product) => <article className="admin-product" key={product.name}><div className="admin-product-image"><img src={`/images/optimized/studio/${product.image.replace(/\.(png|jpeg)$/, '.webp')}`} alt="" /><span>LIVE</span></div><div><p>{product.tag}</p><h3>{product.name}</h3><button onClick={() => notify(`${product.name} is ready to edit.`)}>Edit piece <span>↗</span></button></div></article>)}</div></section>
    </section>{notice && <div className="admin-toast" role="status">{notice}</div>}
  </main>;
}

export default function AdminPage() {
  const [member, setMember] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => { const savedEmail = window.sessionStorage.getItem(ACCESS_KEY); setMember(team.find((person) => person.email === savedEmail) || null); setReady(true); }, []);
  function lockDesk() { window.sessionStorage.removeItem(ACCESS_KEY); setMember(null); }
  if (!ready) return <main className="admin-access-page" />;
  return member ? <Dashboard member={member} onLock={lockDesk} /> : <AccessGate onUnlock={setMember} />;
}
