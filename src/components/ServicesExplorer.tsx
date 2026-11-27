import { ArrowUpRight, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { DIVISIONS, SERVICES } from '../data/services';
import { UiCopy } from '../data/translations';
import { DivisionId, LanguageCode, ServiceItem } from '../types/i18n';

interface ServicesExplorerProps {
  lang: LanguageCode;
  copy: UiCopy;
  activeDivision: DivisionId;
  onChangeDivision: (division: DivisionId) => void;
  onRequestService: (service: ServiceItem) => void;
}

export function ServicesExplorer({
  lang,
  copy,
  activeDivision,
  onChangeDivision,
  onRequestService,
}: ServicesExplorerProps) {
  const [query, setQuery] = useState('');

  const divisionMap = useMemo(() => {
    const map = new Map<string, (typeof DIVISIONS)[number]>();
    DIVISIONS.forEach((d) => map.set(d.id, d));
    return map;
  }, []);

  const filteredServices = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((item) => {
      const matchesDivision = activeDivision === 'all' || item.division === activeDivision;
      if (!matchesDivision) return false;
      if (!q) return true;

      const haystack = [
        item.title.ar,
        item.title.en,
        item.title.fr,
        item.title.es,
        item.description.ar,
        item.description.en,
        item.description.fr,
        item.description.es,
        item.deliverableScope[lang],
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [activeDivision, query, lang]);

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs sm:text-sm font-semibold text-[#8F6314] tracking-wide">
            {copy.servicesSection.kicker}
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0B1324] leading-tight">
            {copy.servicesSection.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {copy.servicesSection.subtitle}
          </p>
        </div>

        {/* Controls Bar: Division Filter Tabs + Search */}
        <div className="mt-10 space-y-4">
          <div
            role="tablist"
            aria-label={copy.servicesSection.kicker}
            className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeDivision === 'all'}
              onClick={() => onChangeDivision('all')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0B1324] ${
                activeDivision === 'all'
                  ? 'bg-[#0B1324] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#0B1324] hover:bg-white/80'
              }`}
            >
              {copy.servicesSection.allDivisionsLabel}
            </button>

            {DIVISIONS.map((division) => {
              const isSelected = activeDivision === division.id;
              return (
                <button
                  key={division.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onChangeDivision(division.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0B1324] ${
                    isSelected
                      ? 'bg-[#0B1324] text-white shadow-sm'
                      : 'text-slate-700 hover:text-[#0B1324] hover:bg-white/80'
                  }`}
                >
                  <span className="font-mono opacity-75 me-1.5 tabular-nums">{division.index}.</span>
                  {division.shortLabel[lang]}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-xl">
              <Search
                className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={copy.servicesSection.searchPlaceholder}
                aria-label={copy.servicesSection.searchPlaceholder}
                className="w-full ps-10 pe-10 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0B1324] focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label={copy.servicesSection.clearFilter}
                  className="absolute top-1/2 -translate-y-1/2 end-2.5 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-sm text-slate-600 font-medium tabular-nums">
              <span className="font-mono font-semibold text-[#0B1324]">{filteredServices.length}</span>{' '}
              {copy.servicesSection.showingCount}
            </div>
          </div>
        </div>

        {/* Active Division Summary Strip (clean unboxed border) */}
        {activeDivision !== 'all' && divisionMap.get(activeDivision) && (
          <div className="mt-6 p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-[#0B1324]">
                <span className="font-mono me-2 text-[#8F6314] tabular-nums">
                  {divisionMap.get(activeDivision)?.index}.
                </span>
                {divisionMap.get(activeDivision)?.label[lang]}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {divisionMap.get(activeDivision)?.summary[lang]}
              </p>
            </div>
          </div>
        )}

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="mt-10 p-10 text-center border border-slate-200 rounded-xl bg-slate-50">
            <p className="text-base font-semibold text-[#0B1324]">
              {copy.servicesSection.noResultsTitle}
            </p>
            <p className="text-sm text-slate-600 mt-1">
              {copy.servicesSection.noResultsHint}
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                onChangeDivision('all');
              }}
              className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-[#0B1324] rounded-lg hover:bg-[#162340] transition-colors cursor-pointer"
            >
              {copy.servicesSection.clearFilter}
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredServices.map((service) => {
              const divMeta = divisionMap.get(service.division);
              return (
                <article
                  key={service.id}
                  className="flex flex-col justify-between p-6 bg-white border border-slate-200 hover:border-slate-400 rounded-xl transition-colors"
                >
                  <div>
                    {/* Clean unboxed metadata line */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono font-semibold text-[#8F6314] tabular-nums">
                        {service.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{divMeta?.shortLabel[lang]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.deliveryMode[lang]}</span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-[#0B1324] leading-snug">
                      {service.title[lang]}
                    </h3>

                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {service.description[lang]}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-slate-500">
                      {service.deliverableScope[lang]}
                    </span>

                    <button
                      type="button"
                      onClick={() => onRequestService(service)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B1324] hover:text-[#8F6314] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0B1324]"
                    >
                      <span>{copy.servicesSection.requestAction}</span>
                      <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
