import { useInView } from '../hooks/useInView';
import { MapPin, Calendar, Shield, UserCheck } from 'lucide-react';

const highlights = [
  {
    icon: Calendar,
    title: 'Since 2000',
    description: 'Over two decades of hands-on expertise in electrical engineering and installation.',
  },
  {
    icon: MapPin,
    title: 'Local Expert',
    description: 'Based in Güttenbach, serving Burgenland and surrounding regions with dedication.',
  },
  {
    icon: UserCheck,
    title: 'Owner-Led',
    description: 'Direct communication with the expert — no middlemen, personal accountability.',
  },
  {
    icon: Shield,
    title: 'Quality Focused',
    description: 'Every project is handled with precision, reliability, and lasting quality.',
  },
];

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-light-gray to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-700 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-deep-blue/10">
              <img
                src="/images/company-building.jpg"
                alt="Elektro Technik Schuch company building in Güttenbach, Austria"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs">
                <div className="rounded-xl bg-white/95 backdrop-blur-sm p-5 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-soft-green/10">
                      <MapPin className="h-6 w-6 text-soft-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-deep-blue text-sm">Güttenbach, Burgenland</p>
                      <p className="text-xs text-gray-500 mt-0.5">Serving the region since 2000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-soft-green/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-deep-blue/10 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-deep-blue/5 px-4 py-2 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-deep-blue" />
              <span className="text-sm font-semibold text-deep-blue uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-dark leading-tight">
              Your Trusted{' '}
              <span className="text-deep-blue">Electrical Partner</span>{' '}
              in Burgenland
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Elektro Technik Schuch is a small, owner-led electrical company based in 
              Güttenbach, Austria. Since 2000, we've been delivering expert electrical 
              installations, photovoltaic systems, and air conditioning solutions with a 
              personal touch.
            </p>

            <p className="mt-4 text-gray-500 leading-relaxed">
              As a one-person expert business, you get direct access to the specialist 
              — from initial planning through to final installation. No layers of 
              management, just honest, quality workmanship you can rely on.
            </p>

            {/* Highlight Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group flex gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-light-gray"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-deep-blue/5 group-hover:bg-deep-blue/10 transition-colors">
                      <Icon className="h-5 w-5 text-deep-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-accent-dark text-sm">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
