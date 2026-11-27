import { Check, Copy, ExternalLink, Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO } from '../data/contact';
import { UiCopy } from '../data/translations';
import { LanguageCode } from '../types/i18n';
import { LocationMapBox } from './LocationMapBox';

interface FounderPhilosophyProps {
  lang: LanguageCode;
  copy: UiCopy;
  quotaExceeded: boolean;
}

export function FounderPhilosophy({ lang, copy, quotaExceeded }: FounderPhilosophyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(copy.founderSection.addressLine);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="founder" className="py-16 lg:py-24 bg-[#0B1324] text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Leadership & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs sm:text-sm font-semibold text-amber-300 tracking-wide">
              {copy.founderSection.kicker}
            </p>

            <div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white leading-tight">
                {copy.founderSection.title}
              </h2>
              <p className="mt-2 text-sm text-slate-300 font-medium">
                {copy.founderSection.role}
              </p>
            </div>

            <blockquote className="pt-2 pb-4 border-y border-slate-800 font-editorial text-xl sm:text-2xl text-amber-200 leading-relaxed">
              {copy.founderSection.quote}
            </blockquote>

            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
              {copy.founderSection.philosophyBody}
            </p>
          </div>

          {/* Headquarters & Direct Channels Panel */}
          <div className="lg:col-span-6 bg-[#121D35] border border-slate-700/80 rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-amber-300 shrink-0 mt-1" aria-hidden="true" />
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">
                  {copy.founderSection.headquartersTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {copy.founderSection.addressLine}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B1324] bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? copy.founderSection.copiedLabel : copy.founderSection.copyAddressBtn}</span>
              </button>

              <span className="text-xs text-slate-300">
                {copy.founderSection.correspondenceNote}
              </span>
            </div>

            {/* Direct Contact Channels Grid */}
            <div className="pt-5 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
              {/* Mobile Numbers */}
              <div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />
                  <span>{copy.founderSection.mobileLabel}</span>
                </div>
                <div className="mt-1.5 flex flex-col gap-1" dir="ltr">
                  {CONTACT_INFO.mobiles.map((num) => (
                    <a
                      key={num}
                      href={`tel:${num}`}
                      className="font-mono text-sm text-white hover:text-amber-300 transition-colors tabular-nums w-fit"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  <span>{copy.founderSection.whatsappLabel}</span>
                </div>
                <div className="mt-1.5 space-y-2">
                  <div dir="ltr" className="font-mono text-sm text-white tabular-nums">
                    {CONTACT_INFO.whatsappNumber}
                  </div>
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-md transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{copy.founderSection.whatsappCta}</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />
                  <span>{copy.founderSection.emailLabel}</span>
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  dir="ltr"
                  className="mt-1.5 inline-block font-mono text-sm text-amber-200 hover:underline break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              {/* Official Domain & WordPress Website */}
              <div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />
                  <span>{copy.founderSection.blogLabel}</span>
                </div>
                <div className="mt-1.5 flex flex-col gap-1">
                  <a
                    href={CONTACT_INFO.officialDomainUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-amber-300 hover:underline break-all w-fit"
                  >
                    <span>{CONTACT_INFO.officialDomainHost}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                  <a
                    href={CONTACT_INFO.wordpressUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-200/90 hover:underline break-all w-fit"
                  >
                    <span>amjedaraki.wordpress.com</span>
                    <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                  </a>
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  {copy.founderSection.languagesValue}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Box with Share Link */}
        <LocationMapBox lang={lang} copy={copy} quotaExceeded={quotaExceeded} />
      </div>
    </section>
  );
}
