import { useInView } from '../hooks/useInView';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const { ref, isInView } = useInView();

  return (
    <section id="reviews" className="relative py-24 lg:py-32 bg-light-gray overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-deep-blue/3 rounded-full blur-3xl" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-deep-blue/5 px-4 py-2 mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-deep-blue" />
            <span className="text-sm font-semibold text-deep-blue uppercase tracking-wider">Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-dark leading-tight">
            What Our Clients{' '}
            <span className="text-deep-blue">Say</span>
          </h2>
        </div>

        {/* Rating Summary + Review */}
        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Rating Card */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-100 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="bg-deep-blue rounded-2xl p-8 lg:p-10 text-center text-white h-full flex flex-col items-center justify-center">
              <div className="text-7xl font-bold">5.0</div>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-white/70 text-sm">Google Rating</p>
              <div className="mt-6 pt-6 border-t border-white/10 w-full">
                <p className="text-3xl font-bold">1</p>
                <p className="text-white/60 text-sm mt-1">Verified Review</p>
              </div>
            </div>
          </div>

          {/* Review Card */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl shadow-black/5 h-full relative">
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 h-12 w-12 text-deep-blue/5" />

              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="mt-6 text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                "Highly recommended photovoltaic expert. Reliable and 
                knowledgeable — a true full-service provider from planning 
                to installation. Everything was handled professionally 
                and with personal care."
              </blockquote>

              {/* Reviewer */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-deep-blue/10">
                  <span className="text-lg font-bold text-deep-blue">V</span>
                </div>
                <div>
                  <p className="font-semibold text-accent-dark">Verified Customer</p>
                  <p className="text-sm text-gray-500">Photovoltaic Installation</p>
                </div>
              </div>

              {/* Verified badge */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-soft-green/10 px-4 py-2">
                <svg className="h-4 w-4 text-soft-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-xs font-semibold text-soft-green-dark">Verified Google Review</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
