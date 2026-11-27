import { ArrowDown, Globe } from 'lucide-react';
import { LANGUAGE_OPTIONS, UiCopy } from '../data/translations';
import { LanguageCode } from '../types/i18n';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  lang: LanguageCode;
  copy: UiCopy;
  onChangeLang: (code: LanguageCode) => void;
  onExploreServices: () => void;
  onDirectConsult: () => void;
}

export function Hero({
  lang,
  copy,
  onChangeLang,
  onExploreServices,
  onDirectConsult,
}: HeroProps) {
  return (
    <section id="overview" className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pt-10 lg:pb-16">
        {/* Workspace Language Toolbar & Regional Context */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-slate-200">
          <p className="text-xs sm:text-sm font-medium text-slate-600 tracking-wide">
            {copy.hero.kicker}
          </p>

          <div
            role="group"
            aria-label="Language selector"
            className="inline-flex items-center gap-1 p-1 bg-slate-200/75 rounded-lg self-start sm:self-auto"
          >
            <span className="px-2 text-slate-500 flex items-center" aria-hidden="true">
              <Globe className="w-3.5 h-3.5" />
            </span>
            {LANGUAGE_OPTIONS.map((option) => {
              const active = option.code === lang;
              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => onChangeLang(option.code)}
                  aria-pressed={active}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0B1324] ${
                    active
                      ? 'bg-[#0B1324] text-white shadow-sm'
                      : 'text-slate-700 hover:text-[#0B1324] hover:bg-white/70'
                  }`}
                >
                  {option.nativeLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Balanced Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 lg:pt-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <p className="text-sm font-semibold text-[#8F6314] tracking-wide">
                {copy.consultantTitle}
              </p>

              <h1
                className="font-editorial font-bold text-[#0B1324] leading-[1.18] tracking-tight"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
              >
                {copy.hero.headline}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed max-w-2xl">
                {copy.hero.subheadline}
              </p>

              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                {copy.hero.welcomeNote}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#0B1324] hover:bg-[#162340] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4832C]"
              >
                <span>{copy.hero.primaryCta}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onDirectConsult}
                className="inline-flex items-center px-5 py-3.5 text-sm font-semibold text-[#0B1324] bg-white border border-slate-300 hover:border-[#0B1324] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0B1324]"
              >
                {copy.hero.secondaryCta}
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-72 sm:h-96 lg:h-full min-h-[340px] rounded-xl overflow-hidden border border-slate-200 bg-[#0B1324]">
              <ResilientImage
                src="/src/assets/images/hero_amjoid_consultancy_1795534456812.jpg"
                alt={copy.hero.imageCaption}
                fallbackTitle={copy.brandTitleFull}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1324]/85 via-[#0B1324]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-medium text-amber-300 tracking-wide mb-1">
                  {copy.domainName}
                </p>
                <p className="text-base sm:text-lg font-semibold leading-snug">
                  {copy.hero.imageCaption}
                </p>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  {copy.hero.imageLocation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Executive Strip Below Hero Split */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-200 bg-white rounded-xl divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-slate-200">
          {copy.hero.stats.map((stat, idx) => (
            <div key={idx} className="p-6">
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-[#0B1324] tabular-nums">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-900">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-500">
                {stat.context}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
