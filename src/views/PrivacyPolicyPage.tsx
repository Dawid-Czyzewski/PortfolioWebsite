import Link from 'next/link';

const PrivacyPolicyPage = () => (
  <main className="legal-page">
    <section className="legal-hero">
      <div className="container legal-content">
        <p className="section-kicker">DOKUMENTY</p>
        <h1>Polityka prywatności</h1>
        <p className="legal-updated">Ostatnia aktualizacja: 3 listopada 2026</p>

        <h2>1. Administrator danych</h2>
        <p>
          Administratorem danych osobowych jest Dawid Czyżewski.
          Kontakt: <a href="mailto:kontakt@dawid-developer.pl">kontakt@dawid-developer.pl</a>.
        </p>

        <h2>2. Jakie dane zbieram i po co</h2>
        <p>W zależności od tego, jak korzystasz ze strony, mogę przetwarzać:</p>
        <ul>
          <li>
            adres e-mail oraz treść wiadomości, gdy napiszesz do mnie w sprawie projektu
            albo korepetycji (podstawa: art. 6 ust. 1 lit. b lub f RODO),
          </li>
          <li>
            dane techniczne (adres IP, typ przeglądarki, strony odwiedzone) w logach
            serwera i, po Twojej zgodzie, w Google Analytics (podstawa: art. 6 ust. 1 lit. f
            albo a RODO),
          </li>
          <li>
            wybór dotyczący cookies, zapisywany lokalnie w przeglądarce, żeby pamiętać
            Twoją decyzję.
          </li>
        </ul>

        <h2>3. Cookies i analityka</h2>
        <p>
          Strona może używać plików cookies niezbędnych do działania. Dopiero po Twojej
          zgodzie włączam też cookies analityczne Google Analytics (pomiar ruchu). Zgodę
          możesz wycofać, czyszcząc dane przeglądarki albo pisząc na adres kontaktowy.
        </p>

        <h2>4. Odbiorcy danych</h2>
        <p>
          Dane mogą trafić do dostawcy hostingu (MyDevil). Przy włączonej analityce trafiają
          też do Google Ireland Limited jako dostawcy Google Analytics. Nie sprzedaję danych
          osobowych.
        </p>

        <h2>5. Okres przechowywania</h2>
        <p>
          Wiadomości e-mail przechowuję tak długo, jak długo jest to potrzebne do
          korespondencji i ewentualnych roszczeń. Dane analityczne trzymam zgodnie z
          ustawieniami Google Analytics albo do momentu wycofania zgody.
        </p>

        <h2>6. Twoje prawa</h2>
        <p>Masz prawo do:</p>
        <ul>
          <li>dostępu do swoich danych,</li>
          <li>sprostowania,</li>
          <li>usunięcia,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przenoszenia danych,</li>
          <li>sprzeciwu wobec przetwarzania,</li>
          <li>wycofania zgody (gdy przetwarzanie opiera się na zgodzie),</li>
          <li>wniesienia skargi do Prezesa UODO.</li>
        </ul>
        <p>
          Żeby skorzystać z tych praw, napisz na{' '}
          <a href="mailto:kontakt@dawid-developer.pl">kontakt@dawid-developer.pl</a>.
        </p>

        <h2>7. Kontakt</h2>
        <p>
          Pytania o prywatność:{' '}
          <a href="mailto:kontakt@dawid-developer.pl">kontakt@dawid-developer.pl</a>
          {' · '}
          <Link href="/contact">formularz kontaktowy</Link>.
        </p>
      </div>
    </section>
  </main>
);

export default PrivacyPolicyPage;
