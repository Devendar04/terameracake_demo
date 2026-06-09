import { useState, useEffect } from 'react';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Menu' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#outlets', label: 'Outlets' },
  { href: '#gallery', label: 'Gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMenuOpen(false);

  return (
    <header
      role="banner"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(255,253,249,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(61,31,13,0.10)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group" aria-label="Tera Mera Cake homepage">
          <div className="w-11 h-11 rounded-full bg-rose flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-xl">🎂</span>
          </div>
          <div className="leading-none">
            <span className="font-display font-black text-chocolate text-xl block">Tera Mera</span>
            <span className="font-body text-caramel text-[11px] tracking-[0.18em] uppercase">Cake · Udaipur</span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link font-body text-mocha hover:text-rose text-sm font-medium transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.link/7h56j5"
          target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-rose text-white px-5 py-2.5 rounded-full font-body font-bold text-sm transition-all hover:-translate-y-0.5"
          style={{ boxShadow: '0 8px 24px rgba(232,99,90,0.35)' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#C4423A'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(232,99,90,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#E8635A'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(232,99,90,0.35)'; }}
        >
          <WhatsAppIcon />
          Order Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span style={{ display: 'block', width: 24, height: 2, background: '#3D1F0D', borderRadius: 9, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#3D1F0D', borderRadius: 9, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#3D1F0D', borderRadius: 9, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '420px' : '0' }}
      >
        <ul className="bg-warm-white border-t border-rose/10 px-6 py-4 space-y-2">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="block font-body text-mocha hover:text-rose py-2 font-medium" onClick={closeMobile}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="https://wa.link/7h56j5" target="_blank" rel="noopener noreferrer"
               className="block text-center bg-rose text-white py-3 rounded-full font-bold text-sm mt-2" onClick={closeMobile}>
              Order Now on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 2C6.477 2 2 6.484 2 12.017c0 1.987.514 3.86 1.426 5.478L2 22l4.62-1.399A10.016 10.016 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2"/>
    </svg>
  );
}
