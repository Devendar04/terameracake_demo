const products = [
  {
    badge: 'Best Seller',
    badgeStyle: { background: '#E8635A', color: '#fff' },
    cardStyle: { background: '#FDECEA', borderColor: 'rgba(232,99,90,0.2)' },
    emoji: '🎂',
    name: 'Birthday Cakes',
    desc: 'Custom-designed celebration cakes in any flavour, size & theme.',
    price: 'From ₹599',
    icon: <BirthdayCakeSVG />,
  },
  {
    badge: 'New Arrival',
    badgeStyle: { background: '#C8EBD9', color: '#3D1F0D' },
    cardStyle: { background: 'rgba(200,235,217,0.25)', borderColor: 'rgba(200,235,217,0.4)' },
    emoji: '🍪',
    name: 'Fresh Macarons',
    desc: 'Light crispy shells with rich ganache fillings, baked fresh daily.',
    price: 'From ₹45/pc',
    icon: <MacaronSVG />,
  },
  {
    badge: 'Seasonal',
    badgeStyle: { background: '#FDF0DC', color: '#C47B2B', border: '1px solid rgba(196,123,43,0.3)' },
    cardStyle: { background: '#FDF0DC', borderColor: 'rgba(196,123,43,0.2)' },
    emoji: '🍦',
    name: 'Stick & Cup Ice Creams',
    desc: 'Indulgent chocolate-dipped sticks and creamy cups in seasonal flavours.',
    price: 'From ₹60',
    icon: <IceCreamSVG />,
  },
  {
    badge: 'Fan Favourite',
    badgeStyle: { background: '#3D1F0D', color: '#FFF8F0' },
    cardStyle: { background: 'rgba(61,31,13,0.05)', borderColor: 'rgba(61,31,13,0.12)' },
    emoji: '🍫',
    name: 'Signature Chocolate',
    desc: 'Rich Belgian chocolate layers, velvety ganache & fresh berry toppings.',
    price: 'From ₹799',
    icon: <ChocCakeSVG />,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-cream relative overflow-hidden" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="font-body text-rose font-semibold tracking-[0.2em] uppercase text-xs">Just Picked</p>
          <h2 id="products-heading" className="font-display text-4xl lg:text-5xl font-black text-chocolate">
            New Arrivals & Favourites
          </h2>
          <p className="font-body text-mocha/60 text-lg max-w-lg mx-auto">
            Every item handcrafted with the finest ingredients and a whole lot of love.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <article
              key={p.name}
              role="listitem"
              className="group relative rounded-3xl border p-6 flex flex-col items-center text-center card-lift"
              style={p.cardStyle}
            >
              <span className="absolute top-4 right-4 text-[11px] font-body font-bold px-3 py-1 rounded-full"
                style={p.badgeStyle}>{p.badge}</span>
              <div className="w-40 h-44 flex items-end justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-chocolate text-lg mb-2">{p.name}</h3>
              <p className="font-body text-mocha/65 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
              <div className="w-full space-y-2">
                <div className="font-display font-black text-rose text-xl">{p.price}</div>
                <a href="https://wa.link/7h56j5" target="_blank" rel="noopener noreferrer"
                  className="block w-full bg-chocolate text-white rounded-full py-2.5 font-body font-bold text-sm hover:bg-rose transition-colors text-center">
                  Order via WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Service chips */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🎂', label: 'Customise Cakes' },
            { icon: '🎈', label: 'Balloon Decoration' },
            { icon: '💐', label: 'Bouquets' },
            { icon: '🚚', label: 'Home Delivery' },
          ].map(s => (
            <div key={s.label} className="flex items-center gap-3 bg-warm-white rounded-2xl px-4 py-3 border border-chocolate/8">
              <span className="text-2xl">{s.icon}</span>
              <span className="font-body font-medium text-chocolate text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BirthdayCakeSVG() {
  return (
    <svg viewBox="0 0 200 230" className="w-full h-full cake-shadow">
      <defs>
        <linearGradient id="bt1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F07A72"/><stop offset="100%" stopColor="#C4423A"/>
        </linearGradient>
        <linearGradient id="bt2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C870"/><stop offset="100%" stopColor="#A07830"/>
        </linearGradient>
        <linearGradient id="bt3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5A2B"/><stop offset="100%" stopColor="#3D1F0D"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="218" rx="70" ry="12" fill="rgba(61,31,13,0.10)"/>
      <ellipse cx="100" cy="192" rx="70" ry="17" fill="#7A2E18"/>
      <rect x="30" y="160" width="140" height="32" fill="url(#bt1)"/>
      <ellipse cx="100" cy="160" rx="70" ry="17" fill="#E8635A"/>
      {[44,64,84,104,124,144].map(x => <ellipse key={x} cx={x} cy={160} rx={8} ry={10} fill="#FFFDF9" opacity={0.88}/>)}
      <ellipse cx="100" cy="135" rx="52" ry="13" fill="#6B3F1E"/>
      <rect x="48" y="110" width="104" height="25" fill="url(#bt2)"/>
      <ellipse cx="100" cy="110" rx="52" ry="13" fill="#E8C05A"/>
      <ellipse cx="100" cy="88" rx="34" ry="9" fill="#3D1F0D"/>
      <rect x="66" y="70" width="68" height="18" fill="url(#bt3)"/>
      <ellipse cx="100" cy="70" rx="34" ry="9" fill="#E8635A"/>
      {[[90,42,'#E8635A'],[101,35,'#D4A843'],[112,42,'#7ECFBF']].map(([x,y,c],i)=>(
        <g key={i}><rect x={x} y={y} width={6} height={28} rx={3} fill={c}/><ellipse cx={x+3} cy={y-4} rx={4} ry={6} fill="#FFD166" opacity={0.9}/></g>
      ))}
    </svg>
  );
}

function MacaronSVG() {
  return (
    <svg viewBox="0 0 180 200" className="w-full h-full cake-shadow">
      {[0,1,2,3].map(i => (
        <g key={i} transform={`translate(${30+i*30},${100-i*20})`}>
          <ellipse cx={0} cy={8} rx={20} ry={10} fill={['#E8635A','#D4A843','#7ECFBF','#F9C5BE'][i]}/>
          <rect x={-18} y={0} width={36} height={10} fill={['#C4423A','#C47B2B','#5BADA0','#E8A0A0'][i]}/>
          <rect x={-18} y={3} width={36} height={4} fill="#FFFDF9" opacity={0.8}/>
          <ellipse cx={0} cy={0} rx={20} ry={10} fill={['#F07A72','#E8C870','#7ECFBF','#FDECEA'][i]}/>
        </g>
      ))}
      <text x={90} y={165} textAnchor="middle" fill="#E8635A" fontSize={11} fontFamily="DM Sans" fontWeight={700}>FRESH DAILY</text>
    </svg>
  );
}

function IceCreamSVG() {
  return (
    <svg viewBox="0 0 180 220" className="w-full h-full cake-shadow">
      <defs>
        <linearGradient id="cone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C870"/><stop offset="100%" stopColor="#A07830"/>
        </linearGradient>
      </defs>
      <ellipse cx={90} cy={210} rx={48} ry={10} fill="rgba(61,31,13,0.09)"/>
      <path d="M50 130 L58 196 Q90 212 122 196 L130 130 Z" fill="url(#cone)"/>
      <ellipse cx={90} cy={130} rx={40} ry={10} fill="#E8C05A"/>
      <ellipse cx={90} cy={110} rx={38} ry={9} fill="#6B3F1E"/>
      <path d="M52 110 Q50 84 90 76 Q130 84 128 110 Z" fill="#8B5A2B"/>
      <ellipse cx={90} cy={76} rx={38} ry={9} fill="#A06B3A"/>
      <ellipse cx={90} cy={64} rx={30} ry={8} fill="#E8635A"/>
      <path d="M60 64 Q58 42 90 35 Q122 42 120 64 Z" fill="#F07A72"/>
      <ellipse cx={90} cy={35} rx={30} ry={8} fill="#FDECEA"/>
      <circle cx={90} cy={23} r={9} fill="#C4423A"/>
      <path d="M90 14 Q98 6 105 10" stroke="#3D8A6B" strokeWidth={2} fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function ChocCakeSVG() {
  return (
    <svg viewBox="0 0 190 210" className="w-full h-full cake-shadow">
      <defs>
        <linearGradient id="choc1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5A2E10"/><stop offset="100%" stopColor="#1E0803"/>
        </linearGradient>
        <linearGradient id="choc2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5A2B"/><stop offset="100%" stopColor="#3D1F0D"/>
        </linearGradient>
      </defs>
      <ellipse cx={95} cy={198} rx={66} ry={12} fill="rgba(61,31,13,0.12)"/>
      <ellipse cx={95} cy={174} rx={66} ry={16} fill="#1E0803"/>
      <rect x={29} y={140} width={132} height={34} fill="url(#choc1)"/>
      <ellipse cx={95} cy={140} rx={66} ry={16} fill="#6B3F1E"/>
      <ellipse cx={95} cy={136} rx={60} ry={12} fill="#8B5A2B"/>
      {[[70,94,'#C4423A'],[80,89,'#8B1A1A'],[90,94,'#C4423A'],[75,100,'#8B1A1A'],[85,100,'#C4423A']].map(([cx,cy,fill],i)=>(
        <circle key={i} cx={cx} cy={cy} r={7} fill={fill}/>
      ))}
      <path d="M93 88 Q101 82 104 88 Q101 94 93 88Z" fill="#5BADA0"/>
    </svg>
  );
}
