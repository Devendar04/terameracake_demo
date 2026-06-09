import { useEffect, useRef } from 'react';
import CakeSVG from './CakeSVG';

export default function Showcase() {
  const card1Ref = useRef(null);

  useEffect(() => {
    const card = card1Ref.current;
    if (!card) return;

    const frame = card.querySelector('.showcase-frame');
    const cake = card.querySelector('.showcase-cake');

    const handleMove = (e) => {
      const r = card.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) / r.width;
      const dy = (e.clientY - r.top - r.height / 2) / r.height;
      if (frame) frame.style.transform = `perspective(700px) rotateY(${dx * 10}deg) rotateX(${-dy * 7}deg) scale(1.02)`;
      if (cake) {
        cake.style.transform = `translateX(-50%) translateY(${-dy * 20}px) translateX(${dx * 12}px) scale(1.06)`;
        cake.style.filter = `drop-shadow(${-14 - dx * 8}px ${-20 - dy * 8}px 40px rgba(0,0,0,0.8)) drop-shadow(${14 + dx * 6}px ${-12 - dy * 6}px 30px rgba(0,0,0,0.65)) drop-shadow(0 0 70px rgba(212,168,67,0.5))`;
      }
    };
    const handleLeave = () => {
      if (frame) frame.style.transform = '';
      if (cake) { cake.style.transform = 'translateX(-50%)'; cake.style.filter = ''; }
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
    return () => { card.removeEventListener('mousemove', handleMove); card.removeEventListener('mouseleave', handleLeave); };
  }, []);

  const particles = Array.from({ length: 18 }, (_, i) => ({
    size: 3 + (i % 5),
    color: ['#D4A843','#E8635A','#FFFDF9','#C47B2B'][i % 4],
    left: `${4 + i * 6}%`,
    bottom: `${8 + i * 4}%`,
    dur: `${3.5 + i * 0.4}s`,
    delay: `${i * 0.25}s`,
    tx: `${-25 + i * 5}px`,
    tx2: `${12 - i * 4}px`,
  }));

  return (
    <section
      id="showcase"
      className="relative overflow-hidden"
      aria-labelledby="showcase-heading"
      style={{ background: 'linear-gradient(160deg,#0f0305 0%,#1a0a12 30%,#12050a 60%,#0a0308 100%)', padding: '100px 0 140px' }}
    >
      {/* Particles & orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div key={i} className="particle"
            style={{ width: p.size, height: p.size, background: p.color, left: p.left, bottom: p.bottom,
              '--dur': p.dur, '--delay': p.delay, '--tx': p.tx, '--tx2': p.tx2, opacity: 0.7 }} />
        ))}
        <div style={{ position: 'absolute', top: '15%', left: '8%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(232,99,90,0.08) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,168,67,0.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,248,240,0.05) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
            style={{ background: 'rgba(232,99,90,0.15)', borderColor: 'rgba(232,99,90,0.35)' }}>
            <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
            <span className="font-body text-rose text-xs font-bold tracking-widest uppercase">2.5D Pop-Out Showcase</span>
          </div>
          <h2 id="showcase-heading" className="font-display font-black text-5xl lg:text-6xl text-white"
            style={{ textShadow: '0 2px 30px rgba(212,168,67,0.3)' }}>
            Your Cake, <span className="text-shimmer">Alive</span>
          </h2>
          <p className="font-body text-white/50 text-lg max-w-lg mx-auto">
            Every custom masterpiece from Tera Mera Cake pops out of the frame — just like magic.
          </p>
        </div>

        {/* Cards scene */}
        <div className="flex flex-col lg:flex-row items-end justify-center gap-16 lg:gap-24" style={{ paddingBottom: 80, paddingTop: 60 }}>

          {/* ── Main card ── */}
          <div ref={card1Ref} className="popout-card" style={{ width: 310 }} role="img" aria-label="Prince Kairav 2.5D birthday cake">
            {/* Crown halo */}
            <div className="crown-halo animate-crown-pulse"
              style={{ top: -66, width: 110, height: 110, background: 'radial-gradient(circle,rgba(212,168,67,0.6) 0%,rgba(212,168,67,0.2) 40%,transparent 70%)', transform: 'translateX(-50%)' }} />

            {/* Sparkles */}
            {[[28,'#D4A843',{top:-70,right:18},0],[18,'#E8635A',{top:-46,left:10},0.6,3],[14,'#FFFDF9',{top:15,right:-22},1.2],[16,'#D4A843',{bottom:165,left:-22},0.3]].map(([sz,col,pos,dly,dur],i)=>(
              <div key={i} className="sparkle animate-star-spin" style={{ ...pos, animationDelay:`${dly}s`, animationDuration:`${dur||2.5}s` }}>
                <svg width={sz} height={sz} viewBox="0 0 20 20"><path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill={col}/></svg>
              </div>
            ))}

            {/* Chips */}
            <div className="float-chip animate-badge-float" style={{ top: -30, left: -26 }}>
              <div className="font-body font-black text-xs text-white px-3.5 py-2 rounded-2xl"
                style={{ background: 'linear-gradient(135deg,#E8635A,#C4423A)', boxShadow: '0 8px 24px rgba(232,99,90,0.5)' }}>👑 Custom Order</div>
            </div>
            <div className="float-chip animate-badge-float" style={{ bottom: 150, right: -32, animationDelay: '1.1s' }}>
              <div className="font-body font-black text-xs px-3.5 py-2 rounded-2xl"
                style={{ background: 'linear-gradient(135deg,#D4A843,#C47B2B)', color: '#1a0a04', boxShadow: '0 6px 20px rgba(212,168,67,0.5)' }}>✦ Prince Theme</div>
            </div>
            <div className="float-chip animate-badge-float" style={{ top: 60, left: -34, animationDelay: '0.5s' }}>
              <div className="font-body font-bold text-xs px-3 py-1.5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>2 Tier 🎂</div>
            </div>

            {/* Frame */}
            <div className="showcase-frame relative overflow-hidden"
              style={{ width: 310, height: 390, borderRadius: 28, border: '5px solid #D4A843',
                boxShadow: '0 8px 0 #9A7520, 0 16px 0 #5A4010, 0 28px 70px rgba(0,0,0,0.6)',
                transition: 'transform 0.5s cubic-bezier(0.34,1.4,0.64,1)' }}>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(155deg,#071428 0%,#0c2050 30%,#1840a0 55%,#0f2858 75%,#071020 100%)' }} />
              <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle,rgba(212,168,67,0.22) 1.5px,transparent 1.5px),radial-gradient(circle,rgba(255,255,255,0.07) 1px,transparent 1px)', backgroundSize:'30px 30px,20px 20px', backgroundPosition:'0 0,15px 15px' }} />
              <div className="animate-shimmer" style={{ position:'absolute', inset:0, background:'linear-gradient(110deg,transparent 25%,rgba(212,168,67,0.09) 50%,transparent 75%)', backgroundSize:'200% 100%' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(4,10,30,0.85) 100%)' }} />
              <div style={{ position:'absolute', inset:0, borderRadius:27, boxShadow:'inset 0 0 40px rgba(212,168,67,0.14),inset 0 0 0 1.5px rgba(212,168,67,0.25)' }} />
              {/* Bokeh blobs */}
              {[[80,80,'rgba(212,168,67,0.25)','8%','6%','14px','-10px',0],[60,60,'rgba(100,160,255,0.2)','22%','8%','-12px','12px',2],[100,100,'rgba(255,255,255,0.05)','12%','15%','8px','-14px',3.5]].map(([w,h,bg,top,left,bx,by,dl],i)=>(
                <div key={i} className="bokeh animate-bokeh" style={{ width:w,height:h,background:`radial-gradient(circle,${bg},transparent)`,top,left,'--op':0.5,'--bx':bx,'--by':by,animationDelay:`${dl}s` }} />
              ))}
              {/* Frame label */}
              <div style={{ position:'absolute', bottom:18, left:0, right:0, textAlign:'center', zIndex:8 }}>
                <div className="font-display font-black text-white text-xl" style={{ textShadow:'0 2px 16px rgba(0,0,0,0.95)' }}>Prince Kairav</div>
                <div className="font-body text-xs font-bold tracking-[0.2em] uppercase mt-1" style={{ color:'#D4A843' }}>1st Birthday · Royal Theme</div>
                <div className="font-body text-xs mt-1" style={{ color:'rgba(255,255,255,0.45)' }}>Tera Mera Cake · Udaipur</div>
              </div>
            </div>

            {/* Depth mask */}
            <div className="popout-card__mask" style={{ height:122, borderRadius:'0 0 26px 26px', borderBottom:'5px solid #D4A843', borderLeft:'5px solid #D4A843', borderRight:'5px solid #D4A843', background:'linear-gradient(to bottom,transparent 0%,rgba(4,10,30,0.55) 100%)', boxShadow:'inset 0 -10px 24px rgba(4,10,30,0.7),0 8px 0 #9A7520' }} />

            {/* Corner gems */}
            {[{top:-6,left:-6},{top:-6,right:-6},{bottom:-6,left:-6},{bottom:-6,right:-6}].map((pos,i) => (
              <div key={i} className="gem" style={{ ...pos, background:'radial-gradient(circle at 35% 35%,rgba(255,255,255,0.6),#D4A843 55%,#7A5010)', boxShadow:'0 2px 10px rgba(212,168,67,0.7)' }} />
            ))}

            {/* ★ THE POP-OUT CAKE – premium SVG ★ */}
            <div className="showcase-cake" style={{
              position:'absolute', left:'50%', transform:'translateX(-50%)',
              bottom: 68, zIndex: 20, pointerEvents:'none', width: 286,
              filter:'drop-shadow(-14px -20px 38px rgba(0,0,0,0.72)) drop-shadow(14px -12px 30px rgba(0,0,0,0.62)) drop-shadow(0 0 65px rgba(212,168,67,0.38))',
              transition:'transform 0.55s cubic-bezier(0.34,1.56,0.64,1),filter 0.4s ease',
            }}>
              <CakeSVG size={286} />
            </div>

            {/* Ground shadow */}
            <div style={{ position:'absolute', bottom:-22, left:'50%', transform:'translateX(-50%)', width:240, height:22, borderRadius:'50%', background:'radial-gradient(ellipse at center,rgba(0,0,0,0.45) 0%,transparent 75%)', zIndex:1 }} />

            {/* Price */}
            <div style={{ position:'absolute', bottom:-60, left:0, right:0, textAlign:'center', zIndex:30 }}>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
                style={{ background:'rgba(212,168,67,0.15)', border:'1px solid rgba(212,168,67,0.35)' }}>
                <span className="font-display font-black text-gold text-2xl">₹1,499</span>
                <span className="font-body text-white/50 text-xs">onwards</span>
              </div>
            </div>
          </div>

          {/* ── Side card (smaller, tilted) ── */}
          <div className="popout-card hidden sm:block" style={{ width: 230, transform: 'rotate(5deg) translateY(-20px)' }} role="img" aria-label="Tera Mera Cake contact card">
            {/* Sparkles */}
            <div className="sparkle animate-star-spin" style={{ top:-44, right:16, animationDelay:'0.4s' }}>
              <svg width={20} height={20} viewBox="0 0 20 20"><path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill="#D4A843"/></svg>
            </div>
            <div className="float-chip animate-badge-float" style={{ top:-22, right:-20, animationDelay:'0.8s' }}>
              <div className="font-body font-black text-xs px-3 py-1.5 rounded-2xl"
                style={{ background:'linear-gradient(135deg,#C47B2B,#8B5010)', color:'#fff', boxShadow:'0 6px 16px rgba(196,123,43,0.5)' }}>📞 Call Us</div>
            </div>

            {/* Frame */}
            <div className="relative overflow-hidden" style={{ width:230, height:290, borderRadius:28, border:'4px solid #C47B2B', boxShadow:'0 5px 0 #7A5010,0 10px 0 #4A3008,0 20px 50px rgba(0,0,0,0.55)', transition:'transform 0.5s cubic-bezier(0.34,1.4,0.64,1)' }}>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(155deg,#1a0a02 0%,#2d1408 40%,#3d2010 65%,#1a0a02 100%)' }} />
              <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle,rgba(196,123,43,0.2) 1.5px,transparent 1.5px)', backgroundSize:'24px 24px' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(20,8,2,0) 0%,rgba(20,8,2,0.88) 100%)' }} />
              <div style={{ position:'absolute', inset:0, borderRadius:27, boxShadow:'inset 0 0 30px rgba(196,123,43,0.12),inset 0 0 0 1.5px rgba(196,123,43,0.22)' }} />
              <div style={{ position:'absolute', bottom:14, left:0, right:0, textAlign:'center', zIndex:8 }}>
                <div className="font-display font-black text-white text-base" style={{ textShadow:'0 2px 12px rgba(0,0,0,0.95)' }}>Tera Mera Cake</div>
                <div className="font-body text-xs font-semibold tracking-widest mt-0.5" style={{ color:'#C47B2B' }}>+91 97722 82666</div>
              </div>
            </div>

            {/* Depth mask */}
            <div className="popout-card__mask" style={{ height:92, borderRadius:'0 0 24px 24px', borderBottom:'4px solid #C47B2B', borderLeft:'4px solid #C47B2B', borderRight:'4px solid #C47B2B', background:'linear-gradient(to bottom,transparent 0%,rgba(20,8,2,0.5) 100%)', boxShadow:'inset 0 -8px 20px rgba(20,8,2,0.7),0 5px 0 #7A5010' }} />

            {/* Gems */}
            {[{top:-5,left:-5},{top:-5,right:-5},{bottom:-5,left:-5},{bottom:-5,right:-5}].map((pos,i) => (
              <div key={i} className="gem" style={{ ...pos, background:'radial-gradient(circle at 35% 35%,rgba(255,255,255,0.55),#C47B2B 55%,#7A4808)', boxShadow:'0 2px 8px rgba(196,123,43,0.6)' }} />
            ))}

            {/* Mini cake pop-out */}
            <div style={{ position:'absolute', left:'50%', transform:'translateX(-50%)', bottom:46, zIndex:20, pointerEvents:'none', width:210,
              filter:'drop-shadow(-10px -14px 28px rgba(0,0,0,0.68)) drop-shadow(10px -8px 22px rgba(0,0,0,0.58)) drop-shadow(0 0 42px rgba(196,123,43,0.32))' }}>
              <CakeSVG size={210} />
            </div>

            {/* Ground shadow */}
            <div style={{ position:'absolute', bottom:-18, left:'50%', transform:'translateX(-50%)', width:170, height:16, borderRadius:'50%', background:'radial-gradient(ellipse at center,rgba(0,0,0,0.4) 0%,transparent 75%)', zIndex:1 }} />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-5">
          <p className="font-body text-white/45 text-sm">Upload your photo — every cake becomes art</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.link/7h56j5" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-black text-base transition-all hover:-translate-y-1"
              style={{ background:'#25D366', color:'#fff', boxShadow:'0 12px 32px rgba(37,211,102,0.45)' }}>
              <WAIcon /> Order This Theme
            </a>
            <a href="tel:+919772282666"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-black text-base transition-all hover:-translate-y-1"
              style={{ border:'2px solid rgba(212,168,67,0.45)', color:'#D4A843' }}>
              📞 +91 97722 82666
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WAIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 2C6.477 2 2 6.484 2 12.017c0 1.987.514 3.86 1.426 5.478L2 22l4.62-1.399A10.016 10.016 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2"/>
    </svg>
  );
}
