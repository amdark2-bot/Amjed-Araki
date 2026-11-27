import { Download, FileText } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';
import { LANGUAGE_OPTIONS, UiCopy } from '../data/translations';
import { LanguageCode } from '../types/i18n';

interface FooterProps {
  lang: LanguageCode;
  copy: UiCopy;
  onChangeLang: (code: LanguageCode) => void;
}

export function Footer({ lang, copy, onChangeLang }: FooterProps) {
  const isStandaloneExport =
    typeof window !== 'undefined' &&
    Boolean((window as unknown as { __IS_STANDALONE_EXPORT__?: boolean }).__IS_STANDALONE_EXPORT__);

  return (
    <footer className="bg-slate-50 text-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-2">
            <div className="font-editorial text-xl font-bold text-[#0B1324]">
              {copy.brandTitleFull}
            </div>
            <p className="text-sm font-medium text-slate-600">{copy.footer.tagline}</p>
            <p className="text-xs text-slate-500">{copy.footer.addressShort}</p>

            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600">
              <a
                href={`tel:${CONTACT_INFO.mobiles[0]}`}
                dir="ltr"
                className="font-mono hover:text-[#0B1324] tabular-nums"
              >
                {CONTACT_INFO.mobiles[0]}
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`tel:${CONTACT_INFO.mobiles[1]}`}
                dir="ltr"
                className="font-mono hover:text-[#0B1324] tabular-nums"
              >
                {CONTACT_INFO.mobiles[1]}
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="font-mono text-emerald-800 hover:underline tabular-nums"
              >
                WhatsApp {CONTACT_INFO.whatsappNumber}
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                dir="ltr"
                className="font-mono hover:text-[#0B1324]"
              >
                {CONTACT_INFO.email}
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={CONTACT_INFO.officialDomainUrl}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="font-mono font-semibold text-[#0B1324] hover:underline"
              >
                {CONTACT_INFO.officialDomainHost}
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={CONTACT_INFO.wordpressUrl}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="font-mono hover:text-[#0B1324] hover:underline"
              >
                amjedaraki.wordpress.com
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={CONTACT_INFO.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#8F6314] hover:underline"
              >
                Google Maps
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-3 shrink-0">
            <div className="flex flex-wrap items-center gap-2">
              {LANGUAGE_OPTIONS.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => onChangeLang(option.code)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                    lang === option.code
                      ? 'bg-[#0B1324] text-white border-[#0B1324]'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {option.nativeLabel}
                </button>
              ))}
            </div>

            {!isStandaloneExport && (
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="/amjoid-ai-market.html"
                  download="amjoid-ai-market.html"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#0B1324] bg-white border border-slate-300 hover:border-[#0B1324] rounded-lg transition-colors whitespace-nowrap shrink-0 w-fit"
                >
                  <Download className="w-3.5 h-3.5 text-[#8F6314]" aria-hidden="true" />
                  <span>{copy.footer.downloadHtmlLabel}</span>
                </a>
                <a
                  href="/amjoid-ai-market-prompt.txt"
                  download="amjoid-ai-market-prompt.txt"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#0B1324] bg-white border border-slate-300 hover:border-[#0B1324] rounded-lg transition-colors whitespace-nowrap shrink-0 w-fit"
                >
                  <FileText className="w-3.5 h-3.5 text-[#8F6314]" aria-hidden="true" />
                  <span>{copy.footer.downloadPromptLabel}</span>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>{copy.footer.copyright}</p>
          <p>{copy.footer.availableNote}</p>
        </div>
      </div>
    </footer>
  );
}
