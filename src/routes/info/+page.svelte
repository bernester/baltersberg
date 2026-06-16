<script lang="ts">
  import BackLink from "$components/Common/BackLink.svelte";
  import SeparatorLine from "$components/Common/separator-line.svelte";
  import HomeSummary from "$components/Home/HomeSummary.svelte";
  import { Marker, Underline } from "$lib/annotate";
  import {
    headlineClasses,
    linkClasses,
    sectionClasses,
    subHeadlineClasses,
  } from "$lib/styles";
  import { formatDate } from "$lib/utils";
  import data from "../../data.json";

  const sectionHeadingClasses = `${headlineClasses} text-center mb-8`;
  const paragraphClasses =
    "text-md/relaxed md:text-lg/relaxed text-pretty mb-4";
</script>

<svelte:head>
  <title>Info für Eltern & Teilnehmende – Freizeit für Alle</title>
</svelte:head>

<BackLink />

<div class="space-y-20">
  <!-- Hero -->
  <section class={sectionClasses.default}>
    <div class="flex flex-col gap-6 items-center text-center">
      <h1 class={headlineClasses}>
        Toll, dass <span use:Marker>ihr dabei seid</span>
      </h1>
      <p class="text-md/relaxed md:text-2xl/relaxed font-bold text-balance">
        Hier sind alle wichtigen Informationen für die An- und Abreise, das
        Lagerleben und die Packliste.
      </p>
      <p class="text-lg">Wir sehen uns bald 🎉</p>
    </div>
  </section>

  <!-- Eckdaten -->
  <HomeSummary />

  <!-- An- und Abreise -->
  <section class={sectionClasses.default}>
    <h2 class={sectionHeadingClasses}>
      An- und <span use:Marker={"green"} class="inline-block">Abreise</span>
    </h2>
    <p class={paragraphClasses}>
      Die <strong>Anreise</strong> beginnt am
      <span use:Underline
        >{formatDate(data.dates.camp.start)} um 11 Uhr</span
      >. Ihr erhaltet vorab alle Unterlagen per Post — bitte bringt sie
      ausgefüllt zur Anreise mit.
    </p>
    <p class={paragraphClasses}>
      Nach zehn unvergesslichen Tagen müssen wir uns auch schon wieder
      verabschieden. Die <strong>Abreise</strong> ist am
      <span use:Underline
        >{formatDate(data.dates.camp.end)} zwischen 11 und 13 Uhr</span
      >.
    </p>
    <p class={paragraphClasses}>
      Die An- und Abreise sollte selbst organisiert werden. Solltet ihr Hilfe
      brauchen, schreibt uns einfach an
      <a href="mailto:hallo@freizeitban.de" class={linkClasses}
        >hallo@freizeitban.de</a
      >.
    </p>
  </section>

  <!-- Taschengeld -->
  <section class={sectionClasses.default}>
    <h2 class={sectionHeadingClasses}>
      <span use:Marker class="inline-block">Taschengeld</span>
    </h2>
    <p class={paragraphClasses}>
      <strong>10&nbsp;€ Taschengeld</strong> sollten völlig ausreichen. Es gibt
      keine Einkaufsmöglichkeiten in der näheren Umgebung — an unserem Kiosk
      können sich alle mit Snacks versorgen.
    </p>
  </section>

  <!-- Gesundheit -->
  <section class={sectionClasses.default}>
    <h2 class={sectionHeadingClasses}>
      <span use:Marker={"green"} class="inline-block">Gesundheit</span>
    </h2>
    <p class={paragraphClasses}>
      Da wir uns ausschließlich in der freien Natur befinden, empfehlen wir
      einen Impfschutz gegen <strong>Wundstarrkrampf</strong> und
      <strong>FSME</strong> (beim Hausarzt nachfragen).
    </p>
    <p class={paragraphClasses}>
      Kinder mit <strong>Läusen</strong> müssen behandelt werden. Wir sind
      verpflichtet, alle Teilnehmer:innen zu kontrollieren. Schaut deshalb
      schon vor der Anreise nach Läusen und Nissen — und fragt im
      Zweifelsfall den Hausarzt.
    </p>
  </section>

  <!-- Kontakt -->
  <section class={sectionClasses.default}>
    <h2 class={sectionHeadingClasses}>
      Kontakt für <span use:Marker class="inline-block">alle Fälle</span>
    </h2>
    <p class={`${paragraphClasses} text-center mb-8`}>
      Hier könnt ihr uns während der Freizeit erreichen (am besten per
      Nachricht, da wir nicht immer am Telefon sein können):
    </p>
    <div class="flex flex-col gap-3 items-center text-center">
      <p class="text-2xl md:text-3xl font-bolle">
        <a href="tel:+4917660947744" class={linkClasses}>0176 609 477 44</a>
        <span class="text-base font-normal font-sans">(Berni)</span>
      </p>
      <p class="text-2xl md:text-3xl font-bolle">
        <a href="mailto:hallo@freizeitban.de" class={linkClasses}
          >hallo@freizeitban.de</a
        >
      </p>
    </div>
  </section>

  <!-- Postkarten & Päckchen -->
  <section class={sectionClasses.default}>
    <h2 class={sectionHeadingClasses}>
      Postkarten & <span use:Marker={"green"} class="inline-block"
        >Päckchen</span
      >
    </h2>
    <p class={`${paragraphClasses} text-center mb-8`}>
      Post von zuhause versüßt das Zeltlager 😊
    </p>
    <div class="text-center">
      <address class="not-italic font-bolle text-xl md:text-2xl leading-relaxed">
        Freizeitbande (Name des Kindes)<br />
        c/o Martin Bentele<br />
        Buch 4<br />
        88260 Argenbühl
      </address>
    </div>
  </section>

  <!-- Packliste -->
  <section class={sectionClasses.wide}>
    <h2 class={`${headlineClasses} text-center mb-4`}>
      Das solltest du <span use:Marker>mitbringen</span>
    </h2>
    <p class={`${paragraphClasses} text-center mb-12`}>
      Bitte alles mit <strong>Namensschildern</strong> versehen — dann findet
      ihr verlorene oder verlegte Dinge leichter.
    </p>

    <div class="grid md:grid-cols-2 gap-x-10 gap-y-12">
      <article>
        <h3 class={`${subHeadlineClasses} mb-4 inline-block`}>
          <span use:Underline>Kleidung</span>
        </h3>
        <ul class="packlist space-y-2 text-md/relaxed md:text-lg/relaxed">
          <li>Mindestens <strong>5 T-Shirts</strong></li>
          <li>
            <strong>1 weißes T-Shirt</strong>, zum Bedrucken für unser
            diesjähriges Zeltlager-T-Shirt
          </li>
          <li>Mindestens <strong>2 warme Pullover</strong></li>
          <li>
            Mindestens <strong>2 lange Hosen</strong>
            (auch als Schutz gegen Zecken)
          </li>
          <li>Mindestens <strong>2 kurze Hosen</strong></li>
          <li>
            <strong>Anorak</strong> und
            <strong>Regenjacke mit Kapuze</strong>
          </li>
          <li>Mindestens <strong>9 Unterhosen</strong></li>
          <li>Mindestens <strong>9 Paar Socken</strong></li>
          <li>
            <strong>Feste Schuhe</strong> (z.&nbsp;B. Turnschuhe) und
            <strong>leichte Schuhe</strong> (z.&nbsp;B. Sandalen)
          </li>
          <li>
            <strong>Sportkleidung</strong>
            (keine Fußballschuhe mit Stollen)
          </li>
          <li>
            <strong>Badeanzug</strong> bzw. <strong>Badehose</strong> und
            <strong>Badetuch</strong>
          </li>
          <li>Wenn möglich Badeschuhe</li>
        </ul>
      </article>

      <article>
        <h3 class={`${subHeadlineClasses} mb-4 inline-block`}>
          <span use:Underline>Für's Zelt</span>
        </h3>
        <ul class="packlist space-y-2 text-md/relaxed md:text-lg/relaxed">
          <li>
            <strong>Warmer Schlafsack</strong>
            (es kann nachts sehr kalt werden)
          </li>
          <li>
            <strong>Luftmatratze</strong> oder ein
            <strong>Feldbett mit Isomatte</strong> (bitte nicht breiter als 70&nbsp;cm)
          </li>
          <li>Taschenlampe</li>
          <li>Bei Bedarf einen Ersatzschlafsack</li>
          <li>Bei Bedarf eine zusätzliche Decke</li>
          <li>Bei Bedarf eine Wärmflasche</li>
        </ul>
      </article>

      <article>
        <h3 class={`${subHeadlineClasses} mb-4 inline-block`}>
          <span use:Underline>Für's Essen</span>
        </h3>
        <ul class="packlist space-y-2 text-md/relaxed md:text-lg/relaxed">
          <li><strong>1 Trinkflasche</strong></li>
          <li>
            Stabiles Geschirr aus Kunststoff, mit tiefem Teller (kein
            Einweggeschirr)
          </li>
          <li>1 großer Trinkbecher mit Henkel (Plastik)</li>
          <li>Besteck</li>
          <li>Mindestens 2 Geschirrtücher</li>
        </ul>
      </article>

      <article>
        <h3 class={`${subHeadlineClasses} mb-4 inline-block`}>
          <span use:Underline>Für den Körper</span>
        </h3>
        <ul class="packlist space-y-2 text-md/relaxed md:text-lg/relaxed">
          <li>Zahnbürste, Handtücher, Waschlappen, Hygieneartikel</li>
          <li>
            <strong>Sonnenmütze</strong> und
            <strong>Sonnenschutzmittel</strong>
          </li>
          <li>Wenn möglich Mückenschutzmittel</li>
        </ul>
      </article>

      <article class="md:col-span-2">
        <h3 class={`${subHeadlineClasses} mb-4 inline-block`}>
          <span use:Marker>Auch sehr wichtig</span>
        </h3>
        <ul class="packlist space-y-2 text-md/relaxed md:text-lg/relaxed">
          <li><strong>Versicherungskarte</strong></li>
          <li><strong>Adresse vom Hausarzt</strong></li>
          <li><strong>Kopie des Impfausweises</strong></li>
        </ul>
      </article>
    </div>

    <SeparatorLine />

    <p class={`${paragraphClasses} text-center text-balance`}>
      Solltest du manche Dinge — wie einen Schlafsack — nicht besitzen oder
      besorgen können, sag uns bitte rechtzeitig Bescheid. Wir helfen dir
      gerne.
    </p>
  </section>

  <!-- Bitte zu Hause lassen -->
  <section class={sectionClasses.default}>
    <h2 class={sectionHeadingClasses}>
      Bitte <span use:Marker class="inline-block">zu Hause lassen</span>
    </h2>
    <ul class="donts space-y-2 text-md/relaxed md:text-lg/relaxed mb-8">
      <li>Computerspiele</li>
      <li>Fahrtenmesser, Butterflys</li>
      <li>Kinderausweis</li>
      <li>
        Elektrogeräte und Elektronikgeräte
        <span class="block text-sm opacity-80">
          (können wegen der hohen Luftfeuchtigkeit und
          Temperaturschwankungen kaputt gehen)
        </span>
      </li>
      <li>Energy-Drinks</li>
      <li>EC-Karten</li>
    </ul>
    <p class="font-bold text-center text-balance">
      Für mitgebrachte Gegenstände kann keine Haftung übernommen werden.
    </p>
  </section>

  <!-- Wichtig! -->
  <section class={sectionClasses.default}>
    <h2 class={sectionHeadingClasses}>
      <span use:Marker class="inline-block">Wichtig!</span>
    </h2>
    <p class={paragraphClasses}>
      Für Teilnehmer:innen, die in einem Haushalt wohnen: Bitte verpackt euer
      Gepäck <strong>getrennt</strong>, da ihr in unterschiedlichen Zelten
      untergebracht sein könntet.
    </p>
    <p class="font-bold uppercase text-center text-balance text-lg mt-8">
      Fundsachen können nicht zurückgeschickt werden.
    </p>
  </section>
</div>

<style>
  /* Hollow square in front of each packlist item — looks like an unchecked
     checkbox. Pseudo-element, purely decorative, not announced by AT. */
  .packlist {
    list-style: none;
    padding: 0;
  }

  .packlist li {
    position: relative;
    padding-left: 2rem;
    text-wrap: pretty;
  }

  .packlist li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.35em;
    width: 1.1em;
    height: 1.1em;
    border: 2px solid currentColor;
    border-radius: 0.3em;
  }

  /* Six-pointed asterisk in front of don't-bring items (mirrors the PDF). */
  .donts {
    list-style: none;
    padding: 0;
  }

  .donts li {
    position: relative;
    padding-left: 2rem;
    text-wrap: pretty;
  }

  .donts li::before {
    content: "✱";
    position: absolute;
    left: 0;
    top: -0.05em;
    font-weight: bold;
    font-size: 1.2em;
  }
</style>
