import { motion, useReducedMotion } from 'motion/react';

interface NetworkRoute {
  id: string;
  d: string;
  duration: number;
  delay: number;
}

interface NetworkNode {
  id: string;
  cx: number;
  cy: number;
  r: number;
  delay: number;
}

const NETWORK_ROUTES: NetworkRoute[] = [
  {
    id: 'route-west-hub',
    d: 'M -40 180 C 210 150, 380 280, 720 350',
    duration: 7.5,
    delay: 0.2,
  },
  {
    id: 'route-north-arc',
    d: 'M 180 40 C 420 190, 560 220, 720 350',
    duration: 6.8,
    delay: 1.4,
  },
  {
    id: 'route-east-hub',
    d: 'M 1480 170 C 1220 140, 1040 270, 720 350',
    duration: 8.2,
    delay: 0.8,
  },
  {
    id: 'route-south-west',
    d: 'M -20 560 C 260 520, 440 420, 720 350',
    duration: 7.2,
    delay: 2.1,
  },
  {
    id: 'route-south-east',
    d: 'M 1460 550 C 1180 510, 990 420, 720 350',
    duration: 7.8,
    delay: 1.0,
  },
  {
    id: 'route-horizon-sweep',
    d: 'M 120 640 Q 720 470 1320 640',
    duration: 9.0,
    delay: 0.5,
  },
  {
    id: 'route-upper-sweep',
    d: 'M 110 90 Q 720 230 1330 90',
    duration: 9.5,
    delay: 1.8,
  },
];

const NETWORK_NODES: NetworkNode[] = [
  { id: 'node-nw', cx: 180, cy: 158, r: 3, delay: 0.3 },
  { id: 'node-n', cx: 392, cy: 170, r: 2.5, delay: 1.1 },
  { id: 'node-ne', cx: 1265, cy: 162, r: 3, delay: 0.7 },
  { id: 'node-e', cx: 1082, cy: 235, r: 2.5, delay: 1.6 },
  { id: 'node-w', cx: 332, cy: 232, r: 2.5, delay: 2.0 },
  { id: 'node-sw', cx: 215, cy: 528, r: 3, delay: 0.9 },
  { id: 'node-se', cx: 1230, cy: 520, r: 3, delay: 1.4 },
  { id: 'node-sw-mid', cx: 430, cy: 446, r: 2, delay: 2.4 },
  { id: 'node-se-mid', cx: 1015, cy: 442, r: 2, delay: 0.5 },
];

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FinancialNetwork() {
  const prefersReducedMotion = useReducedMotion();

  const revealInitial = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 18 };

  const revealInView = { opacity: 1, y: 0 };

  return (
    <section
      id="network"
      aria-labelledby="financial-network-heading"
      className="relative overflow-hidden bg-[#060911] text-[#F8FAFC] py-24 sm:py-28 lg:py-36 border-y border-[#C59B27]/20 isolate"
    >
      {/* Sophisticated Black/Charcoal Ambient Lighting Layers (Always Dark) */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        {/* Deep charcoal atmospheric base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 65% at 50% 50%, #101726 0%, #080C15 55%, #05070D 100%)',
          }}
        />

        {/* Subtle warm gold architectural illumination */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0.35 } : { opacity: 0.25, scale: 0.96 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.35 }
              : { opacity: [0.24, 0.38, 0.24], scale: [0.96, 1.03, 0.96] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(780px,92vw)] h-[380px] rounded-full blur-[120px]"
          style={{
            background:
              'radial-gradient(circle, rgba(197, 155, 39, 0.14) 0%, rgba(223, 183, 90, 0.05) 45%, transparent 75%)',
          }}
        />

        {/* Soft edge light accents */}
        <div className="hidden md:block absolute -top-24 left-1/4 w-96 h-72 bg-[#C59B27]/[0.04] rounded-full blur-[110px]" />
        <div className="hidden md:block absolute -bottom-24 right-1/4 w-96 h-72 bg-[#DFB75A]/[0.04] rounded-full blur-[110px]" />
      </div>

      {/* Subtle Animated Architectural Network Backdrop */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-90">
        <svg
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="networkLineBase" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C59B27" stopOpacity="0.03" />
              <stop offset="30%" stopColor="#DFB75A" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#F5E5BA" stopOpacity="0.24" />
              <stop offset="70%" stopColor="#DFB75A" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#C59B27" stopOpacity="0.03" />
            </linearGradient>

            <linearGradient id="networkPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C59B27" stopOpacity="0" />
              <stop offset="50%" stopColor="#F5E5BA" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#DFB75A" stopOpacity="0" />
            </linearGradient>

            <radialGradient id="centerReadabilityMask" cx="50%" cy="50%" r="48%">
              <stop offset="0%" stopColor="#070B14" stopOpacity="0.88" />
              <stop offset="60%" stopColor="#070B14" stopOpacity="0.58" />
              <stop offset="100%" stopColor="#070B14" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Subtle Concentric Orbital Rings */}
          <g stroke="#C59B27" fill="none" strokeWidth="0.75">
            <circle cx="720" cy="350" r="210" strokeOpacity="0.08" strokeDasharray="3 7" />
            <circle cx="720" cy="350" r="340" strokeOpacity="0.07" />
            <circle cx="720" cy="350" r="490" strokeOpacity="0.05" strokeDasharray="2 10" />
          </g>

          {/* Base Fine Network Paths */}
          <g fill="none" stroke="url(#networkLineBase)" strokeWidth="1">
            {NETWORK_ROUTES.map((route) => (
              <path key={route.id} d={route.d} />
            ))}
          </g>

          {/* Secondary Subtle Cross-Connects */}
          <g fill="none" stroke="#DFB75A" strokeOpacity="0.08" strokeWidth="0.75">
            <path d="M 180 158 L 392 170 L 332 232 Z" />
            <path d="M 1265 162 L 1082 235 L 1230 520" />
            <path d="M 215 528 L 430 446 L 1015 442 L 1230 520" />
            <path d="M 392 170 Q 720 120 1082 235" />
          </g>

          {/* Traveling Light Segments Along Network Trajectories */}
          {!prefersReducedMotion &&
            NETWORK_ROUTES.map((route) => (
              <motion.path
                key={`${route.id}-pulse`}
                d={route.d}
                fill="none"
                stroke="url(#networkPulseGrad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0.14, pathOffset: 0, opacity: 0 }}
                animate={{
                  pathOffset: [0, 0.86],
                  opacity: [0, 0.85, 0.85, 0],
                }}
                transition={{
                  duration: route.duration,
                  delay: route.delay,
                  repeat: Infinity,
                  repeatDelay: 1.6,
                  ease: 'easeInOut',
                }}
              />
            ))}

          {/* Perimeter Network Nodes */}
          {NETWORK_NODES.map((node) => (
            <g key={node.id}>
              {!prefersReducedMotion && (
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r * 3.4}
                  fill="none"
                  stroke="#DFB75A"
                  strokeWidth="0.85"
                  initial={{ opacity: 0.15, scale: 0.8 }}
                  animate={{ opacity: [0.1, 0.45, 0.1], scale: [0.85, 1.35, 0.85] }}
                  transition={{
                    duration: 4.5,
                    delay: node.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                />
              )}
              <circle cx={node.cx} cy={node.cy} r={node.r} fill="#DFB75A" fillOpacity="0.85" />
              <circle cx={node.cx} cy={node.cy} r={node.r * 0.45} fill="#FFF7DF" />
            </g>
          ))}

          {/* Soft Center Scrim Ensuring Effortless Text Contrast */}
          <ellipse cx="720" cy="350" rx="540" ry="260" fill="url(#centerReadabilityMask)" />
        </svg>
      </div>

      {/* Top & Bottom Hairline Gold Horizon Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C59B27]/45 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C59B27]/45 to-transparent pointer-events-none" />

      {/* Centered Editorial Content Container */}
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Section Heading */}
        <motion.div
          initial={revealInitial}
          whileInView={revealInView}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: EASE_CURVE }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-6"
        >
          <span className="h-px w-7 sm:w-12 bg-gradient-to-r from-transparent to-[#C59B27]/80" aria-hidden="true" />
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.26em] text-[#DFB75A]">
            OUR BANKING &amp; FINANCIAL NETWORK
          </p>
          <span className="h-px w-7 sm:w-12 bg-gradient-to-l from-transparent to-[#C59B27]/80" aria-hidden="true" />
        </motion.div>

        {/* Main Refined Classic Headline */}
        <motion.h2
          id="financial-network-heading"
          initial={revealInitial}
          whileInView={revealInView}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE_CURVE }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1] text-balance"
        >
          Connected Across India
        </motion.h2>

        {/* Subtle Gold Architectural Divider */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0.4 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.16, ease: EASE_CURVE }}
          className="w-24 h-px mx-auto my-7 bg-gradient-to-r from-transparent via-[#C59B27] to-transparent"
          aria-hidden="true"
        />

        {/* Core Institutional Description */}
        <motion.p
          initial={revealInitial}
          whileInView={revealInView}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.22, ease: EASE_CURVE }}
          className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal tracking-[0.01em]"
        >
          Isha Associates works with a network of banking and financial institutions to help
          customers explore suitable financial solutions for personal, home, business, and
          vehicle loan requirements.
        </motion.p>

        {/* Supporting Statement & Brand Tagline Lockup */}
        <motion.div
          initial={revealInitial}
          whileInView={revealInView}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.32, ease: EASE_CURVE }}
          className="mt-10 pt-8 border-t border-white/10 max-w-2xl mx-auto space-y-4"
        >
          <p className="text-sm sm:text-base font-medium tracking-[0.05em] text-[#E2E8F0]">
            One Vision. Multiple Financial Solutions. Nationwide Reach.
          </p>

          <p className="font-display italic text-lg sm:text-xl md:text-2xl font-semibold text-[#DFB75A] tracking-wide">
            Funding Today, Securing Tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
