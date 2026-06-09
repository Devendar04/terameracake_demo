const outlets = [
  {
    icon: '🏪',
    badge: 'Original Outlet',
    badgeColor: 'bg-rose',
    name: 'Tera Mera Cake – 100 Feet Road',
    address: 'Opp SBI Bank, 100 Feet Rd, Shobhagpura, Udaipur, Rajasthan 313001',
    phone: '+91 97722 82666',
    phoneHref: 'tel:+919772282666',
    hours: '10:00 AM – 10:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Tera+Mera+Cake+100+Feet+Road+Udaipur',
    accentColor: 'rose',
    hoverBorder: 'hover:border-rose/40',
    dirBtnStyle: { background: 'rgba(232,99,90,0.15)', color: '#E8635A' },
    dirBtnHover: '#E8635A',
  },
  {
    icon: '🏬',
    badge: 'New Outlet',
    badgeColor: 'bg-caramel',
    name: 'Tera Mera Cake – Hiran Magri',
    address: 'Archie The Divine Building, Near Narayan Seva Sansthan, Sector 4, Hiran Magri, Udaipur',
    phone: '+91 97722 03066',
    phoneHref: 'tel:+919772203066',
    hours: '11:00 AM – 11:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Tera+Mera+Cake+Hiran+Magri+Udaipur',
    accentColor: 'caramel',
    hoverBorder: 'hover:border-caramel/50',
    dirBtnStyle: { background: 'rgba(196,123,43,0.15)', color: '#C47B2B' },
    dirBtnHover: '#C47B2B',
  },
];

export default function Outlets() {
  return (
    <section id="outlets" className="py-24 bg-chocolate text-white relative overflow-hidden" aria-labelledby="outlets-heading">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-rose/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-caramel/10 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle,#FFF8F0 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14 space-y-3">
          <p className="font-body text-rose font-semibold tracking-[0.2em] uppercase text-xs">Visit Us</p>
          <h2 id="outlets-heading" className="font-display text-4xl lg:text-5xl font-black text-cream">Our Outlets</h2>
          <p className="font-body text-cream/55 text-lg">Find us at two locations across Udaipur</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {outlets.map(o => (
            <article key={o.name}
              className={`bg-mocha/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 ${o.hoverBorder} transition-all hover:-translate-y-1`}>
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl">{o.icon}</span>
                <span className={`font-body text-xs font-bold px-3 py-1.5 rounded-full ${o.badgeColor} text-white`}>{o.badge}</span>
              </div>
              <h3 className="font-display font-bold text-cream text-xl mb-4">{o.name}</h3>
              <address className="not-italic space-y-3 mb-6">
                <div className="flex gap-3">
                  <span className="text-rose mt-0.5 flex-shrink-0">📍</span>
                  <p className="font-body text-cream/65 text-sm leading-relaxed">{o.address}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-rose flex-shrink-0">📞</span>
                  <a href={o.phoneHref} className="font-body text-cream/65 text-sm hover:text-rose transition-colors">{o.phone}</a>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-rose flex-shrink-0">🕙</span>
                  <p className="font-body text-cream/65 text-sm"><strong className="text-cream">Mon–Sun</strong> · {o.hours}</p>
                </div>
              </address>
              <a href={o.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-semibold text-sm transition-all"
                style={o.dirBtnStyle}
                onMouseEnter={e => { e.currentTarget.style.background = o.dirBtnHover; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { Object.assign(e.currentTarget.style, o.dirBtnStyle); }}>
                <MapIcon />
                Get Directions
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="font-body text-cream/55 mb-5">Can't visit? Order from anywhere in Udaipur.</p>
          <a href="https://wa.link/7h56j5" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-body font-black text-base transition-all hover:-translate-y-1"
            style={{ background: '#25D366', boxShadow: '0 16px 44px rgba(37,211,102,0.4)' }}>
            <WAIcon />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function MapIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function WAIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 2C6.477 2 2 6.484 2 12.017c0 1.987.514 3.86 1.426 5.478L2 22l4.62-1.399A10.016 10.016 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2"/>
    </svg>
  );
}
