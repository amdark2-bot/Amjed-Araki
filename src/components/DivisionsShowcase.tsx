import { ArrowRight } from 'lucide-react';
import { UiCopy } from '../data/translations';
import { DivisionId } from '../types/i18n';
import { ResilientImage } from './ResilientImage';

interface DivisionsShowcaseProps {
  copy: UiCopy;
  onSelectDivision: (division: DivisionId) => void;
}

export function DivisionsShowcase({ copy, onSelectDivision }: DivisionsShowcaseProps) {
  const cards = copy.pillarsSection.cards;

  return (
    <section id="pillars" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs sm:text-sm font-semibold text-[#8F6314] tracking-wide">
            {copy.pillarsSection.kicker}
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0B1324] leading-tight">
            {copy.pillarsSection.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {copy.pillarsSection.subtitle}
          </p>
        </div>

        {/* Asymmetric Bento Grid (col-span-2 + col-span-1 / col-span-1 + col-span-2) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 01: Wide Media, Music & Events */}
          <article className="lg:col-span-2 group relative rounded-xl overflow-hidden border border-slate-200 bg-[#0B1324] min-h-[340px] flex flex-col justify-end">
            <ResilientImage
              src="/src/assets/images/pillar_media_music_1795534457661.jpg"
              alt={cards[0].title}
              fallbackTitle={cards[0].category}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1324]/95 via-[#0B1324]/65 to-[#0B1324]/25" />

            <div className="relative z-10 p-6 sm:p-8 text-white max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-300">
                <span className="font-mono tabular-nums">{cards[0].index}.</span>
                <span aria-hidden="true">·</span>
                <span>{cards[0].category}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">
                  {cards[0].metricValue} {cards[0].metricLabel}
                </span>
              </div>

              <h3 className="mt-2.5 font-editorial text-2xl sm:text-3xl font-bold leading-snug text-white">
                {cards[0].title}
              </h3>

              <p className="mt-2.5 text-sm sm:text-base text-slate-200 leading-relaxed">
                {cards[0].description}
              </p>

              <button
                type="button"
                onClick={() => onSelectDivision(cards[0].divisionId)}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-300"
              >
                <span>{cards[0].exploreLabel}</span>
                <ArrowRight className="w-4 h-4 rtl:-scale-x-100" />
              </button>
            </div>
          </article>

          {/* Card 02: Digital Transformation & IoT */}
          <article className="lg:col-span-1 flex flex-col justify-between rounded-xl overflow-hidden border border-slate-200 bg-white">
            <div className="relative h-52 bg-[#0B1324] overflow-hidden">
              <ResilientImage
                src="/src/assets/images/pillar_digital_iot_1795534457491.jpg"
                alt={cards[1].title}
                fallbackTitle={cards[1].category}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1324]/60 via-transparent to-transparent" />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono font-semibold text-[#8F6314] tabular-nums">
                    {cards[1].index}.
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{cards[1].category}</span>
                </div>

                <h3 className="mt-2.5 text-xl font-bold text-[#0B1324] leading-snug">
                  {cards[1].title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {cards[1].description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-slate-500 tabular-nums">
                  {cards[1].metricValue} {cards[1].metricLabel}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectDivision(cards[1].divisionId)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B1324] hover:text-[#8F6314] transition-colors cursor-pointer"
                >
                  <span>{cards[1].exploreLabel}</span>
                  <ArrowRight className="w-4 h-4 rtl:-scale-x-100" />
                </button>
              </div>
            </div>
          </article>

          {/* Card 03: Education, Training & Lectures */}
          <article className="lg:col-span-1 flex flex-col justify-between p-6 sm:p-8 rounded-xl border border-slate-200 bg-white">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-mono font-semibold text-[#8F6314] tabular-nums">
                  {cards[2].index}.
                </span>
                <span aria-hidden="true">·</span>
                <span>{cards[2].category}</span>
              </div>

              <div className="mt-6 font-mono text-4xl font-semibold text-[#0B1324] tabular-nums">
                0{cards[2].metricValue}
              </div>
              <p className="text-xs text-slate-500 mt-1">{cards[2].metricLabel}</p>

              <h3 className="mt-5 text-xl font-bold text-[#0B1324] leading-snug">
                {cards[2].title}
              </h3>

              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                {cards[2].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => onSelectDivision(cards[2].divisionId)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1324] hover:text-[#8F6314] transition-colors cursor-pointer"
              >
                <span>{cards[2].exploreLabel}</span>
                <ArrowRight className="w-4 h-4 rtl:-scale-x-100" />
              </button>
            </div>
          </article>

          {/* Card 04: Wide Investment, Feasibility & Growth */}
          <article className="lg:col-span-2 group relative rounded-xl overflow-hidden border border-slate-200 bg-[#0B1324] min-h-[340px] flex flex-col justify-end">
            <ResilientImage
              src="/src/assets/images/pillar_investment_advisory_1795534457776.jpg"
              alt={cards[3].title}
              fallbackTitle={cards[3].category}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1324]/95 via-[#0B1324]/70 to-[#0B1324]/25" />

            <div className="relative z-10 p-6 sm:p-8 text-white max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-300">
                <span className="font-mono tabular-nums">{cards[3].index}.</span>
                <span aria-hidden="true">·</span>
                <span>{cards[3].category}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">
                  {cards[3].metricValue} {cards[3].metricLabel}
                </span>
              </div>

              <h3 className="mt-2.5 font-editorial text-2xl sm:text-3xl font-bold leading-snug text-white">
                {cards[3].title}
              </h3>

              <p className="mt-2.5 text-sm sm:text-base text-slate-200 leading-relaxed">
                {cards[3].description}
              </p>

              <button
                type="button"
                onClick={() => onSelectDivision(cards[3].divisionId)}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-300"
              >
                <span>{cards[3].exploreLabel}</span>
                <ArrowRight className="w-4 h-4 rtl:-scale-x-100" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
