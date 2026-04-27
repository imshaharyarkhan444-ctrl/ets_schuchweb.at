import { useInView } from '../hooks/useInView';
import { Zap, Wrench, Sun, Wind, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Electrical Installations',
    description:
      'Complete electrical installations for residential and commercial properties. From wiring and fuse boxes to lighting systems — professionally planned and expertly executed.',
    image: '/images/service-electrical.jpg',
    imageAlt: 'Professional electrical installation and wiring work',
    features: ['New construction wiring', 'Renovations & upgrades', 'Lighting design', 'Fuse & panel work'],
  },
  {
    icon: Wrench,
    title: 'Service & Maintenance',
    description:
      'Regular inspections, troubleshooting, and maintenance of your electrical systems. Keeping your installations safe, efficient, and up to current standards.',
    image: '/images/service-maintenance.jpg',
    imageAlt: 'Electrician performing maintenance check on electrical systems',
    features: ['Safety inspections', 'Fault diagnosis', 'Preventive maintenance', 'Emergency repairs'],
  },
  {
    icon: Sun,
    title: 'Photovoltaic Systems',
    description:
      'Expert planning, supply, and installation of solar energy systems. Harness the power of the sun with our comprehensive PV solutions tailored to your needs.',
    image: '/images/service-solar.jpg',
    imageAlt: 'Solar panel installation on residential rooftop in Burgenland',
    features: ['System planning', 'Panel installation', 'Inverter setup', 'Performance monitoring'],
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    description:
      'Professional air conditioning installation and service for comfortable indoor climate year-round. Energy-efficient systems for homes and businesses.',
    image: '/images/service-aircon.jpg',
    imageAlt: 'Modern air conditioning unit installation',
    features: ['Split system install', 'Multi-zone systems', 'Energy-efficient units', 'Regular servicing'],
  },
];

export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-light-gray">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-deep-blue via-soft-green to-deep-blue opacity-20" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-soft-green/10 px-4 py-2 mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-soft-green" />
            <span className="text-sm font-semibold text-soft-green-dark uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-dark leading-tight">
            Comprehensive Electrical{' '}
            <span className="text-deep-blue">Solutions</span>
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            From planning to installation — we deliver end-to-end electrical and energy 
            solutions with expert precision and personal service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 transition-all duration-500 hover:shadow-2xl hover:shadow-deep-blue/10 hover:-translate-y-1 ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg">
                      <Icon className="h-6 w-6 text-deep-blue" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-accent-dark group-hover:text-deep-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-500 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-soft-green shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
