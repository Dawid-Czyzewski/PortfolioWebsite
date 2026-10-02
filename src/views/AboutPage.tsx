'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCheck,
  Code2,
  FlaskConical,
  Folder,
  GraduationCap,
  Languages,
  MapPin,
  Rocket,
  Star,
  Workflow,
} from 'lucide-react';
import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaLinux,
  FaPhp,
  FaPython,
  FaReact,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiDart,
  SiDjango,
  SiFlutter,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiSpringboot,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
  SiWoocommerce,
} from 'react-icons/si';
import mainPhoto from '../assets/portrait-card.png';
import { imageSrc } from '../lib/image';
import ExperienceSection from '../components/about/ExperienceSection';
import EducationSection from '../components/about/EducationSection';
import CertificatesSection from '../components/about/CertificatesSection';
import { getCertificates } from '../data/certificates';
import { getExperience } from '../data/experience';
import { getEducation } from '../data/education';
import type { IconComponent } from '../types';
import type { ReactNode } from 'react';

const featuredSkills = [
  { name: 'PHP', use: 'skillPhp', Icon: FaPhp, color: '#a78bfa' },
  { name: 'Symfony', use: 'skillSymfony', Icon: SiSymfony, color: '#e2e8f0' },
  { name: 'Laravel', use: 'skillLaravel', Icon: SiLaravel, color: '#fb7185' },
  { name: 'Python', use: 'skillPython', Icon: FaPython, color: '#facc15' },
  { name: 'Django', use: 'skillDjango', Icon: SiDjango, color: '#4ade80' },
  { name: 'Java', use: 'skillJava', Icon: FaJava, color: '#fb923c' },
  { name: 'Spring Boot', use: 'skillSpring', Icon: SiSpringboot, color: '#4ade80' },
  { name: 'TypeScript', use: 'skillTypescript', Icon: SiTypescript, color: '#60a5fa' },
  { name: 'React', use: 'skillReact', Icon: FaReact, color: '#67e8f9' },
  { name: 'HTML', use: 'skillHtml', Icon: FaHtml5, color: '#fb923c' },
  { name: 'CSS', use: 'skillCss', Icon: FaCss3Alt, color: '#60a5fa' },
  { name: 'Tailwind', use: 'skillTailwind', Icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'PostgreSQL', use: 'skillPostgres', Icon: SiPostgresql, color: '#93c5fd' },
  { name: 'MySQL', use: 'skillMysql', Icon: SiMysql, color: '#7dd3fc' },
  { name: 'Redis', use: 'skillRedis', Icon: SiRedis, color: '#f87171' },
  { name: 'Docker', use: 'skillDocker', Icon: FaDocker, color: '#7dd3fc' },
  { name: 'Git', use: 'skillGit', Icon: FaGitAlt, color: '#fb7185' },
  { name: 'Linux', use: 'skillLinux', Icon: FaLinux, color: '#e2e8f0' },
  { name: 'PHPUnit', use: 'skillPhpunit', Icon: FlaskConical, color: '#c4b5fd' },
  { key: 'unitTests', use: 'skillUnitTests', Icon: CheckCheck, color: '#86efac' },
  { key: 'integrationTests', use: 'skillIntegrationTests', Icon: Workflow, color: '#a5b4fc' },
  { name: 'Flutter', use: 'skillFlutter', Icon: SiFlutter, color: '#38bdf8' },
  { name: 'Dart', use: 'skillDart', Icon: SiDart, color: '#22d3ee' },
  { name: 'WordPress', use: 'skillWordpress', Icon: FaWordpress, color: '#93c5fd' },
  { name: 'WooCommerce', use: 'skillWoocommerce', Icon: SiWoocommerce, color: '#c084fc' },
];

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const searchParams = useSearchParams();
  const lang = i18n.language;
  const tabFromUrl = searchParams?.get('tab') ?? null;
  const [activeTab, setActiveTab] = useState(tabFromUrl || 'skills');

  useEffect(() => {
    if (tabFromUrl) setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  const experience = getExperience(t, lang);
  const education = getEducation(t);
  const certificatesData = getCertificates(t);

  const handleDownload = (downloadUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main>
      <section className="about-hero">
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container about-grid">
          <div className="portrait-wrap reveal">
            <img className="portrait-photo" src={imageSrc(mainPhoto)} alt="Dawid Czyżewski" />
            <div className="portrait-decoration">
              <span>
                {t('aboutAnnotationPassion')
                  .split(',')
                  .map((part) => part.trim())
                  .join('\n')}
              </span>
              <svg className="portrait-arrow" viewBox="0 0 70 48" aria-hidden="true">
                <path d="M8 8c18 2 32 14 40 30" />
                <path d="M40 30l12 4-8 10" />
              </svg>
            </div>
          </div>

          <div className="about-copy">
            <p className="section-kicker reveal" style={{ '--d': 1 }}>{t('about').toUpperCase()}</p>
            <h1 className="reveal" style={{ '--d': 2 }}>
              {t('aboutGreetingPrefix')}
              <span> {t('aboutGreetingName')}</span>
            </h1>

            <p className="reveal" style={{ '--d': 3 }}>{t('aboutDescription')}</p>

            <div className="about-actions reveal" style={{ '--d': 4 }}>
              <Link href="/contact" className="primary-button">
                <Rocket size={18} /> {t('aboutContactMe')}
              </Link>
              <Link href="/projects" className="secondary-button">
                <Folder size={18} /> {t('heroProjectsCta')} <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <aside className="about-info reveal" style={{ '--d': 4 }}>
            <Info icon={<Code2 size={18} />} label={t('aboutInfoTech')} value={t('aboutInfoTechValue')} />
            <Info
              icon={<BriefcaseBusiness size={18} />}
              label={t('aboutInfoExperience')}
              value={t('aboutInfoExperienceValue')}
            />
            <Info icon={<MapPin size={18} />} label={t('aboutInfoLocation')} value={t('aboutInfoLocationValue')} />
            <Info
              icon={<Languages size={18} />}
              label={t('aboutInfoLanguages')}
              value={t('aboutInfoLanguagesValue')}
            />
            <div className="hand-note">{t('aboutAnnotationLearning')}</div>
          </aside>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <div className="tabs reveal">
            <button
              type="button"
              className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <span className="tab-icon"><Star size={15} /></span> {t('aboutSkills')}
            </button>
            <button
              type="button"
              className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <span className="tab-icon"><BriefcaseBusiness size={15} /></span> {t('aboutExperienceTitle')}
            </button>
            <button
              type="button"
              className={`tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <span className="tab-icon"><GraduationCap size={15} /></span> {t('aboutEducationTitle')}
            </button>
            <button
              type="button"
              className={`tab ${activeTab === 'certificates' ? 'active' : ''}`}
              onClick={() => setActiveTab('certificates')}
            >
              <span className="tab-icon"><Award size={15} /></span> {t('aboutCertificatesTitle')}
            </button>
          </div>

          {activeTab === 'skills' && (
            <div className="skills-content">
              <div className="skills-intro reveal">
                <p className="section-kicker">{t('aboutSkillsHeading').toUpperCase()}</p>
                <h2>{t('aboutSkillsIntroTitle')}</h2>
                <p>{t('aboutSkillsIntro')}</p>
              </div>

              <div className="skills-grid">
                {featuredSkills.map(({ name, key, use, Icon, color }, index) => {
                  const SkillIcon = Icon as IconComponent;
                  return (
                  <div className="skill-card reveal reveal-fast" style={{ '--d': index }} key={name || key}>
                    <div className="skill-symbol" style={{ color }}>
                      <SkillIcon />
                    </div>
                    <strong>{name ?? (key ? t(key) : '')}</strong>
                    <small>{t(use)}</small>
                  </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <ExperienceSection experience={experience} />
          )}

          {activeTab === 'education' && (
            <EducationSection education={education} />
          )}

          {activeTab === 'certificates' && (
            <CertificatesSection
              certificates={certificatesData}
              downloadText={t('downloadCertificate')}
              onDownload={handleDownload}
            />
          )}
        </div>
      </section>
    </main>
  );
};

type InfoProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

function Info({ icon, label, value }: InfoProps) {
  return (
    <div className="info-row">
      <div className="info-icon">{icon}</div>
      <div>
        <small>{label}</small>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export default AboutPage;
