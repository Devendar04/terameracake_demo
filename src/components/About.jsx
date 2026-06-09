export default function About() {
  return (
    <section id="about" className="py-24 bg-warm-white relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-caramel/6 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-rose/5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-caramel/12 to-rose/8 rounded-[3rem] rotate-3" />
            <div className="relative bg-caramel-light rounded-[3rem] p-10 -rotate-1 shadow-2xl">
              <WeddingCakeSVG />
              <div className="absolute -top-5 -right-5 bg-rose text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-xl text-center">
                <span className="font-body font-bold text-xs leading-tight">Open<br/>Daily</span>
                <span className="font-body text-[10px] opacity-90">10–10 PM</span>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-7 order-1 lg:order-2">
            <div>
              <p className="font-body text-rose font-semibold tracking-[0.2em] uppercase text-xs mb-3">About Us</p>
              <h2 id="about-heading" className="font-display text-4xl lg:text-5xl font-black text-chocolate leading-tight">
                Udaipur's Sweet <span className="text-caramel">Destination</span>
              </h2>
            </div>
            <p className="font-body text-mocha/75 text-lg leading-relaxed">
              Tera Mera Cake is Udaipur's most beloved bakery — a place where every bite tells a story. From custom celebration cakes to freshly baked pastries, macarons, and ice creams, we craft sweet memories for locals and visitors alike.
            </p>
            <p className="font-body text-mocha/65 leading-relaxed">
              Whether you're marking a milestone birthday, a wedding, or simply craving something indulgent, our expert bakers blend premium ingredients with genuine passion.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: '🎨', title: 'Custom Designs', desc: 'Every cake is a canvas — tell us your dream.' },
                { icon: '🌿', title: 'Fresh Ingredients', desc: 'Finest quality sourced daily for maximum flavour.' },
                { icon: '🚚', title: 'Home Delivery', desc: 'Doorstep delivery across all of Udaipur.' },
                { icon: '🎈', title: 'Balloon Décor', desc: 'Complete your celebration with balloon decoration.' },
              ].map(item => (
                <article key={item.title}
                  className="flex gap-3 p-4 bg-cream rounded-2xl border border-caramel/10 hover:border-rose/30 transition-colors group">
                  <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
                  <div>
                    <h3 className="font-body font-semibold text-chocolate text-sm">{item.title}</h3>
                    <p className="font-body text-mocha/60 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:+919772282666"
                className="flex items-center gap-2 font-body font-semibold text-chocolate hover:text-rose transition-colors">
                <span className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center text-rose text-lg">📞</span>
                +91 9772282666
              </a>
              <a href="https://www.instagram.com/terameracake/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-body font-semibold text-chocolate hover:text-rose transition-colors">
                <span className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center text-rose text-lg">📸</span>
                @terameracake
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WeddingCakeSVG() {
  return (
    <svg viewBox="0 0 240 290" className="w-56 h-64 cake-shadow" aria-label="Wedding cake illustration">
      <defs>
        <linearGradient id="wt1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4B080" /><stop offset="100%" stopColor="#A07848" />
        </linearGradient>
        <linearGradient id="wt2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B48858" /><stop offset="100%" stopColor="#8B6040" />
        </linearGradient>
        <linearGradient id="wt3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#906040" /><stop offset="100%" stopColor="#6B4828" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="278" rx="82" ry="14" fill="rgba(61,31,13,0.10)" />
      <ellipse cx="120" cy="242" rx="82" ry="20" fill="#7A5C38" />
      <rect x="38" y="205" width="164" height="37" fill="url(#wt1)" />
      <ellipse cx="120" cy="205" rx="82" ry="20" fill="#E8C898" />
      {[52,74,96,118,140,162,184].map(x => (
        <circle key={x} cx={x} cy={205} r={5} fill="#FFFDF9" opacity={0.85} />
      ))}
      <ellipse cx="120" cy="185" rx="62" ry="15" fill="#5A4028" />
      <rect x="58" y="157" width="124" height="28" fill="url(#wt2)" />
      <ellipse cx="120" cy="157" rx="62" ry="15" fill="#D4A868" />
      <ellipse cx="120" cy="135" rx="40" ry="10" fill="#3A2010" />
      <rect x="80" y="113" width="80" height="22" fill="url(#wt3)" />
      <ellipse cx="120" cy="113" rx="40" ry="10" fill="#C08860" />
      {[
        [108, 100, '#E8635A'], [120, 93, '#FFFDF9'], [132, 100, '#E8C05A']
      ].map(([cx, cy, fill], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={9} fill={fill} opacity={0.9} />
          <circle cx={cx} cy={cy} r={4} fill="#D4A843" />
        </g>
      ))}
      <rect x="117" y="72" width="6" height="21" rx="3" fill="#D4A843" />
      <path d="M113 68 Q120 58 127 68 Z" fill="#E8635A" />
    </svg>
  );
}
