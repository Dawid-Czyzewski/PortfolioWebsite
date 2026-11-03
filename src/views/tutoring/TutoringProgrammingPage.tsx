import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

const faq = [
  {
    q: 'Dla kogo są te korepetycje?',
    a: 'Dla uczniów, studentów i osób zmieniających branżę. Od kompletnych podstaw po poziom junior/mid. Tempo dopasowuję do Ciebie.',
  },
  {
    q: 'Jak wygląda lekcja?',
    a: 'Online na Google Meet albo Discordzie. Wspólnie piszemy kod, tłumaczę „dlaczego”, a nie tylko „jak kliknąć”. Po lekcji dostajesz notatki albo zadania domowe, jeśli tego chcesz.',
  },
  {
    q: 'Czego mogę się nauczyć?',
    a: 'PHP/Symfony, JavaScript/React, Python, Flutter, HTML/CSS, Git i SQL. Możemy też przejść Twoje zadanie z uczelni albo przygotować Cię do rozmowy o pracę.',
  },
  {
    q: 'Ile kosztuje lekcja i jak długo trwa?',
    a: '[DO UZUPEŁNIENIA: cena za lekcję] · [DO UZUPEŁNIENIA: długość lekcji, np. 60/90 min]',
  },
  {
    q: 'Jak odwołać lub przełożyć lekcję?',
    a: '[DO UZUPEŁNIENIA: zasady odwołania i przełożenia]',
  },
];

const TutoringProgrammingPage = () => {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Korepetycje z programowania',
    serviceType: 'Programming tutoring',
    provider: {
      '@type': 'Person',
      name: 'Dawid Czyżewski',
      url: 'https://dawid-developer.pl',
      email: 'kontakt@dawid-developer.pl',
    },
    areaServed: 'PL',
    url: 'https://dawid-developer.pl/korepetycje/programowanie',
    description:
      'Korepetycje online z PHP/Symfony, React, Python, Flutter, HTML/CSS, Git i SQL.',
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <main className="tutoring-page">
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
      <section className="tutoring-hero">
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container tutoring-layout">
          <div>
            <p className="section-kicker">KOREPETYCJE · PROGRAMOWANIE</p>
            <h1 className="tutoring-title">
              Nauczę Cię programować tak, jak sam pracuję na co dzień
            </h1>
            <p className="tutoring-lead">
              Od 4 lat programuję komercyjnie. Na lekcjach nie lecimy suchą teorią z slajdów.
              Otwieramy edytor i piszemy kod razem. Online, na Google Meet albo Discordzie.
            </p>
            <div className="tutoring-actions">
              <Link href="/contact" className="primary-button">
                Umów lekcję <ArrowRight size={18} />
              </Link>
              <Link href="/korepetycje" className="secondary-button">
                Wszystkie korepetycje
              </Link>
            </div>
          </div>

          <aside className="tutoring-panel">
            <p className="tutoring-panel-label">W skrócie</p>
            <ul>
              <li><Check size={16} /> Online · Meet / Discord</li>
              <li><Check size={16} /> Piszemy kod na żywo</li>
              <li><Check size={16} /> PHP, React, Python, Flutter</li>
              <li><Check size={16} /> Godziny: [DO UZUPEŁNIENIA]</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="tutoring-section">
        <div className="container tutoring-grid">
          <article>
            <h2>Dla kogo</h2>
            <p>
              Dla osób, które chcą zacząć programować, nadrobić zaległości ze studiów albo
              ogarnąć konkretną technologię pod pracę. Nie musisz mieć doświadczenia.
              Wystarczy chęć i regularność.
            </p>
          </article>
          <article>
            <h2>Jak wyglądają lekcje</h2>
            <p>
              Spotykamy się online. Ty masz swój komputer, ja swój. Wspólnie piszemy kod,
              debugujemy, tłumaczę koncepty na przykładach. Mogę też przejrzeć Twój projekt
              albo przygotować Cię do rozmowy technicznej.
            </p>
          </article>
          <article>
            <h2>Czego uczę</h2>
            <ul className="tutoring-list">
              <li>PHP i Symfony</li>
              <li>JavaScript i React</li>
              <li>Python</li>
              <li>Flutter</li>
              <li>HTML, CSS, Git, SQL</li>
            </ul>
          </article>
          <article>
            <h2>Cennik</h2>
            <p>
              Cena: <strong>[DO UZUPEŁNIENIA]</strong>
              <br />
              Długość lekcji: <strong>[DO UZUPEŁNIENIA]</strong>
              <br />
              Pakiety / zniżki: <strong>[DO UZUPEŁNIENIA]</strong>
            </p>
          </article>
        </div>
      </section>

      <section className="tutoring-section tutoring-faq">
        <div className="container">
          <h2>Najczęstsze pytania</h2>
          <div className="tutoring-faq-list">
            {faq.map((item) => (
              <details key={item.q} className="tutoring-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <div className="tutoring-actions" style={{ marginTop: 28 }}>
            <Link href="/contact" className="primary-button">
              Napisz i umówimy termin <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TutoringProgrammingPage;
