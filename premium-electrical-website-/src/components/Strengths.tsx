import { useInView } from '../hooks/useInView';
import { UserCheck, Layers, Sun, ShieldCheck } from 'lucide-react';

const strengths = [
  {
    icon: UserCheck,
    title: 'Direct Expert Contact',
    description:
      'As an owner-led business, you communicate directly with the specialist. No middlemen, no misunderstandings — just clear, personal service from start to finish.',
    accent: 'from-deep-blue to-deep-blue-light',
    accentLight: 'bg-deep-blue/5',
    iconColor: 'text-deep-blue',
    number: '01',
  },
  {
    icon: Layers,
    title: 'Complete Solutions',
    description:
      'We handle everything: planning, material supply, and professional installation. One contact for your entire project — efficient, seamless, and hassle-free.',
    accent: 'from-soft-green to-soft-green-light',
    accentLight: 'bg-soft-green/5',
    iconColor: 'text-soft-green-dark',
    number: '02',
  },
  {
    icon: Sun,
    title: 'PV Expertise',
    description:
      'Deep knowledge and hands-on experience in photovoltaic system design and installation. We help you transition to clean, sustainable energy with confidence.',
    accent: 'from-amber-500 to-yellow-400',
    accentLight: 'bg-amber-50',
    iconColor: 'text-amber-600',
    number: '03',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Knowledgeable',
    description:
      'Over 25 years of experience means tested solutions and proven reliability. We deliver what we promise — on time, on budget, and to the highest standards.',
    accent: 'from-deep-blue to-soft-green',
    accentLight: 'bg-deep-blue/5',
    iconColor: 'text-deep-blue',
    number: '04',
  },
];

export default function Strengths() {
  const { ref, isInView } = useInView();

  return (
    <section id="strengths" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-deep-blue/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-green/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`max-w-2xl mb-16 transition-all duration-700 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-deep-blue/5 px-4 py-2 mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-deep-blue" />
            <span className="text-sm font-semibold text-deep-blue uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-dark leading-tight">
            What Sets Us{' '}
            <span className="text-deep-blue">Apart</span>
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            With Elektro Technik Schuch, you get more than just an electrician — 
            you get a dedicated partner for all your electrical and energy needs.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 lg:p-8 rounded-2xl border border-gray-100 transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-deep-blue/8 hover:-translate-y-1 ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Number */}
                <span className="text-5xl font-bold text-gray-100 group-hover:text-deep-blue/10 transition-colors absolute top-4 right-5">
                  {strength.number}
                </span>

                {/* Icon */}
                <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-xl ${strength.accentLight} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-7 w-7 ${strength.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="relative z-10 mt-6 text-lg font-bold text-accent-dark">
                  {strength.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm text-gray-500 leading-relaxed">
                  {strength.description}
                </p>

                {/* Bottom accent line */}
                <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${strength.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
