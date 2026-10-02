'use client';

import { Award, BriefcaseBusiness, Download, Languages, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FaPhp, FaPython, FaWordpress } from 'react-icons/fa';
import { SiDjango, SiFlask } from 'react-icons/si';
import type { Certificate, IconComponent } from '../../types';

const icons: Record<number, { Icon: IconComponent; color: string }> = {
  1: { Icon: Languages, color: '#60a5fa' },
  2: { Icon: BriefcaseBusiness, color: '#c4b5fd' },
  3: { Icon: FaPython as IconComponent, color: '#facc15' },
  4: { Icon: FaPhp as IconComponent, color: '#a78bfa' },
  5: { Icon: FaPython as IconComponent, color: '#facc15' },
  6: { Icon: FaWordpress as IconComponent, color: '#93c5fd' },
  7: { Icon: SiDjango as IconComponent, color: '#4ade80' },
  8: { Icon: SiFlask as IconComponent, color: '#e2e8f0' },
  9: { Icon: Server, color: '#7dd3fc' },
};

type CertificatesSectionProps = {
  certificates: Certificate[];
  downloadText: string;
  onDownload: (downloadUrl: string, fileName: string) => void;
};

const CertificatesSection = ({ certificates, downloadText, onDownload }: CertificatesSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="skills-content">
      <div className="skills-intro reveal">
        <p className="section-kicker">{t('aboutCertificatesHeading').toUpperCase()}</p>
        <h2>{t('aboutCertificatesIntroTitle')}</h2>
        <p>{t('aboutCertificatesIntro')}</p>
      </div>

      <div className="cert-grid">
        {certificates.map((cert, index) => {
          const { Icon, color } = icons[cert.id] || { Icon: Award, color: '#c4a0ff' };
          return (
            <article
              className="skill-card cert-card reveal reveal-fast"
              style={{ '--d': index }}
              key={cert.id}
            >
              <div className="skill-symbol" style={{ color }}>
                <Icon />
              </div>
              <strong>{cert.name}</strong>
              <small>{cert.issuer} · {cert.date}</small>
              {cert.description && <p className="cert-text">{cert.description}</p>}
              {cert.downloadUrl && (
                <button
                  type="button"
                  className="cert-download"
                  onClick={() => onDownload(cert.downloadUrl, cert.fileName)}
                >
                  <Download size={15} /> {downloadText}
                </button>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default CertificatesSection;
