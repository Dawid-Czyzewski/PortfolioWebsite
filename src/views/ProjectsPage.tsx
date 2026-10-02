'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Rocket } from 'lucide-react';
import mainPagePhotoAnkietDev from '../assets/ankietDev/mainPage.png';
import mainPagePhotoNeoCasino from '../assets/neoCasino/mainPage.png';
import mainPagePhotoDevLink from '../assets/devLink/mainPage.png';
import mainPagePhotoTrackerPro from '../assets/trackerPro/dashboard.png';
import aniaBeautyPlaceholder from '../assets/aniaBeauty/mainPage.png';
import pirateHeroPlaceholder from '../assets/pirateHero/mainPage.png';
import eventlyPlaceholder from '../assets/evently/mainPage.png';
import { imageSrc } from '../lib/image';

const projects = [
  {
    title: 'Evently',
    technologies: ['TypeScript', 'Next.js', 'React', 'Laravel', 'Tailwind'],
    image: eventlyPlaceholder,
    to: '/project/evently',
  },
  {
    title: 'PirateHero',
    technologies: ['TypeScript', 'React', 'Symfony', 'API Platform', 'Tailwind'],
    image: pirateHeroPlaceholder,
    to: '/project/pirateHero',
  },
  {
    title: 'Ania Beauty Studio',
    technologies: ['TypeScript', 'React', 'Laravel', 'Tailwind'],
    image: aniaBeautyPlaceholder,
    to: '/project/aniaBeauty',
  },
  {
    title: 'TrackerPro',
    technologies: ['TypeScript', 'React', 'Symfony', 'Docker', 'PHPUnit'],
    image: mainPagePhotoTrackerPro,
    to: '/project/trackerPro',
  },
  {
    title: 'DevLink',
    technologies: ['PHP', 'React', 'Tailwind', 'MySQL', 'JavaScript'],
    image: mainPagePhotoDevLink,
    to: '/project/devLink',
  },
  {
    title: 'NeoCasino',
    technologies: ['React', 'CSS', 'HTML', 'JavaScript'],
    image: mainPagePhotoNeoCasino,
    to: '/project/neoCasino',
  },
  {
    title: 'AnkietDev',
    technologies: ['PHP', 'React', 'Tailwind', 'MySQL', 'JavaScript'],
    image: mainPagePhotoAnkietDev,
    to: '/project/ankietDev',
  },
];

type ArrowDir = 'left' | 'right' | 'up' | 'down' | null;
type StepDir = 'left' | 'right' | 'down' | null;

type SnakeCell = {
  row: number;
  col: number;
  arrow: ArrowDir;
};

function projectColumns(width: number): number {
  if (width <= 700) return 1;
  if (width <= 1100) return 2;
  return 3;
}

function snakeLayout(count: number, cols: number): SnakeCell[] {
  const cells: SnakeCell[] = [];
  const forward: StepDir[] = [];
  let row = 0;
  let col = 0;
  let dir = 1;
  for (let i = 0; i < count; i += 1) {
    let step: StepDir = null;
    if (i < count - 1) {
      const nextCol = col + dir;
      if (nextCol < 0 || nextCol >= cols) step = 'down';
      else step = dir === 1 ? 'right' : 'left';
    }
    cells.push({ row: row + 1, col: col + 1, arrow: null });
    forward.push(step);
    if (step === 'down') {
      row += 1;
      dir *= -1;
    } else if (step) {
      col += dir;
    }
  }
  const back: Record<Exclude<StepDir, null>, Exclude<ArrowDir, null>> = {
    right: 'left',
    left: 'right',
    down: 'up',
  };
  for (let i = 0; i < count - 1; i += 1) {
    const fwd = forward[i];
    if (fwd !== null) {
      cells[i + 1].arrow = back[fwd];
    }
  }
  return cells;
}

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [titleLead, ...titleRest] = t('projectsTitle').split(' ');
  const titleAccent = titleRest.join(' ');
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const update = () => setColumns(projectColumns(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const layout = snakeLayout(projects.length, columns);

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container">
          <div className="projects-head reveal">
            <p className="section-kicker">{t('projects').toUpperCase()}</p>
            <h1 className="projects-title">
              <span>{titleLead}</span>
              {titleAccent && <span className="projects-title-accent">{titleAccent}</span>}
            </h1>
            <p className="projects-intro">{t('projectsDescription')}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                className={`project-step${layout[index].arrow ? ` arrow-${layout[index].arrow}` : ''}`}
                key={project.title}
                style={{ gridColumn: layout[index].col, gridRow: layout[index].row }}
              >
              <Link
                href={project.to}
                className="project-card reveal reveal-fast"
                style={{ '--d': index }}
              >
                <div className="project-media">
                  <img src={imageSrc(project.image)} alt={project.title} />
                </div>
                <div className="project-body">
                  <h2>{project.title}</h2>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <span className="project-open">
                    {t('projectsView')} <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
              </div>
            ))}
          </div>

          <div className="projects-soon reveal" style={{ '--d': 4 }}>
            <div>
              <h2>{t('projectsComingSoon')}</h2>
              <p>{t('projectsComingSoonDescription')}</p>
            </div>
            <Link href="/contact" className="primary-button">
              <Rocket size={18} /> {t('projectsContactMe')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
