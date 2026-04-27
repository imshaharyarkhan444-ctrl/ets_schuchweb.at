import { Zap, MapPin, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#strengths' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Electrical Installations',
  'Service & Maintenance',
  'Photovoltaic Systems',
  'Air Conditioning',
];

export default function Footer() {
  return (
    <footer className="bg-accent-dark text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft-green">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight">ETS</span>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-white/50">
                  Elektro Technik Schuch
                </span>
              </div>
            </a>
            <p className="mt-5 text-white/50 text-sm leading-relaxed max-w-xs">
              Your trusted partner for electrical installations, solar energy, 
              and air conditioning in Güttenbach, Burgenland since 2000.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-soft-green transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/50">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-soft-green shrink-0 mt-0.5" />
                <span className="text-sm text-white/50">
                  Obere Hauptstraße 37<br />
                  7536 Güttenbach, Austria
                </span>
              </li>
              <li>
                <a
                  href="tel:+436645106075"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-soft-green transition-colors"
                >
                  <Phone className="h-4 w-4 text-soft-green shrink-0" />
                  +43 664 5106075
                </a>
              </li>
              <li>
                <a
                  href="mailto:ets@schuchweb.at"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-soft-green transition-colors"
                >
                  <Mail className="h-4 w-4 text-soft-green shrink-0" />
                  ets@schuchweb.at
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Elektro Technik Schuch. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Electrician Güttenbach · Solar Installation Burgenland · Electrical Service Austria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
