const testimonials = [
  {
    stars: 5,
    text: 'Ordered a custom Doraemon cake for my son\'s birthday — absolutely stunning! Every detail was perfect and the taste was heavenly.',
    name: 'Priya Sharma',
    location: 'Udaipur',
  },
  {
    stars: 5,
    text: 'The macarons are to die for. Freshest I\'ve had outside of a French patisserie. Will keep coming back every week!',
    name: 'Rahul Mehta',
    location: 'Hiran Magri',
  },
  {
    stars: 5,
    text: 'Got my wedding cake from here — every guest asked where we ordered it from. Gorgeous, delicious, and delivered on time!',
    name: 'Anita Rathore',
    location: 'Udaipur',
  },
];

const galleryItems = [
  { bg: 'bg-rose-light', label: 'Birthday Cake', icon: '🎂', size: 'text-5xl' },
  { bg: 'bg-caramel-light', label: 'Wedding Cake', icon: '💍', size: 'text-5xl' },
  { bg: 'bg-blush/30', label: 'Ice Cream Cup', icon: '🍦', size: 'text-5xl' },
  { bg: 'bg-chocolate/6', label: 'Chocolate Cake', icon: '🍫', size: 'text-5xl' },
  { bg: 'bg-mint/20', label: 'Fresh Macarons', icon: '🍪', size: 'text-5xl' },
  { bg: 'bg-rose-light', label: 'Custom Order', icon: '🎨', size: 'text-5xl' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-warm-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <p className="font-body text-rose font-semibold tracking-[0.2em] uppercase text-xs">Sweet Gallery</p>
          <h2 id="gallery-heading" className="font-display text-4xl lg:text-5xl font-black text-chocolate">
            Made with <span className="text-rose">Love</span>
          </h2>
          <p className="font-body text-mocha/60 text-lg max-w-md mx-auto">
            A taste of what we create — every day, with care.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20" role="list">
          {galleryItems.map((item, i) => (
            <figure
              key={i}
              role="listitem"
              className={`rounded-3xl ${item.bg} p-6 flex flex-col items-center hover:scale-[1.02] transition-transform cursor-pointer`}
              style={{ minHeight: 180 }}
            >
              <div className={`${item.size} animate-wiggle mb-4`} style={{ animationDelay: `${i * 0.3}s` }}>
                {item.icon}
              </div>
              {/* Mini cake SVG for variety */}
              <MiniCake index={i} />
              <figcaption className="font-body font-semibold text-chocolate text-sm mt-3">{item.label}</figcaption>
            </figure>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10">
          <p className="font-body text-rose font-semibold tracking-[0.2em] uppercase text-xs mb-2">Kind Words</p>
          <h3 className="font-display text-3xl font-black text-chocolate">What Our Customers Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote key={i}
              className="bg-cream rounded-3xl p-6 border border-rose/12 hover:border-rose/35 transition-all hover:-translate-y-1">
              <div className="text-gold text-lg mb-3">{'★'.repeat(t.stars)}</div>
              <p className="font-body text-mocha/75 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <footer>
                <cite className="not-italic">
                  <span className="font-body font-bold text-chocolate text-sm">{t.name}</span>
                  <span className="font-body text-mocha/45 text-xs ml-2">{t.location}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a href="https://www.instagram.com/terameracake/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-chocolate/12 text-chocolate px-6 py-3 rounded-full font-body font-semibold text-sm hover:border-rose hover:text-rose transition-all">
            📸 Follow @terameracake on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

// Small decorative cake illustrations for gallery
function MiniCake({ index }) {
  const colors = [
    ['#E8635A', '#D4A843', '#7ECFBF'],
    ['#D4A843', '#E8635A', '#F9C5BE'],
    ['#7ECFBF', '#E8635A', '#D4A843'],
    ['#3D1F0D', '#8B5A2B', '#E8635A'],
    ['#F9C5BE', '#E8635A', '#D4A843'],
    ['#E8C05A', '#E8635A', '#7ECFBF'],
  ];
  const [c1, c2, c3] = colors[index % colors.length];

  return (
    <svg viewBox="0 0 80 90" className="w-16 h-20 cake-shadow">
      <ellipse cx="40" cy="86" rx="32" ry="5" fill="rgba(61,31,13,0.10)" />
      <ellipse cx="40" cy="72" rx="32" ry="8" fill={c1} opacity="0.8" />
      <rect x="8" y="55" width="64" height="17" fill={c1} />
      <ellipse cx="40" cy="55" rx="32" ry="8" fill={c2} opacity="0.9" />
      <ellipse cx="40" cy="44" rx="24" ry="6" fill={c2} opacity="0.7" />
      <rect x="16" y="32" width="48" height="12" fill={c2} />
      <ellipse cx="40" cy="32" rx="24" ry="6" fill={c3} opacity="0.9" />
      <rect x="36" y="18" width="4" height="14" rx="2" fill={c1} />
      <ellipse cx="38" cy="15" rx="3" ry="5" fill="#FFD166" opacity="0.9" />
    </svg>
  );
}
