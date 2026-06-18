<script lang="ts">
  import BackLink from "$components/Common/BackLink.svelte";
  import Check from "$components/Common/Check.svelte";
  import SeparatorLine from "$components/Common/separator-line.svelte";
  import { Box, Marker, Underline } from "$lib/annotate";
  import {
    titleClasses,
    linkClasses,
    sectionClasses,
    headlineClasses,
    paragraphClasses,
    leadParagraphClasses,
  } from "$lib/styles";
  import { formatDate } from "$lib/utils";
  import data from "../../data.json";
</script>

<svelte:head>
  <title>Info für Eltern & Teilnehmende – Freizeit für Alle</title>
</svelte:head>

<div class="space-y-20">
  <!-- Hero -->
  <section class={sectionClasses.wide}>
    <BackLink />
    <div class="flex flex-col gap-8">
      <article>
        <h1 class={[titleClasses, "mb-4"]}>
          <span use:Marker class="inline-block">Informationen</span> für die Freizeit.
        </h1>
        <p class={leadParagraphClasses}>
          Hier findet ihr alle wichtigen Informationen für eine reibungslose An-
          und Abreise und für eine unvergessliche Freizeit:
        </p>
      </article>

      <div class="flex flex-col md:flex-row gap-12 md:gap-8">
        <div class="flex flex-1 flex-col gap-12 items-start">
          <!-- Anreise -->
          <article>
            <h2 class={[headlineClasses, "mb-4"]}>
              <span use:Marker class="inline-block">Anreise</span>
            </h2>
            <p class={paragraphClasses}>
              Die Anreise ist
              <strong use:Underline
                >am
                {formatDate(data.dates.camp.start)}
                {data.schedule.arrivalTime}.</strong
              >
              Ihr erhaltet vorab ein paar Unterlagen per Post — bitte bringt sie
              ausgefüllt zur Anreise mit.
            </p>
            <ul class="packlist space-y-2 text-md/relaxed md:text-lg/relaxed">
              <Check><strong>Ausgefüllte Anmeldekarte (Umschlag)</strong></Check>
              <Check><strong>Versicherungskarte</strong></Check>
              <Check><strong>Kopie des Impfausweises</strong></Check>
              <Check>
                <strong
                  >Unterschriebene Freigabe für Bild- , Ton-, Video- und
                  Filmaufnahmen</strong
                >
              </Check>
            </ul>
          </article>
          <!-- Gesundheit -->
          <article>
            <h2 class={[headlineClasses, "mb-4"]}>
              <span use:Marker class="inline-block">Gesundheit</span>
            </h2>
            <p class={paragraphClasses}>
              Da wir uns ausschließlich in der freien Natur befinden, empfehlen
              wir einen Impfschutz gegen <strong>Wundstarrkrampf</strong> und
              <strong>FSME</strong> (beim Hausarzt nachfragen).
            </p>
            <p class={paragraphClasses}>
              Kinder mit <strong>Läusen</strong> müssen behandelt werden. Wir sind
              verpflichtet, alle Teilnehmer:innen zu kontrollieren. Schaut deshalb
              schon vor der Anreise nach Läusen und Nissen — und fragt im Zweifelsfall
              den Hausarzt.
            </p>
          </article>
          <!-- Kontakt -->
          <article>
            <h2 class={[headlineClasses, "mb-4"]}>
              Kontakt für <span use:Marker class="inline-block">alle Fälle</span
              >
            </h2>
            <p class="text-lg/relaxed mb-2">
              Hier könnt ihr uns während der Freizeit erreichen (am besten per
              Nachricht, da wir nicht immer am Telefon sein können):
            </p>
            <div class="flex flex-col gap-2">
              <p class="text-lg">
                <a href="tel:{data.contact.phone}" class={linkClasses}
                  >{data.contact.phoneDisplay}</a
                >
                <span class="text-base">({data.contact.phoneOwner})</span>
              </p>
              <p class="text-lg">
                <a href="mailto:{data.contact.email}" class={linkClasses}
                  >{data.contact.email}</a
                >
              </p>
            </div>
          </article>
        </div>
        <div class="flex flex-1 flex-col gap-12 items-start">
          <!-- Abreise -->
          <article>
            <h2 class={[headlineClasses, "mb-4"]}>
              <span use:Marker class="inline-block">Abreise</span>
            </h2>
            <p class={paragraphClasses}>
              Nach zehn unvergesslichen Tagen müssen wir uns auch schon wieder
              verabschieden. Die Abreise ist
              <strong use:Underline
                >am
                {formatDate(data.dates.camp.end)}
                {data.schedule.departureTime}</strong
              >.
            </p>
            <p class={paragraphClasses}>
              Die An- und Abreise sollte selbst organisiert werden. Solltet ihr
              Hilfe brauchen, schreibt uns einfach an
              <a href="mailto:{data.contact.email}" class={linkClasses}
                >{data.contact.email}</a
              >.
            </p>
          </article>

          <!-- Taschengeld -->
          <article>
            <h2 class={[headlineClasses, "mb-4"]}>
              <span use:Marker class="inline-block">Taschengeld</span>
            </h2>
            <p class={paragraphClasses}>
              <strong use:Underline>10&nbsp;€ Taschengeld</strong> sollten völlig
              ausreichen. Es gibt keine Einkaufsmöglichkeiten in der näheren Umgebung
              — an unserem Kiosk können sich alle mit Snacks versorgen.
            </p>
          </article>

          <!-- Postkarten & Päckchen -->
          <article class="p-4" use:Box>
            <h2 class={[headlineClasses, "text-pretty mb-4"]}>
              <span use:Marker class="inline-block">Post von zuhause</span> versüßt
              das Zeltlager
            </h2>
            <p class={paragraphClasses}>
              Viel besser als ein schnelles Telefonat ist oft ein kleines
              Care-Packet von Zuhause. Pakete und Päckchen könnt ihr an folgende
              Adresse schicken.
            </p>

            <address class="not-italic text-lg font-bold">
              Freizeitbande (Name des Kindes)<br />
              c/o {data.venue.mailRecipient}<br />
              {data.venue.street}<br />
              {data.venue.postalCode}
              {data.venue.city}
            </address>
          </article>
        </div>
      </div>
    </div>
  </section>

  <SeparatorLine />

  <!-- Packliste -->
  <section class={sectionClasses.wide}>
    <h2 class={titleClasses}>
      Das solltest du <span use:Marker class="inline-block">einpacken</span>
    </h2>
    <div use:Box class="my-12">
      <p class={paragraphClasses}>
        Bitte alles mit <strong>Namensschildern</strong> versehen — dann findet
        ihr verlorene oder verlegte Dinge leichter.
        <strong use:Underline
          >Fundsachen können nicht zurückgeschickt werden.</strong
        >
      </p>
      <p class={paragraphClasses}>
        <strong use:Underline>Wichtig!</strong> Für Teilnehmer:innen, die in
        einem Haushalt wohnen: Bitte verpackt euer Gepäck
        <strong>getrennt</strong>, da ihr in unterschiedlichen Zelten
        untergebracht sein könntet.
      </p>
    </div>

    <div class="flex flex-col md:flex-row gap-12 md:gap-8">
      <div class="flex flex-1 flex-col gap-12 items-start">
        <article class="space-y-4">
          <h3 class={headlineClasses}>
            <span use:Underline>Kleidung</span>
          </h3>
          <ul class="packlist space-y-2 text-md/relaxed md:text-lg/relaxed">
            <Check>Mindestens <strong>5 T-Shirts</strong></Check>
            <Check>
              <strong>1 weißes T-Shirt</strong>, zum Bedrucken für unser
              diesjähriges Zeltlager-T-Shirt
            </Check>
            <Check>Mindestens <strong>2 warme Pullover</strong></Check>
            <Check>
              Mindestens <strong>2 lange Hosen</strong>
              (auch als Schutz gegen Zecken)
            </Check>
            <Check>Mindestens <strong>2 kurze Hosen</strong></Check>
            <Check>
              <strong>Anorak</strong> und
              <strong>Regenjacke mit Kapuze</strong>
            </Check>
            <Check>Mindestens <strong>9 Unterhosen</strong></Check>
            <Check>Mindestens <strong>9 Paar Socken</strong></Check>
            <Check>
              <strong>Feste Schuhe</strong> (z.&nbsp;B. Turnschuhe) und
              <strong>leichte Schuhe</strong> (z.&nbsp;B. Sandalen)
            </Check>
            <Check>
              <strong>Sportkleidung</strong>
              (keine Fußballschuhe mit Stollen)
            </Check>
            <Check>
              <strong>Badeanzug</strong> bzw. <strong>Badehose</strong> und
              <strong>Badetuch</strong>
            </Check>
            <Check>Wenn möglich Badeschuhe</Check>
          </ul>
        </article>

        <article class="space-y-4">
          <h3 class={headlineClasses}>
            <span use:Underline>Für's Zelt</span>
          </h3>
          <ul class="packlist space-y-2 text-md/relaxed md:text-lg/relaxed">
            <Check>
              <strong>Warmer Schlafsack</strong>
              (es kann nachts sehr kalt werden)
            </Check>
            <Check>
              <strong>Luftmatratze</strong> oder ein
              <strong>Feldbett mit Isomatte</strong> (bitte nicht breiter als 70&nbsp;cm)
            </Check>
            <Check>Taschenlampe</Check>
            <Check>Bei Bedarf einen Ersatzschlafsack</Check>
            <Check>Bei Bedarf eine zusätzliche Decke</Check>
            <Check>Bei Bedarf eine Wärmflasche</Check>
          </ul>
        </article>

        <article class="space-y-4">
          <h3 class={headlineClasses}>
            <span use:Underline>Für den Körper</span>
          </h3>
          <ul class="packlist space-y-2 text-md/relaxed md:text-lg/relaxed">
            <Check>Zahnbürste, Handtücher, Waschlappen, Hygieneartikel</Check>
            <Check>
              <strong>Sonnenmütze</strong> und
              <strong>Sonnenschutzmittel</strong>
            </Check>
            <Check>Wenn möglich Mückenschutzmittel</Check>
          </ul>
        </article>
      </div>
      <div class="flex flex-1 flex-col gap-12 items-start">
        <article class="space-y-4">
          <h3 class={headlineClasses}>
            <span use:Underline>Für's Essen</span>
          </h3>
          <ul class="packlist space-y-2 text-md/relaxed md:text-lg/relaxed">
            <Check><strong>1 Trinkflasche</strong></Check>
            <Check><strong>Mindestens 2 Geschirrtücher</strong></Check>
            <Check>
              Stabiles Geschirr aus Kunststoff, mit tiefem Teller (kein
              Einweggeschirr)
            </Check>
            <Check>1 großer Trinkbecher mit Henkel (Für heiße Getränke)</Check>
            <Check>Besteck</Check>
          </ul>
        </article>

        <article class="space-y-4">
          <h3 class={headlineClasses}>
            <span use:Underline>Nicht</span> vergessen
          </h3>
          <ul class="packlist space-y-2 text-md/relaxed md:text-lg/relaxed">
            <Check><strong>Versicherungskarte</strong></Check>
            <Check><strong>Adresse vom Hausarzt</strong></Check>
            <Check><strong>Kopie des Impfausweises</strong></Check>
          </ul>
        </article>

        <article class="space-y-4">
          <h3 class={headlineClasses}>
            Bitte <span use:Marker class="inline">zu Hause lassen</span>
          </h3>
          <ul class="donts space-y-2 text-md/relaxed md:text-lg/relaxed">
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
          <p class="font-bold text-balance">
            Für mitgebrachte Gegenstände kann keine Haftung übernommen werden.
          </p>
        </article>

        <p class={`${paragraphClasses} text-center text-balance`} use:Box>
          Solltest du manche Dinge — wie einen Schlafsack — nicht besitzen oder
          besorgen können, sag uns bitte rechtzeitig Bescheid. Wir helfen dir
          gerne.
        </p>
      </div>
    </div>
  </section>
</div>

<style>
  /* Packing-list items are interactive checkboxes — see Check.svelte for the
     per-item markers and checked state. */
  .packlist {
    list-style: none;
    padding: 0;
  }

  /* dont.svg marker in front of each don't-bring item. */
  .donts {
    list-style: none;
    padding: 0;
  }

  .donts li {
    position: relative;
    padding-left: 2.25rem;
    text-wrap: pretty;
  }

  .donts li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.1em;
    width: 1.4em;
    height: 1.4em;
    background-image: url("/dont.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
