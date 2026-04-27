import { ArrowDown, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-electrical.jpg"
          alt="Professional electrician performing electrical installation work"
          className="h-full w-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue-dark/90 via-deep-blue/80 to-deep-blue/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-dark/50 via-transparent to-transparent" />
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 mb-8">
            <div className="h-2 w-2 rounded-full bg-soft-green animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Trusted Electrical Experts Since 2000
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Elektro Technik
            <span className="block text-soft-green-light mt-2">Schuch</span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-up animation-delay-200 mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
            Reliable Electrical &amp; Solar Solutions in Güttenbach.
            <span className="block mt-1 text-white/60">
              Quality installations, expert service, and sustainable energy for Burgenland.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-soft-green px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-soft-green/30 transition-all duration-300 hover:bg-soft-green-dark hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="tel:+436645106075"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/15 hover:border-white/40"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Quick stats */}
          <div className="animate-fade-in-up animation-delay-400 mt-16 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-sm text-white/50 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-white/50 mt-1">Owner-Led</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5.0</div>
              <div className="text-sm text-white/50 mt-1">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-5 w-5 text-white/50" />
        </a>
      </div>
    </section>
  );
}
