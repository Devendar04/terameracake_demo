// Premium 3D-style cake SVG — replaces the flat cartoon
// Renders a realistic multi-tier birthday cake with candles, drips, and depth

export default function CakeSVG({ size = 320, className = '' }) {
  return (
    <svg
      viewBox="0 0 320 360"
      width={size}
      height={size * 1.125}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Premium 3-tier birthday cake"
      role="img"
    >
      <defs>
        {/* ── Gradients ── */}
        <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3D1F0D" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3D1F0D" stopOpacity="0" />
        </radialGradient>

        {/* Tier 1 (bottom) - Rose pink */}
        <linearGradient id="t1Side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F07A72" />
          <stop offset="50%" stopColor="#E8635A" />
          <stop offset="100%" stopColor="#C4423A" />
        </linearGradient>
        <radialGradient id="t1Top" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FDECEA" />
          <stop offset="40%" stopColor="#F9C5BE" />
          <stop offset="100%" stopColor="#E8635A" />
        </radialGradient>
        <radialGradient id="t1Ellipse" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFF0EE" />
          <stop offset="50%" stopColor="#F9C5BE" />
          <stop offset="100%" stopColor="#D85038" />
        </radialGradient>

        {/* Tier 2 (middle) - Caramel gold */}
        <linearGradient id="t2Side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C870" />
          <stop offset="50%" stopColor="#D4A843" />
          <stop offset="100%" stopColor="#A07830" />
        </linearGradient>
        <radialGradient id="t2Top" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FDF5DC" />
          <stop offset="45%" stopColor="#E8D080" />
          <stop offset="100%" stopColor="#C47B2B" />
        </radialGradient>

        {/* Tier 3 (top) - Chocolate */}
        <linearGradient id="t3Side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5A2B" />
          <stop offset="50%" stopColor="#6B3F1E" />
          <stop offset="100%" stopColor="#3D1F0D" />
        </linearGradient>
        <radialGradient id="t3Top" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#C4906A" />
          <stop offset="55%" stopColor="#8B5A2B" />
          <stop offset="100%" stopColor="#4A2810" />
        </radialGradient>

        {/* Cream / frosting */}
        <linearGradient id="creamSide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFDF9" />
          <stop offset="100%" stopColor="#F0E8D8" />
        </linearGradient>
        <radialGradient id="creamTop" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EEE0C8" />
        </radialGradient>

        {/* Candle flames */}
        <radialGradient id="flame1" cx="50%" cy="75%" r="50%">
          <stop offset="0%" stopColor="#FFF8D0" />
          <stop offset="40%" stopColor="#FFD166" />
          <stop offset="70%" stopColor="#FF9B42" />
          <stop offset="100%" stopColor="#E8635A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="flame2" cx="50%" cy="75%" r="50%">
          <stop offset="0%" stopColor="#FFF8D0" />
          <stop offset="40%" stopColor="#FFD166" />
          <stop offset="100%" stopColor="#FF6B42" stopOpacity="0" />
        </radialGradient>

        {/* Drip gradient */}
        <linearGradient id="dripRose" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8635A" />
          <stop offset="100%" stopColor="#C4423A" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="dripGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A843" />
          <stop offset="100%" stopColor="#A07830" stopOpacity="0.7" />
        </linearGradient>

        {/* Gloss highlight on tiers */}
        <linearGradient id="glossLeft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="softBlur">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── Ground shadow ── */}
      <ellipse cx="160" cy="348" rx="100" ry="12" fill="url(#shadowGrad)" />

      {/* ══════════════════════════════════════════
          TIER 1  —  Bottom (Rose Pink)  w=240 h=82
          ══════════════════════════════════════════ */}

      {/* Board / base */}
      <ellipse cx="160" cy="298" rx="112" ry="22" fill="#F9C5BE" />
      <ellipse cx="160" cy="298" rx="112" ry="22" fill="url(#t1Ellipse)" />

      {/* T1 cylinder side */}
      <path d="M48 242 L48 298 Q160 320 272 298 L272 242 Z" fill="url(#t1Side)" />
      {/* Gloss left */}
      <path d="M48 242 L48 298 Q80 308 100 302 L100 242 Z" fill="url(#glossLeft)" opacity="0.5" />

      {/* Decorative pearl dots bottom row */}
      {[60,85,110,135,160,185,210,235,258].map((x, i) => (
        <ellipse key={i} cx={x} cy={294} rx="6" ry="4.5"
          fill={i % 3 === 0 ? '#FFFDF9' : i % 3 === 1 ? '#FFD166' : '#FDECEA'}
          opacity="0.92" />
      ))}
      {/* Pearl shadow */}
      {[60,85,110,135,160,185,210,235,258].map((x, i) => (
        <ellipse key={`s${i}`} cx={x} cy={296.5} rx="6" ry="2" fill="#C4423A" opacity="0.18" />
      ))}

      {/* Rose drips from top of T1 */}
      <path d="M80 242 Q79 255 80 260 Q81 265 80 268 Q82 260 84 258 Q85 250 84 242" fill="url(#dripRose)" opacity="0.9" />
      <circle cx="80" cy="268" r="4.5" fill="#C4423A" opacity="0.8" />

      <path d="M115 242 Q114 250 115 254 Q116 258 115 260 Q117 255 119 253 Q120 247 119 242" fill="url(#dripRose)" opacity="0.85" />
      <circle cx="115" cy="260" r="3.5" fill="#C4423A" opacity="0.75" />

      <path d="M200 242 Q199 256 200 262 Q201 267 200 270 Q202 263 204 261 Q205 253 204 242" fill="url(#dripRose)" opacity="0.88" />
      <circle cx="200" cy="270" r="4" fill="#C4423A" opacity="0.78" />

      <path d="M240 242 Q239 249 240 252 Q241 255 240 257 Q242 252 244 250 Q245 245 244 242" fill="url(#dripRose)" opacity="0.82" />
      <circle cx="240" cy="257" r="3" fill="#C4423A" opacity="0.72" />

      {/* T1 Top ellipse */}
      <ellipse cx="160" cy="242" rx="112" ry="22" fill="url(#t1Top)" />
      {/* Rim highlight */}
      <ellipse cx="150" cy="238" rx="80" ry="10" fill="#FFFDF9" opacity="0.25" />

      {/* Cream ruffles on T1 top edge */}
      {Array.from({length: 14}).map((_, i) => {
        const angle = (i / 14) * Math.PI * 2;
        const rx = 108, ry = 21;
        const x = 160 + rx * Math.cos(angle);
        const y = 242 + ry * Math.sin(angle);
        return (
          <ellipse key={i} cx={x} cy={y} rx="9" ry="6"
            fill="url(#creamTop)" opacity="0.95"
            transform={`rotate(${angle * 180 / Math.PI} ${x} ${y})`} />
        );
      })}

      {/* ══════════════════════════════════════════
          TIER 2  —  Middle (Gold Caramel)  w=170 h=70
          ══════════════════════════════════════════ */}

      {/* T2 platform */}
      <ellipse cx="160" cy="250" rx="86" ry="17" fill="#E8D080" />

      {/* T2 side */}
      <path d="M74 185 L74 250 Q160 268 246 250 L246 185 Z" fill="url(#t2Side)" />
      <path d="M74 185 L74 250 Q100 260 118 255 L118 185 Z" fill="url(#glossLeft)" opacity="0.4" />

      {/* Gold pearl dots */}
      {[90,114,138,160,182,206,230].map((x, i) => (
        <ellipse key={i} cx={x} cy={247} rx="5.5" ry="4"
          fill={i % 2 === 0 ? '#FFFDF9' : '#FDF5DC'} opacity="0.9" />
      ))}

      {/* Gold drips */}
      <path d="M100 185 Q99 197 100 202 Q101 207 100 210 Q102 203 104 201 Q105 194 104 185" fill="url(#dripGold)" opacity="0.9" />
      <circle cx="100" cy="210" r="4" fill="#A07830" opacity="0.82" />

      <path d="M148 185 Q147 193 148 197 Q149 201 148 203 Q150 198 152 196 Q153 190 152 185" fill="url(#dripGold)" opacity="0.85" />
      <circle cx="148" cy="203" r="3" fill="#A07830" opacity="0.75" />

      <path d="M210 185 Q209 198 210 204 Q211 209 210 212 Q212 205 214 203 Q215 196 214 185" fill="url(#dripGold)" opacity="0.88" />
      <circle cx="210" cy="212" r="4.5" fill="#A07830" opacity="0.8" />

      {/* T2 top */}
      <ellipse cx="160" cy="185" rx="86" ry="17" fill="url(#t2Top)" />
      <ellipse cx="152" cy="181" rx="60" ry="8" fill="#FFFDF9" opacity="0.22" />

      {/* Gold ruffles */}
      {Array.from({length: 11}).map((_, i) => {
        const angle = (i / 11) * Math.PI * 2;
        const x = 160 + 82 * Math.cos(angle);
        const y = 185 + 16 * Math.sin(angle);
        return (
          <ellipse key={i} cx={x} cy={y} rx="8" ry="5.5"
            fill="url(#creamTop)" opacity="0.92"
            transform={`rotate(${angle * 180 / Math.PI} ${x} ${y})`} />
        );
      })}

      {/* Decorative rosettes on T2 side */}
      {[110, 160, 210].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={218} r="8" fill="#FDECEA" opacity="0.85" />
          <circle cx={x} cy={218} r="4" fill="#E8635A" opacity="0.9" />
          <circle cx={x} cy={218} r="1.5" fill="#D4A843" />
        </g>
      ))}

      {/* ══════════════════════════════════════════
          TIER 3  —  Top (Chocolate)  w=110 h=60
          ══════════════════════════════════════════ */}

      {/* T3 platform */}
      <ellipse cx="160" cy="193" rx="56" ry="11" fill="#C4906A" />

      {/* T3 side */}
      <path d="M104 135 L104 193 Q160 204 216 193 L216 135 Z" fill="url(#t3Side)" />
      <path d="M104 135 L104 193 Q122 200 136 196 L136 135 Z" fill="url(#glossLeft)" opacity="0.35" />

      {/* Chocolate drips on T3 */}
      <path d="M118 135 Q117 145 118 150 Q119 155 118 158 Q120 151 122 149 Q123 143 122 135" fill="#3D1F0D" opacity="0.7" />
      <circle cx="118" cy="158" r="3.5" fill="#1E0803" opacity="0.7" />

      <path d="M168 135 Q167 142 168 146 Q169 150 168 152 Q170 147 172 145 Q173 140 172 135" fill="#3D1F0D" opacity="0.65" />
      <circle cx="168" cy="152" r="2.5" fill="#1E0803" opacity="0.65" />

      <path d="M200 135 Q199 147 200 153 Q201 158 200 161 Q202 154 204 152 Q205 145 204 135" fill="#3D1F0D" opacity="0.72" />
      <circle cx="200" cy="161" r="4" fill="#1E0803" opacity="0.72" />

      {/* T3 top */}
      <ellipse cx="160" cy="135" rx="56" ry="11" fill="url(#t3Top)" />
      <ellipse cx="154" cy="132" rx="36" ry="5.5" fill="#FFFDF9" opacity="0.2" />

      {/* Chocolate ruffles */}
      {Array.from({length: 8}).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = 160 + 52 * Math.cos(angle);
        const y = 135 + 10 * Math.sin(angle);
        return (
          <ellipse key={i} cx={x} cy={y} rx="7" ry="5"
            fill="url(#creamTop)" opacity="0.9"
            transform={`rotate(${angle * 180 / Math.PI} ${x} ${y})`} />
        );
      })}

      {/* Star / flower decoration on T3 */}
      <g transform="translate(160, 155)">
        {[0,60,120,180,240,300].map(a => (
          <ellipse key={a} cx={Math.cos(a*Math.PI/180)*9} cy={Math.sin(a*Math.PI/180)*9}
            rx="4.5" ry="3" fill="#FDECEA" opacity="0.85"
            transform={`rotate(${a})`} />
        ))}
        <circle cx="0" cy="0" r="4" fill="#E8635A" />
        <circle cx="0" cy="0" r="1.5" fill="#D4A843" />
      </g>

      {/* ══════════════════════════════════════════
          CANDLES  —  3 candles on top tier
          ══════════════════════════════════════════ */}

      {/* Candle 1 (left) */}
      <rect x="136" y="98" width="9" height="37" rx="4.5"
        fill="url(#t2Side)" stroke="#C4423A" strokeWidth="0.5" />
      <rect x="136" y="98" width="4.5" height="37" rx="3"
        fill="#FFFDF9" opacity="0.25" />
      {/* Wick */}
      <line x1="140.5" y1="98" x2="141" y2="93" stroke="#3D1F0D" strokeWidth="1.2" strokeLinecap="round" />
      {/* Flame */}
      <g className="animate-candle" style={{ transformOrigin: '141px 88px' }}>
        <ellipse cx="141" cy="88" rx="5" ry="8" fill="url(#flame1)" opacity="0.9" />
        <ellipse cx="141" cy="91" rx="2.5" ry="4" fill="#FFF5C0" />
      </g>
      {/* Flame glow */}
      <ellipse cx="141" cy="88" rx="8" ry="11" fill="#FFD166" opacity="0.15" filter="url(#softBlur)" />

      {/* Candle 2 (center, taller) */}
      <rect x="155" y="88" width="10" height="47" rx="5"
        fill="url(#t1Side)" stroke="#C4423A" strokeWidth="0.5" />
      <rect x="155" y="88" width="5" height="47" rx="3.5"
        fill="#FFFDF9" opacity="0.22" />
      <line x1="160" y1="88" x2="160.5" y2="82" stroke="#3D1F0D" strokeWidth="1.3" strokeLinecap="round" />
      <g className="animate-candle" style={{ transformOrigin: '160px 76px', animationDelay: '0.13s' }}>
        <ellipse cx="160" cy="76" rx="5.5" ry="9" fill="url(#flame2)" opacity="0.95" />
        <ellipse cx="160" cy="80" rx="2.8" ry="4.5" fill="#FFF8D0" />
      </g>
      <ellipse cx="160" cy="76" rx="9" ry="12" fill="#FFD166" opacity="0.18" filter="url(#softBlur)" />

      {/* Candle 3 (right) */}
      <rect x="176" y="101" width="9" height="34" rx="4.5"
        fill="#7ECFBF" stroke="#3D9E90" strokeWidth="0.5" />
      <rect x="176" y="101" width="4.5" height="34" rx="3"
        fill="#FFFDF9" opacity="0.25" />
      <line x1="180.5" y1="101" x2="181" y2="96" stroke="#3D1F0D" strokeWidth="1.2" strokeLinecap="round" />
      <g className="animate-candle" style={{ transformOrigin: '181px 90px', animationDelay: '0.27s' }}>
        <ellipse cx="181" cy="90" rx="5" ry="8" fill="url(#flame1)" opacity="0.88" />
        <ellipse cx="181" cy="93" rx="2.5" ry="4" fill="#FFF5C0" />
      </g>
      <ellipse cx="181" cy="90" rx="8" ry="11" fill="#FFD166" opacity="0.15" filter="url(#softBlur)" />

      {/* ══ Small decorative stars ══ */}
      {[[82, 260, '#FFD166', 5], [238, 256, '#FFFDF9', 4], [72, 214, '#E8635A', 4.5], [248, 208, '#D4A843', 4],
        [112, 166, '#FDECEA', 3.5], [208, 162, '#FFD166', 3.5]].map(([x, y, fill, r], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          {[0,72,144,216,288].map(a => (
            <line key={a}
              x1={0} y1={0}
              x2={Math.cos(a*Math.PI/180)*r} y2={Math.sin(a*Math.PI/180)*r}
              stroke={fill} strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
          ))}
          <circle cx="0" cy="0" r="1.5" fill={fill} />
        </g>
      ))}

      {/* ══ Sprinkles on T1 ══ */}
      {[
        [95, 272, 8, '#E8635A'], [130, 278, -15, '#D4A843'], [155, 275, 20, '#7ECFBF'],
        [185, 273, -10, '#E8635A'], [215, 277, 12, '#FDECEA'], [240, 272, -20, '#D4A843'],
        [105, 265, 30, '#7ECFBF'], [175, 268, -25, '#FFD166'], [225, 265, 18, '#FDECEA'],
      ].map(([x, y, rot, color], i) => (
        <rect key={i} x={x-5} y={y-1.5} width="10" height="3" rx="1.5"
          fill={color} opacity="0.85"
          transform={`rotate(${rot} ${x} ${y})`} />
      ))}
    </svg>
  );
}
