import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Globe,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { CONTACT_INFO } from '../data/contact';
import { SERVICES } from '../data/services';
import { LANGUAGE_OPTIONS, UiCopy } from '../data/translations';
import { LanguageCode } from '../types/i18n';

interface ConsultationFormProps {
  lang: LanguageCode;
  copy: UiCopy;
  preselectedServiceId: string;
}

interface SubmittedReceipt {
  reference: string;
  fullName: string;
  contactInfo: string;
  preferredLang: LanguageCode;
  deliveryMode: 'remote' | 'office';
  serviceTitle: string;
  brief: string;
}

export function ConsultationForm({
  lang,
  copy,
  preselectedServiceId,
}: ConsultationFormProps) {
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [preferredLang, setPreferredLang] = useState<LanguageCode>(lang);
  const [deliveryMode, setDeliveryMode] = useState<'remote' | 'office'>('remote');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(preselectedServiceId || 'general');
  const [brief, setBrief] = useState('');
  const [errors, setErrors] = useState<{ name?: string; contact?: string; brief?: string }>({});
  const [receipt, setReceipt] = useState<SubmittedReceipt | null>(null);
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  useEffect(() => {
    setPreferredLang(lang);
  }, [lang]);

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServiceId(preselectedServiceId);
      setReceipt(null);
    }
  }, [preselectedServiceId]);

  const validateContact = (value: string): boolean => {
    const trimmed = value.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    const digitsOnly = trimmed.replace(/[^\d]/g, '');
    const isPhone = digitsOnly.length >= 7;
    return isEmail || isPhone;
  };

  const resolveServiceTitle = (id: string) => {
    if (id === 'general') {
      return copy.contactSection.labels.generalConsultation;
    }
    const found = SERVICES.find((s) => s.id === id);
    return found ? `${found.index}. ${found.title[lang]}` : copy.contactSection.labels.generalConsultation;
  };

  const buildReceiptText = (r: SubmittedReceipt) => {
    const modeLabel =
      r.deliveryMode === 'remote'
        ? copy.contactSection.labels.remoteOption
        : copy.contactSection.labels.officeOption;
    const langLabel =
      LANGUAGE_OPTIONS.find((o) => o.code === r.preferredLang)?.nativeLabel || r.preferredLang;

    return [
      `Amjoid AI Market — Dr. Amjed El Araki`,
      `${copy.contactSection.confirmation.refLabel}: ${r.reference}`,
      `${copy.contactSection.labels.fullName}: ${r.fullName}`,
      `${copy.contactSection.labels.contactInfo}: ${r.contactInfo}`,
      `${copy.contactSection.confirmation.summaryService}: ${r.serviceTitle}`,
      `${copy.contactSection.confirmation.summaryMode}: ${modeLabel}`,
      `${copy.contactSection.confirmation.summaryLang}: ${langLabel}`,
      `${copy.contactSection.labels.projectBrief}: ${r.brief}`,
    ].join('\n');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; contact?: string; brief?: string } = {};

    if (!fullName.trim()) {
      nextErrors.name = copy.contactSection.errors.nameRequired;
    }
    if (!contactInfo.trim()) {
      nextErrors.contact = copy.contactSection.errors.contactRequired;
    } else if (!validateContact(contactInfo)) {
      nextErrors.contact = copy.contactSection.errors.contactInvalid;
    }
    if (!brief.trim()) {
      nextErrors.brief = copy.contactSection.errors.briefRequired;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    const code = `AMJ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceipt({
      reference: code,
      fullName: fullName.trim(),
      contactInfo: contactInfo.trim(),
      preferredLang,
      deliveryMode,
      serviceTitle: resolveServiceTitle(selectedServiceId),
      brief: brief.trim(),
    });
  };

  const handleReset = () => {
    setFullName('');
    setContactInfo('');
    setBrief('');
    setSelectedServiceId('general');
    setErrors({});
    setReceipt(null);
  };

  const handleCopyReceipt = async () => {
    if (!receipt) return;
    try {
      await navigator.clipboard.writeText(buildReceiptText(receipt));
      setCopiedReceipt(true);
      setTimeout(() => setCopiedReceipt(false), 2500);
    } catch {
      setCopiedReceipt(false);
    }
  };

  const whatsappReceiptHref = receipt
    ? `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(buildReceiptText(receipt))}`
    : CONTACT_INFO.whatsappUrl;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <p className="text-xs sm:text-sm font-semibold text-[#8F6314] tracking-wide">
            {copy.contactSection.kicker}
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0B1324] leading-tight">
            {copy.contactSection.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            {copy.contactSection.subtitle}
          </p>
        </div>

        {/* Direct Channels Strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl text-sm">
          <div>
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#8F6314]" aria-hidden="true" />
              <span>{copy.founderSection.mobileLabel}</span>
            </div>
            <div className="mt-1.5 flex flex-col gap-0.5" dir="ltr">
              {CONTACT_INFO.mobiles.map((num) => (
                <a
                  key={num}
                  href={`tel:${num}`}
                  className="font-mono text-xs sm:text-sm font-semibold text-[#0B1324] hover:text-[#8F6314] tabular-nums"
                >
                  {num}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
              <span>{copy.founderSection.whatsappLabel}</span>
            </div>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-emerald-800 hover:underline tabular-nums"
            >
              <span>{CONTACT_INFO.whatsappNumber}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>

          <div>
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#8F6314]" aria-hidden="true" />
              <span>{copy.founderSection.emailLabel}</span>
            </div>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              dir="ltr"
              className="mt-1.5 inline-block font-mono text-xs sm:text-sm font-semibold text-[#0B1324] hover:text-[#8F6314] break-all"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          <div>
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#8F6314]" aria-hidden="true" />
              <span>{copy.founderSection.blogLabel}</span>
            </div>
            <a
              href={CONTACT_INFO.wordpressUrl}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="mt-1.5 inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#0B1324] hover:text-[#8F6314] break-all"
            >
              <span>amjedaraki.wordpress.com</span>
              <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        {receipt ? (
          <div className="mt-8 p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-xl space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold text-[#0B1324]">
                  {copy.contactSection.confirmation.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {copy.contactSection.confirmation.subtitle}
                </p>
              </div>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-sm">
              <div>
                <dt className="text-xs text-slate-500">{copy.contactSection.confirmation.refLabel}</dt>
                <dd className="mt-1 font-mono font-semibold text-[#0B1324] tabular-nums">
                  {receipt.reference}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">{copy.contactSection.labels.fullName}</dt>
                <dd className="mt-1 font-semibold text-slate-900">{receipt.fullName}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs text-slate-500">{copy.contactSection.confirmation.summaryService}</dt>
                <dd className="mt-1 font-semibold text-slate-900">{receipt.serviceTitle}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">{copy.contactSection.confirmation.summaryMode}</dt>
                <dd className="mt-1 text-slate-800">
                  {receipt.deliveryMode === 'remote'
                    ? copy.contactSection.labels.remoteOption
                    : copy.contactSection.labels.officeOption}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">{copy.contactSection.confirmation.summaryLang}</dt>
                <dd className="mt-1 text-slate-800">
                  {LANGUAGE_OPTIONS.find((o) => o.code === receipt.preferredLang)?.nativeLabel}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs text-slate-500">{copy.contactSection.labels.projectBrief}</dt>
                <dd className="mt-1 text-slate-700 whitespace-pre-line">{receipt.brief}</dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
              <a
                href={whatsappReceiptHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>{copy.contactSection.confirmation.sendWhatsapp}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={handleCopyReceipt}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0B1324] hover:bg-[#162340] rounded-lg transition-colors cursor-pointer"
              >
                {copiedReceipt ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>
                  {copiedReceipt
                    ? copy.contactSection.confirmation.copiedReceipt
                    : copy.contactSection.confirmation.copyReceipt}
                </span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:border-slate-500 rounded-lg transition-colors cursor-pointer"
              >
                {copy.contactSection.confirmation.newRequest}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-semibold text-[#0B1324] mb-2">
                  {copy.contactSection.labels.fullName}
                </label>
                <input
                  id="full-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={copy.contactSection.labels.fullNamePlaceholder}
                  aria-invalid={Boolean(errors.name)}
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:border-[#0B1324] focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-info" className="block text-sm font-semibold text-[#0B1324] mb-2">
                  {copy.contactSection.labels.contactInfo}
                </label>
                <input
                  id="contact-info"
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder={copy.contactSection.labels.contactInfoPlaceholder}
                  aria-invalid={Boolean(errors.contact)}
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:border-[#0B1324] focus:outline-none"
                />
                {errors.contact && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.contact}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service-select" className="block text-sm font-semibold text-[#0B1324] mb-2">
                  {copy.contactSection.labels.selectedService}
                </label>
                <select
                  id="service-select"
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:border-[#0B1324] focus:outline-none"
                >
                  <option value="general">{copy.contactSection.labels.generalConsultation}</option>
                  {SERVICES.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.index}. {service.title[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="block text-sm font-semibold text-[#0B1324] mb-2">
                  {copy.contactSection.labels.preferredLanguage}
                </span>
                <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-lg">
                  {LANGUAGE_OPTIONS.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      onClick={() => setPreferredLang(opt.code)}
                      className={`py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        preferredLang === opt.code
                          ? 'bg-[#0B1324] text-white'
                          : 'text-slate-700 hover:bg-white'
                      }`}
                    >
                      {opt.nativeLabel}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <span className="block text-sm font-semibold text-[#0B1324] mb-2">
                {copy.contactSection.labels.deliveryMode}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryMode('remote')}
                  aria-pressed={deliveryMode === 'remote'}
                  className={`px-4 py-3 text-sm font-semibold rounded-lg border text-start transition-colors cursor-pointer ${
                    deliveryMode === 'remote'
                      ? 'bg-[#0B1324] text-white border-[#0B1324]'
                      : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-[#0B1324]'
                  }`}
                >
                  {copy.contactSection.labels.remoteOption}
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryMode('office')}
                  aria-pressed={deliveryMode === 'office'}
                  className={`px-4 py-3 text-sm font-semibold rounded-lg border text-start transition-colors cursor-pointer ${
                    deliveryMode === 'office'
                      ? 'bg-[#0B1324] text-white border-[#0B1324]'
                      : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-[#0B1324]'
                  }`}
                >
                  {copy.contactSection.labels.officeOption}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="project-brief" className="block text-sm font-semibold text-[#0B1324] mb-2">
                {copy.contactSection.labels.projectBrief}
              </label>
              <textarea
                id="project-brief"
                rows={4}
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder={copy.contactSection.labels.projectBriefPlaceholder}
                aria-invalid={Boolean(errors.brief)}
                className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:border-[#0B1324] focus:outline-none"
              />
              {errors.brief && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.brief}</span>
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#0B1324] hover:bg-[#162340] rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4832C]"
              >
                {copy.contactSection.labels.submitBtn}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:border-slate-500 rounded-lg transition-colors cursor-pointer"
              >
                {copy.contactSection.labels.resetBtn}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
