import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

const TutoringHubPage = () => {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Korepetycje z programowania',
    provider: {
      '@type': 'Person',
      name: 'Dawid Czyżewski',
      url: 'https://dawid-developer.pl',
      email: 'kontakt@dawid-developer.pl',
    },
    areaServed: 'PL',
    url: 'https://dawid-developer.pl/korepetycje',
    description:
      'Korepetycje online z programowania: PHP, React, Python, Flutter, HTML/CSS, Git i SQL.',
  };

  return (
    <main className="tutoring-page">
      <JsonLd data={serviceLd} />
      <section className="tutoring-hero">
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container">
          <p className="section-kicker">KOREPETYCJE</p>
          <h1 className="tutoring-title">
            Uczę tego, czym zajmuję się na co dzień
          </h1>
          <p className="tutoring-lead">
            Prowadzę korepetycje z programowania online. Napisz do mnie i umówimy pierwszą lekcję.
          </p>
          <div className="tutoring-cards tutoring-cards-single">
            <Link href="/korepetycje/programowanie" className="tutoring-card">
              <BookOpen size={22} />
              <strong>Programowanie</strong>
              <span>PHP/Symfony, React, Python, Flutter, HTML/CSS, Git, SQL</span>
              <em>
                Zobacz szczegóły <ArrowRight size={16} />
              </em>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TutoringHubPage;
