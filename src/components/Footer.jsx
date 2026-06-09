export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-chocolate text-cream" role="contentinfo">
      {/* Wave divider */}
      <div className="bg-warm-white">
        <svg viewBox="0 0 1440 56" className="w-full h-10 block">
          <path d="M0 56 L0 28 Q360 0 720 28 Q1080 56 1440 28 L1440 56 Z" fill="#3D1F0D" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-rose flex items-center justify-center">
                <span className="text-white text-xl">🎂</span>
              </div>
              <div>
                <span className="font-display font-black text-cream text-xl leading-none block">Tera Mera Cake</span>
                <span className="font-body text-cream/45 text-xs tracking-widest uppercase">Udaipur, Rajasthan</span>
              </div>
            </div>
            <p className="font-body text-cream/55 text-sm leading-relaxed max-w-sm">
              Baked with Love, Shared with Joy. Udaipur's favourite bakery for custom cakes, pastries, macarons and more.
            </p>
            <div className="flex gap-3">
              <SocialBtn href="https://www.instagram.com/terameracake/" hoverBg="#E8635A" label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialBtn>
              <SocialBtn href="https://wa.link/7h56j5" hoverBg="#25D366" label="WhatsApp">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 2C6.477 2 2 6.484 2 12.017c0 1.987.514 3.86 1.426 5.478L2 22l4.62-1.399A10.016 10.016 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2"/>
                </svg>
              </SocialBtn>
            </div>
          </div>

          {/* Quick links */}
          <nav>
            <h4 className="font-display font-bold text-cream text-sm mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {[['Home','#hero'],['About Us','#about'],['Our Menu','#products'],['Showcase','#showcase'],['Outlets','#outlets'],['Order Now','https://wa.link/7h56j5']].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="font-body text-cream/50 text-sm hover:text-rose transition-colors"
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic space-y-3">
            <h4 className="font-display font-bold text-cream text-sm mb-4 uppercase tracking-wide">Contact</h4>
            <a href="tel:+919772282666" className="flex gap-2 text-cream/50 text-sm hover:text-rose transition-colors items-center">
              <span>📞</span>+91 97722 82666
            </a>
            <a href="tel:+919772203066" className="flex gap-2 text-cream/50 text-sm hover:text-rose transition-colors items-center">
              <span>📞</span>+91 97722 03066
            </a>
            <p className="flex gap-2 text-cream/50 text-sm items-center">
              <span>🕙</span>Mon–Sun · 10 AM – 10 PM
            </p>
            <p className="flex gap-2 text-cream/40 text-xs leading-relaxed">
              <span className="flex-shrink-0 mt-0.5">📍</span>100 Feet Rd, Shobhagpura, Udaipur, Rajasthan 313001
            </p>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-cream/35 text-xs">© {year} Tera Mera Cake · Udaipur, Rajasthan · All rights reserved</p>
          <p className="font-body text-cream/25 text-xs">
            Built with ❤️ by{' '}
            <a href="https://techbrise.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-cream/55 transition-colors">TechBrise Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ href, hoverBg, label, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
      style={{ background: 'rgba(255,255,255,0.1)' }}
      onMouseEnter={e => e.currentTarget.style.background = hoverBg}
      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
      {children}
    </a>
  );
}
