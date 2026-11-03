'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Award,
  BriefcaseBusiness,
  CheckCheck,
  FlaskConical,
  GraduationCap,
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
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import CertificatesSection from './CertificatesSection';
import { getCertificates } from '@/data/certificates';
import { getExperience } from '@/data/experience';
import { getEducation } from '@/data/education';
import type { IconComponent } from '@/types';

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

const ALLOWED_TABS = new Set(['skills', 'experience', 'education', 'certificates']);

const AboutTabs = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [activeTab, setActiveTab] = useState('skills');

  useEffect(() => {
    const tab = new URLSearchParams(window.location.search).get('tab');
    if (tab && ALLOWED_TABS.has(tab)) {
      setActiveTab(tab);
    }
  }, []);

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

        {activeTab === 'experience' && <ExperienceSection experience={experience} />}
        {activeTab === 'education' && <EducationSection education={education} />}
        {activeTab === 'certificates' && (
          <CertificatesSection
            certificates={certificatesData}
            downloadText={t('downloadCertificate')}
            onDownload={handleDownload}
          />
        )}
      </div>
    </section>
  );
};

export default AboutTabs;
