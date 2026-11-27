import {
  APILoadingStatus,
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map as GoogleMap,
  Pin,
  useAdvancedMarkerRef,
  useApiLoadingStatus,
} from '@vis.gl/react-google-maps';
import { Check, Copy, ExternalLink, MapPin, Share2 } from 'lucide-react';
import { useCallback, useState } from 'react';
import { CONTACT_INFO } from '../data/contact';
import { UiCopy } from '../data/translations';
import { LanguageCode } from '../types/i18n';

interface LocationMapBoxProps {
  lang: LanguageCode;
  copy: UiCopy;
  quotaExceeded: boolean;
}

const MAPS_API_KEY = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined)?.trim() || '';

function LiveGoogleMapCanvas({
  copy,
  quotaExceeded,
}: {
  copy: UiCopy;
  quotaExceeded: boolean;
}) {
  const apiStatus = useApiLoadingStatus();
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoOpen, setInfoOpen] = useState(true);

  const handleMarkerClick = useCallback(() => {
    setInfoOpen(true);
  }, []);

  const hasApiError =
    quotaExceeded ||
    apiStatus === APILoadingStatus.FAILED ||
    apiStatus === APILoadingStatus.AUTH_FAILURE;

  if (hasApiError) {
    return <MapFallbackPanel copy={copy} />;
  }

  return (
    <div className="h-[340px] sm:h-[380px] w-full relative">
      <GoogleMap
        defaultCenter={CONTACT_INFO.mapCoordinates}
        defaultZoom={17}
        mapId="DEMO_MAP_ID"
        gestureHandling="cooperative"
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        className="w-full h-full"
      >
        <AdvancedMarker
          ref={markerRef}
          position={CONTACT_INFO.mapCoordinates}
          onClick={handleMarkerClick}
          title={copy.founderSection.mapBox.placeLabel}
        >
          <Pin
            background="#B4832C"
            borderColor="#0B1324"
            glyphColor="#FFFFFF"
          />
        </AdvancedMarker>

        {infoOpen && marker && (
          <InfoWindow
            anchor={marker}
            maxWidth={270}
            onCloseClick={() => setInfoOpen(false)}
          >
            <div className="text-slate-900 space-y-1.5 p-1">
              <div className="text-sm font-bold text-[#0B1324]">
                {copy.founderSection.mapBox.placeLabel}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {copy.founderSection.addressLine}
              </p>
              <a
                href={CONTACT_INFO.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#8F6314] hover:underline pt-1"
              >
                <span>{copy.founderSection.mapBox.openInMaps}</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

function MapFallbackPanel({ copy }: { copy: UiCopy }) {
  return (
    <div className="h-[340px] sm:h-[380px] w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0F1B33] via-[#132240] to-[#0B1324] text-slate-100 px-6 text-center">
      <div className="w-12 h-12 rounded-full bg-amber-300/15 border border-amber-300/40 flex items-center justify-center mb-4">
        <MapPin className="w-6 h-6 text-amber-300" aria-hidden="true" />
      </div>
      <h4 className="text-base sm:text-lg font-bold text-white max-w-lg">
        {copy.founderSection.mapBox.placeLabel}
      </h4>
      <p className="mt-2 text-sm text-slate-300 max-w-xl leading-relaxed">
        {copy.founderSection.addressLine}
      </p>
      <p className="mt-2 text-xs text-slate-400 max-w-md">
        {copy.founderSection.mapBox.fallbackNote}
      </p>
      <a
        href={CONTACT_INFO.googleMapsShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0B1324] bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors"
      >
        <span>{copy.founderSection.mapBox.openInMaps}</span>
        <ExternalLink className="w-4 h-4" aria-hidden="true" />
      </a>
    </div>
  );
}

export function LocationMapBox({ lang, copy, quotaExceeded }: LocationMapBoxProps) {
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.googleMapsShareUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2500);
    } catch {
      setLinkCopied(false);
    }
  };

  const handleShareLink = async () => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: copy.founderSection.mapBox.placeLabel,
          text: copy.founderSection.addressLine,
          url: CONTACT_INFO.googleMapsShareUrl,
        });
        return;
      } catch {
        // Fallback to copying link
      }
    }
    await handleCopyLink();
  };

  return (
    <div className="mt-10 rounded-xl overflow-hidden border border-slate-700/80 bg-[#121D35]">
      <div className="p-5 sm:p-6 border-b border-slate-700/80 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-300 shrink-0" aria-hidden="true" />
            <span>{copy.founderSection.mapBox.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            {copy.founderSection.mapBox.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={handleShareLink}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B1324] bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{copy.founderSection.mapBox.shareLink}</span>
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-100 bg-[#0B1324] hover:bg-slate-800 border border-slate-600 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-300"
          >
            {linkCopied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
            ) : (
              <Copy className="w-3.5 h-3.5" aria-hidden="true" />
            )}
            <span>
              {linkCopied
                ? copy.founderSection.mapBox.linkCopied
                : copy.founderSection.mapBox.copyLink}
            </span>
          </button>

          <a
            href={CONTACT_INFO.googleMapsShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-100 bg-[#0B1324] hover:bg-slate-800 border border-slate-600 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-amber-300"
          >
            <span>{copy.founderSection.mapBox.openInMaps}</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {MAPS_API_KEY && !quotaExceeded ? (
        <APIProvider
          apiKey={MAPS_API_KEY}
          libraries={['marker']}
          language={lang}
          region="EG"
        >
          <LiveGoogleMapCanvas copy={copy} quotaExceeded={quotaExceeded} />
        </APIProvider>
      ) : (
        <MapFallbackPanel copy={copy} />
      )}

      <div className="px-5 py-3 bg-[#0B1324] border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className="text-slate-400">{copy.founderSection.addressLine}</span>
        <a
          href={CONTACT_INFO.googleMapsShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          dir="ltr"
          className="font-mono text-amber-300 hover:underline truncate max-w-full"
        >
          {CONTACT_INFO.googleMapsShareUrl}
        </a>
      </div>
    </div>
  );
}
