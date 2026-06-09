import CakeSVG from './CakeSVG';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-rose/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-caramel/7 -translate-x-1/4 translate-y-1/3 pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: '15%', left: '8%',  size: 12, color: 'bg-gold/25',    anim: 'animate-float' },
          { top: '25%', left: '18%', size: 8,  color: 'bg-rose/30',    anim: 'animate-float-b' },
          { top: '60%', left: '5%',  size: 16, color: 'bg-caramel/20', anim: 'animate-float-c' },
          { top: '75%', left: '25%', size: 8,  color: 'bg-gold/30',    anim: 'animate-float' },
          { top: '40%', right: '12%',size: 12, color: 'bg-blush/40',   anim: 'animate-float-b' },
          { top: '80%', right: '8%', size: 8,  color: 'bg-rose/20',    anim: 'animate-float-c' },
        ].map((o, i) => (
          <div key={i}
            className={`absolute rounded-full ${o.color} ${o.anim}`}
            style={{ top: o.top, left: o.left, right: o.right, width: o.size, height: o.size }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-0 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center w-full">
        {/* ── Left copy ── */}
        <div className="space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-caramel-light border border-caramel/25 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
            <span className="font-body text-caramel text-xs font-semibold tracking-widest uppercase">Udaipur's Favourite Bakery</span>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-5xl sm:text-6xl xl:text-7xl font-black text-chocolate leading-[1.05]"
            style={{ textShadow: '0 2px 20px rgba(196,123,43,0.18)' }}
          >
            Baked with <em className="text-rose not-italic">Love,</em><br />
            Shared with <em className="text-caramel not-italic">Joy!</em>
          </h1>

          <p className="font-body text-mocha/75 text-lg leading-relaxed max-w-md">
            Custom cakes for every occasion, freshly made macarons, decadent ice creams &amp; more — handcrafted in the heart of Udaipur.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.link/7h56j5"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-rose text-white px-8 py-4 rounded-full font-body font-black text-base transition-all hover:-translate-y-1"
              style={{ boxShadow: '0 12px 36px rgba(232,99,90,0.4)' }}
            >
              <WhatsAppIcon />
              Order Custom Cake
            </a>
            <a
              href="#showcase"
              className="flex items-center gap-2 border-2 border-chocolate/15 text-chocolate px-8 py-4 rounded-full font-body font-black text-base hover:border-rose hover:text-rose transition-all"
            >
              See Showcase
              <ArrowRight />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-1">
            {[
              { val: '500+', label: 'Happy Customers' },
              { val: '2',    label: 'Outlets in Udaipur' },
              { val: '50+',  label: 'Menu Items' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display font-black text-3xl text-rose">{s.val}</div>
                <div className="font-body text-mocha/55 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Premium 3D Cake ── */}
        <div className="flex justify-center items-center relative" style={{ paddingTop: 60, paddingBottom: 40 }}>
          {/* Spinning ring */}
          <div className="absolute w-80 h-80 rounded-full border-2 border-dashed border-rose/20 animate-spin-slow pointer-events-none" />
          {/* Soft glow behind cake */}
          <div className="absolute w-72 h-72 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(232,99,90,0.09) 0%, transparent 70%)' }} />

          {/* Pop-out card wrapper */}
          <div
            className="relative"
            style={{ width: 300 }}
            onMouseMove={handleParallax}
            onMouseLeave={handleParallaxReset}
            id="hero-card-wrap"
          >
            {/* Crown halo */}
            <div className="crown-halo animate-crown-pulse"
              style={{ top: -56, width: 90, height: 90, background: 'radial-gradient(circle,rgba(212,168,67,0.55) 0%,transparent 70%)', transform: 'translateX(-50%)' }} />

            {/* Sparkles */}
            <StarSpark size={24} color="#D4A843" style={{ top: -62, right: 18 }} delay={0} />
            <StarSpark size={16} color="#E8635A" style={{ top: -38, left: 12 }} delay={0.7} dur={3} />
            <StarSpark size={12} color="#FFFDF9" style={{ top: 8, right: -20 }} delay={1.3} />
            <StarSpark size={14} color="#D4A843" style={{ bottom: 145, left: -20 }} delay={0.4} />

            {/* Floating chips */}
            <div className="float-chip animate-badge-float" style={{ top: -26, left: -22 }}>
              <div className="font-body font-black text-xs text-white px-3 py-1.5 rounded-2xl animate-ripple"
                style={{ background: 'linear-gradient(135deg,#E8635A,#C4423A)', boxShadow: '0 8px 20px rgba(232,99,90,0.5)' }}>
                👑 Custom Order
              </div>
            </div>
            <div className="float-chip animate-badge-float" style={{ bottom: 115, right: -30, animationDelay: '1s' }}>
              <div className="font-body font-black text-xs px-3 py-1.5 rounded-2xl"
                style={{ background: 'linear-gradient(135deg,#D4A843,#C47B2B)', color: '#3D1F0D', boxShadow: '0 6px 18px rgba(212,168,67,0.5)' }}>
                ⭐ Best Seller
              </div>
            </div>

            {/* Frame */}
            <div id="hero-frame"
              className="relative overflow-hidden"
              style={{
                width: 300, height: 360,
                borderRadius: 28,
                border: '5px solid #D4A843',
                boxShadow: '0 8px 0 #9A7520, 0 14px 0 #6B5015, 0 24px 60px rgba(61,31,13,0.4)',
              }}
            >
              {/* BG */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,#0a1628 0%,#0f2554 35%,#1a3a7a 60%,#0d1e42 100%)' }} />
              {/* Star dots */}
              <div style={{ position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(circle,rgba(212,168,67,0.2) 1.5px,transparent 1.5px),radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px)',
                backgroundSize: '28px 28px,18px 18px', backgroundPosition: '0 0,14px 14px' }} />
              {/* Shimmer */}
              <div className="animate-shimmer" style={{ position: 'absolute', inset: 0,
                background: 'linear-gradient(105deg,transparent 30%,rgba(212,168,67,0.08) 50%,transparent 70%)',
                backgroundSize: '200% 100%' }} />
              {/* Gradient overlay */}
              <div style={{ position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(5,10,30,0.8) 100%)' }} />
              {/* Inset glow */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: 27,
                boxShadow: 'inset 0 0 32px rgba(212,168,67,0.14), inset 0 0 0 1.5px rgba(212,168,67,0.22)' }} />
              {/* Frame label */}
              <div style={{ position: 'absolute', bottom: 18, left: 0, right: 0, textAlign: 'center', zIndex: 8 }}>
                <div className="font-display font-black text-white text-lg" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
                  Prince Kairav
                </div>
                <div className="font-body text-xs font-semibold tracking-widest" style={{ color: '#D4A843' }}>
                  1st Birthday · Custom Cake
                </div>
              </div>
            </div>

            {/* Depth mask */}
            <div className="popout-card__mask" style={{
              height: 110, borderRadius: '0 0 26px 26px',
              borderBottom: '5px solid #D4A843', borderLeft: '5px solid #D4A843', borderRight: '5px solid #D4A843',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(5,10,30,0.45) 100%)',
              boxShadow: 'inset 0 -10px 24px rgba(5,10,30,0.65), 0 8px 0 #9A7520',
            }} />

            {/* Corner gems */}
            {[{ top: -6, left: -6 }, { top: -6, right: -6 }, { bottom: -6, left: -6 }, { bottom: -6, right: -6 }].map((pos, i) => (
              <div key={i} className="gem" style={{ ...pos,
                background: 'radial-gradient(circle at 35% 35%,rgba(255,255,255,0.6),#D4A843 55%,#8B6010)',
                boxShadow: '0 2px 10px rgba(212,168,67,0.65)' }} />
            ))}

            {/* THE POP-OUT CAKE — premium SVG */}
            <div id="hero-cake" style={{
              position: 'absolute', left: '50%', transform: 'translateX(-50%)',
              bottom: 55, zIndex: 20, pointerEvents: 'none',
              width: 270,
              filter: 'drop-shadow(-12px -18px 32px rgba(0,0,0,0.7)) drop-shadow(12px -10px 26px rgba(0,0,0,0.6)) drop-shadow(0 0 55px rgba(212,168,67,0.35))',
              transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), filter 0.4s ease',
            }}>
              <CakeSVG size={270} />
            </div>

            {/* Ground shadow */}
            <div style={{
              position: 'absolute', bottom: -22, left: '50%', transform: 'translateX(-50%)',
              width: 210, height: 18, borderRadius: '50%',
              background: 'radial-gradient(ellipse at center, rgba(61,31,13,0.35) 0%, transparent 75%)',
              zIndex: 1,
            }} />

            {/* Price tag */}
            <div style={{ position: 'absolute', bottom: -56, left: 0, right: 0, textAlign: 'center', zIndex: 30 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{ background: 'rgba(212,168,67,0.12)', borderColor: 'rgba(212,168,67,0.3)' }}>
                <span className="font-display font-black text-gold text-xl">₹1,499</span>
                <span className="font-body text-mocha/60 text-xs">onwards</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-mocha/35 hover:text-rose transition-colors">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}

function handleParallax(e) {
  const wrap = document.getElementById('hero-card-wrap');
  if (!wrap) return;
  const frame = document.getElementById('hero-frame');
  const cake = document.getElementById('hero-cake');
  const r = wrap.getBoundingClientRect();
  const dx = (e.clientX - r.left - r.width / 2) / r.width;
  const dy = (e.clientY - r.top - r.height / 2) / r.height;
  if (frame) frame.style.transform = `perspective(700px) rotateY(${dx * 10}deg) rotateX(${-dy * 7}deg) scale(1.02)`;
  if (cake) {
    cake.style.transform = `translateX(-50%) translateY(${-dy * 18}px) translateX(${dx * 10}px) scale(1.05)`;
    cake.style.filter = `drop-shadow(${-14 - dx * 8}px ${-20 - dy * 8}px 40px rgba(0,0,0,0.8)) drop-shadow(${14 + dx * 6}px ${-12 - dy * 6}px 30px rgba(0,0,0,0.65)) drop-shadow(0 0 65px rgba(212,168,67,0.45))`;
  }
}
function handleParallaxReset() {
  const frame = document.getElementById('hero-frame');
  const cake = document.getElementById('hero-cake');
  if (frame) frame.style.transform = '';
  if (cake) { cake.style.transform = 'translateX(-50%)'; cake.style.filter = ''; }
}

function StarSpark({ size, color, style, delay, dur = 2.5 }) {
  return (
    <div className="sparkle animate-star-spin" style={{ ...style, animationDelay: `${delay}s`, animationDuration: `${dur}s` }}>
      <svg width={size} height={size} viewBox="0 0 20 20">
        <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill={color} />
      </svg>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 2C6.477 2 2 6.484 2 12.017c0 1.987.514 3.86 1.426 5.478L2 22l4.62-1.399A10.016 10.016 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2"/>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
