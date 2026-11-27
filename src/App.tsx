/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { ConsultationForm } from './components/ConsultationForm';
import { DivisionsShowcase } from './components/DivisionsShowcase';
import { Footer } from './components/Footer';
import { FounderPhilosophy } from './components/FounderPhilosophy';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesExplorer } from './components/ServicesExplorer';
import { LANGUAGE_OPTIONS, UI_COPY } from './data/translations';
import { CONTACT_INFO } from './data/contact';
import { DivisionId, LanguageCode, ServiceItem } from './types/i18n';

const VALID_LANGS: LanguageCode[] = ['ar', 'en', 'fr', 'es'];

function getInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'ar';
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param && VALID_LANGS.includes(param as LanguageCode)) {
    return param as LanguageCode;
  }
  return 'ar';
}

export default function App() {
  const [lang, setLang] = useState<LanguageCode>(getInitialLanguage);
  const [activeDivision, setActiveDivision] = useState<DivisionId>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('general');
  const [gmpQuotaExceeded, setGmpQuotaExceeded] = useState(false);

  const copy = UI_COPY[lang];
  const currentLangMeta = LANGUAGE_OPTIONS.find((item) => item.code === lang) ?? LANGUAGE_OPTIONS[0];

  useEffect(() => {
    document.documentElement.lang = currentLangMeta.code;
    document.documentElement.dir = currentLangMeta.dir;

    const baseUrl =
      window.location.hostname &&
      window.location.hostname !== 'localhost' &&
      window.location.hostname !== '127.0.0.1'
        ? `${window.location.origin}${window.location.pathname === '/' ? '' : window.location.pathname}`
        : CONTACT_INFO.officialDomainUrl;

    const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const canonicalUrl =
      currentLangMeta.code === 'ar'
        ? `${normalizedBase}/`
        : `${normalizedBase}/?lang=${currentLangMeta.code}`;

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute('content', canonicalUrl);
    }

    if (window.location.protocol !== 'file:') {
      try {
        const url = new URL(window.location.href);
        if (currentLangMeta.code === 'ar') {
          url.searchParams.delete('lang');
        } else {
          url.searchParams.set('lang', currentLangMeta.code);
        }
        window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
      } catch {
        // Ignore history restriction on sandboxed/standalone origins
      }
    }
  }, [currentLangMeta]);

  useEffect(() => {
    const handleQuotaExceeded = () => {
      setGmpQuotaExceeded(true);
    };
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => {
      window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRequestService = (service: ServiceItem) => {
    setSelectedServiceId(service.id);
    scrollToSection('contact');
  };

  const handleSelectDivisionFromShowcase = (division: DivisionId) => {
    setActiveDivision(division);
    scrollToSection('services');
  };

  return (
    <div dir={currentLangMeta.dir} className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {gmpQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      <Header
        copy={copy}
        onSelectConsultation={() => scrollToSection('contact')}
      />

      <main className="flex-1">
        <Hero
          lang={lang}
          copy={copy}
          onChangeLang={setLang}
          onExploreServices={() => scrollToSection('services')}
          onDirectConsult={() => scrollToSection('contact')}
        />

        <ServicesExplorer
          lang={lang}
          copy={copy}
          activeDivision={activeDivision}
          onChangeDivision={setActiveDivision}
          onRequestService={handleRequestService}
        />

        <DivisionsShowcase
          copy={copy}
          onSelectDivision={handleSelectDivisionFromShowcase}
        />

        <FounderPhilosophy
          lang={lang}
          copy={copy}
          quotaExceeded={gmpQuotaExceeded}
        />

        <ConsultationForm
          lang={lang}
          copy={copy}
          preselectedServiceId={selectedServiceId}
        />
      </main>

      <Footer
        lang={lang}
        copy={copy}
        onChangeLang={setLang}
      />
    </div>
  );
}
