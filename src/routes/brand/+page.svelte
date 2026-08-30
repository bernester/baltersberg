<script lang="ts">
  import BackLink from "$components/Common/BackLink.svelte";
  import Check from "$components/Common/Check.svelte";
  import Divider from "$components/Common/Divider.svelte";
  import SeparatorLine from "$components/Common/separator-line.svelte";
  import DecorativeImage from "$components/Common/DecorativeImage.svelte";
  import { Box, Brackets, Circle, Marker, Underline } from "$lib/annotate";
  import {
    buttonDefaultClasses,
    buttonSmallClasses,
    headlineClasses,
    leadParagraphClasses,
    linkClasses,
    paragraphClasses,
    primaryButtonClasses,
    secondaryButtonClasses,
    sectionClasses,
    subHeadlineClasses,
    titleClasses,
  } from "$lib/styles";

  // This page is the brand book. It imports the real tokens, class constants
  // and annotation actions rather than restating them, so it cannot drift from
  // the site it documents — if a token changes, the specimen below changes
  // with it. The prose rules live in docs/brand.md and docs/writing.md.

  const labelClasses = "font-mono text-xs uppercase tracking-wide opacity-60";

  const principles = [
    {
      word: "Bunt",
      color: "bg-yellow" as const,
      meaning:
        "Farbe wird großzügig eingesetzt – aber nie als einziger Träger von Bedeutung. Alle können die Seite lesen.",
    },
    {
      word: "Laut",
      color: "bg-green" as const,
      meaning:
        "Überschriften sind riesig, versal und handgezeichnet. Die Seite hat eine Stimme.",
    },
    {
      word: "Wild",
      color: "bg-pink" as const,
      meaning:
        "Nichts ist perfekt gerade. Annotationen sind skizziert, Buttons bewegen sich, Illustrationen sind lose.",
    },
    {
      word: "Geborgen",
      color: "bg-yellow-light" as const,
      meaning:
        "Großzügige Abstände, warme Farben, weiche Squircle-Ecken. Nie eng, nie klinisch.",
    },
  ];

  const colors = [
    {
      token: "yellow",
      swatch: "bg-yellow",
      job: "Der Standard-Akzent. Highlights auf Eltern- und Teilnehmenden-Seiten, Buttontext auf Schwarz.",
    },
    {
      token: "green",
      swatch: "bg-green",
      job: "Nur Team-Werbung – /mach-mit und der Block, der dorthin verlinkt. Grün heißt: das hier ist an Ehrenamtliche gerichtet.",
    },
    {
      token: "pink",
      swatch: "bg-pink",
      job: "Hinweisboxen: ein Tipp, eine Warnung, ein Verweis. Immer zusammen mit einem Box-Rahmen.",
    },
    {
      token: "red",
      swatch: "bg-red",
      job: "Nur negativer Status – ausgebucht, geschlossen, Fehler. Nie dekorativ.",
    },
    {
      token: "black",
      swatch: "bg-black",
      job: "Text, Rahmen, die Kante unter dem Button. Ein sehr dunkles Blau, kein reines Schwarz – immer das Token nutzen.",
    },
  ];

  const anrede = [
    { who: "Eltern und Sorgeberechtigte", form: "ihr / euch / eure", where: "/, /info, FAQ, Preise" },
    { who: "Kinder und Jugendliche", form: "du / dir / deine", where: "Packliste" },
    { who: "Ehrenamtliche im Team", form: "du", where: "/mach-mit" },
    { who: "Spendende", form: "du", where: "/spenden" },
  ];

  const voice = [
    {
      rule: "Erst der Nutzen, dann die Handlung.",
      weak: "Paketsendungen sind an die folgende Lageradresse zu richten.",
      strong:
        "Post von zuhause versüßt das Zeltlager. Pakete könnt ihr an diese Adresse schicken.",
    },
    {
      rule: "Kurze Sätze, einfache Wörter.",
      weak: "Die Entrichtung des Teilnahmebeitrags erfolgt einkommensabhängig gestaffelt.",
      strong: "Es gibt drei Preise. Sie richten sich nach eurem Einkommen.",
    },
    {
      rule: "Konkret statt blumig.",
      weak: "Wir bieten eine hervorragende Betreuung und ausgezeichnetes Essen.",
      strong:
        "16 Menschen im Kernteam, ein Betreuungsschlüssel von 1:2, vier vegetarische Mahlzeiten am Tag.",
    },
    {
      rule: "Ehrlich über Grenzen – und immer mit einer Tür am Ende.",
      weak: "Selbstverständlich ist unsere Freizeit vollständig barrierefrei.",
      strong:
        "Das Gelände ist in vielen Bereichen nicht barrierefrei. Was in eurem Fall möglich ist, schauen wir uns gemeinsam an – schreibt uns einfach.",
    },
  ];
</script>

<svelte:head>
  <title>Brand Book – Freizeit für Alle</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="space-y-20">
  <!-- Hero -->
  <section class={sectionClasses.default}>
    <BackLink />
    <h1 class={[titleClasses, "mb-4"]}>
      Das <span use:Marker class="inline-block">Brand Book</span>
    </h1>
    <p class={leadParagraphClasses}>
      Diese Seite beschreibt die Gestaltung nicht nur – sie <strong
        use:Underline>ist</strong
      > sie. Jede Farbe, jede Schrift und jede Annotation unten kommt aus demselben
      Code wie der Rest der Website. Ändert sich ein Token, ändert sich dieses Beispiel
      mit.
    </p>
    <p class={paragraphClasses}>
      Die ausformulierten Regeln stehen in <code class="font-mono text-sm"
        >docs/brand.md</code
      >
      und <code class="font-mono text-sm">docs/writing.md</code>.
    </p>
  </section>

  <!-- Die vier Wörter -->
  <section class={sectionClasses.wide}>
    <h2 class={[titleClasses, "mb-4"]}>
      Die vier <span use:Marker class="inline-block">Wörter</span>
    </h2>
    <p class={[leadParagraphClasses, "mb-8"]}>
      Bunt. Laut. Wild. Geborgen. Das Manifest ist die Marke – keine Seite,
      sondern der Maßstab. Jede Gestaltungsentscheidung unten lässt sich auf
      eines dieser Wörter zurückführen. Eine Seite, die nur laut ist, hat drei
      Viertel der Marke vergessen.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each principles as { word, color, meaning } (word)}
        <article class="p-5" use:Box>
          <div class="flex items-center gap-3 mb-3">
            <span class={["w-6 h-6 rounded-full flex-none", color]}></span>
            <h3 class={subHeadlineClasses}>{word}</h3>
          </div>
          <p class="text-md/relaxed text-pretty">{meaning}</p>
        </article>
      {/each}
    </div>
  </section>

  <SeparatorLine />

  <!-- Schrift -->
  <section class={sectionClasses.wide}>
    <h2 class={[titleClasses, "mb-4"]}>
      <span use:Marker class="inline-block">Schrift</span>
    </h2>
    <p class={[leadParagraphClasses, "mb-8"]}>
      Zwei Familien, beide bereits geladen. Keine dritte hinzufügen.
      <strong>Bolle</strong> ist immer versal und nie Fließtext – sie hat kein Bold,
      kein Kursiv und ist unter 24px schwer zu lesen. <strong>Lexend</strong> ist
      alles andere: sie wurde für Lesbarkeit ausgewählt und ist die Barrierefreiheits-Hälfte
      von <em>geborgen</em>.
    </p>

    <div class="space-y-8">
      <div class="space-y-2">
        <p class={labelClasses}>titleClasses – ein h1 pro Seite</p>
        <p class={titleClasses}>Zeit für Freizeit</p>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>headlineClasses – h2 im Abschnitt</p>
        <p class={headlineClasses}>Was kostet die Freizeit?</p>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>subHeadlineClasses – Karten-Titel</p>
        <p class={subHeadlineClasses}>Überweisung</p>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>leadParagraphClasses – erster Absatz</p>
        <p class={leadParagraphClasses}>
          Zehn Tage Sommer, Zelte, Lagerfeuer und gemeinsam Abenteuer erleben –
          das ist die Freizeit für Alle.
        </p>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>paragraphClasses – Fließtext</p>
        <p class={paragraphClasses}>
          Bei uns ist Platz für alle – egal ob mit oder ohne Behinderung, egal
          woher jemand kommt oder was die Familie sich leisten kann. Wir kochen
          gemeinsam, gestalten das Programm gemeinsam und sorgen dafür, dass
          sich alle sicher und wohl fühlen.
        </p>
      </div>
    </div>
  </section>

  <SeparatorLine />

  <!-- Farbe -->
  <section class={sectionClasses.wide}>
    <h2 class={[titleClasses, "mb-4"]}>
      <span use:Marker class="inline-block">Farbe</span>
    </h2>
    <p class={[leadParagraphClasses, "mb-8"]}>
      Jede Farbe hat eine Aufgabe. Wer sie außerhalb ihrer Aufgabe einsetzt,
      bricht ein Muster, das Lesende schon gelernt haben.
    </p>
    <dl class="space-y-4">
      {#each colors as { token, swatch, job } (token)}
        <div class="flex items-start gap-4">
          <span
            class={[
              "w-14 h-14 flex-none rounded-2xl [corner-shape:squircle] border-2 border-black",
              swatch,
            ]}
          ></span>
          <div>
            <dt class="font-mono text-sm font-bold">{token}</dt>
            <dd class="text-md/relaxed text-pretty">{job}</dd>
          </div>
        </div>
      {/each}
    </dl>
    <div class="mt-8 p-4" use:Box>
      <div use:Marker={"pink"} class="p-4">
        <p class={paragraphClasses}>
          <strong use:Underline>Farbe trägt nie allein.</strong> Eine Hinweisbox
          hat auch einen Rahmen und eine Überschrift, „ausgebucht“ steht auch als
          Wort da. Das macht die Seite für farbenblinde Lesende nutzbar.
        </p>
      </div>
    </div>
  </section>

  <SeparatorLine />

  <!-- Annotationen -->
  <section class={sectionClasses.wide}>
    <h2 class={[titleClasses, "mb-4"]}>
      <span use:Marker class="inline-block">Annotationen</span>
    </h2>
    <p class={[leadParagraphClasses, "mb-8"]}>
      Die skizzierten Marker, Unterstriche und Kreise sind die Signatur der
      Seite – und das, was man am leichtesten übertreibt.
      <strong use:Underline
        >Eine Annotation pro Überschrift, höchstens eine pro Absatz.</strong
      >
      Wenn alles hervorgehoben ist, ist nichts hervorgehoben.
    </p>

    <div class="space-y-8">
      <div class="space-y-2">
        <p class={labelClasses}>use:Marker – die Kernaussage einer Überschrift</p>
        <p class={headlineClasses}>
          Was ist die <span use:Marker class="inline-block">Freizeit für Alle?</span>
        </p>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>use:Underline – die wichtigste Stelle im Absatz</p>
        <p class={paragraphClasses}>
          Die Anreise ist <strong use:Underline>am 13.08.2026 ab 11 Uhr.</strong>
        </p>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>use:Circle – selten, ein Wort pro Seite</p>
        <p class={headlineClasses}>
          Was <span use:Circle style="inline-block">kostet</span> die Freizeit?
        </p>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>use:Box – rahmt eine ganze Karte</p>
        <div class="p-4 inline-block" use:Box>
          <p class={paragraphClasses}>Eine gerahmte Hinweiskarte.</p>
        </div>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>use:Brackets – vorhanden, aktuell ungenutzt</p>
        <p class="text-md/relaxed inline-block px-2" use:Brackets>
          Eingeklammerter Text
        </p>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>use:Strike – nur abgehakte Packlisten-Punkte</p>
        <ul class="packlist space-y-2 text-md/relaxed">
          <Check>Mindestens <strong>5 T-Shirts</strong></Check>
          <Check>Warmer Schlafsack</Check>
        </ul>
      </div>
    </div>

    <p class={[paragraphClasses, "mt-8"]}>
      Alle Annotationen berücksichtigen bereits
      <code class="font-mono text-sm">prefers-reduced-motion</code>. Nutzt die
      Actions aus
      <code class="font-mono text-sm">$lib/annotate</code>, dann bleibt das so.
    </p>
  </section>

  <SeparatorLine />

  <!-- Buttons -->
  <section class={sectionClasses.wide}>
    <h2 class={[titleClasses, "mb-4"]}>
      Buttons und <span use:Marker class="inline-block">Links</span>
    </h2>
    <p class={[leadParagraphClasses, "mb-8"]}>
      Immer Geometrie plus Variante kombinieren, nie ein Einzelstück bauen. Die
      harte Kante unter dem Button und der 2px-Sprung beim Hover sind das
      <em>wild</em> in einem sonst gewöhnlichen Bedienelement – sie kommen mit
      <code class="font-mono text-sm">primaryButtonClasses</code> gratis.
    </p>

    <div class="space-y-8">
      <div class="space-y-2">
        <p class={labelClasses}>
          buttonDefaultClasses + primaryButtonClasses – eine pro Abschnitt
        </p>
        <button type="button" class={[buttonDefaultClasses, primaryButtonClasses]}>
          Jetzt anmelden
        </button>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>buttonDefaultClasses + secondaryButtonClasses</p>
        <button
          type="button"
          class={[buttonDefaultClasses, secondaryButtonClasses]}
        >
          Mehr erfahren
        </button>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>buttonSmallClasses – kompakte Geometrie</p>
        <button type="button" class={[buttonSmallClasses, secondaryButtonClasses]}>
          Zurück
        </button>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>
          primaryButtonClasses + !text-green-light – nur Team-Werbung
        </p>
        <button
          type="button"
          class={[buttonDefaultClasses, primaryButtonClasses, "!text-green-light"]}
        >
          Werde Teil des Teams
        </button>
      </div>
      <div class="space-y-2">
        <p class={labelClasses}>linkClasses – im Fließtext</p>
        <p class={paragraphClasses}>
          Schreibt uns an <a href="mailto:hallo@freizeitban.de" class={linkClasses}
            >hallo@freizeitban.de</a
          >.
        </p>
      </div>
    </div>
  </section>

  <SeparatorLine />

  <!-- Trenner und Illustrationen -->
  <section class={sectionClasses.wide}>
    <h2 class={[titleClasses, "mb-4"]}>
      Trenner und <span use:Marker class="inline-block">Illustrationen</span>
    </h2>
    <p class={[leadParagraphClasses, "mb-4"]}>
      <code class="font-mono text-sm">SeparatorLine</code> steht zwischen
      gleichrangigen Abschnitten – oben auf dieser Seite mehrfach zu sehen.
      <code class="font-mono text-sm">Divider</code> trennt die Grundsätze im Manifest:
    </p>
    <Divider />
    <p class={paragraphClasses}>
      Die losen SVG-Illustrationen tragen das <em>bunt</em> und <em>wild</em> der
      Seite. Jede bekommt ein echtes
      <code class="font-mono text-sm">alt</code>, das beschreibt, was die Kinder
      tun:
    </p>
    <DecorativeImage
      src="/marshmallow.svg"
      alt="Kinder sitzen an einem Lagerfeuer und grillen Marshmallows"
      width={420}
    />
  </section>

  <SeparatorLine />

  <!-- Anrede -->
  <section class={sectionClasses.wide}>
    <h2 class={[titleClasses, "mb-4"]}>
      <span use:Marker class="inline-block">Anrede</span>
    </h2>
    <p class={[leadParagraphClasses, "mb-8"]}>
      Jede Seite wählt eine Form und hält sie bis zum Ende durch. Die Form folgt
      dem, wer tatsächlich angesprochen wird. <strong use:Underline
        >Siezen kommt nicht vor</strong
      > – auch nicht auf den Rechtsseiten, wo der Ton förmlich bleibt, die Anrede
      aber nicht.
    </p>
    <dl class="space-y-4">
      {#each anrede as { who, form, where } (who)}
        <div class="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
          <dt class="font-bold text-lg md:w-72 flex-none">{who}</dt>
          <dd class="text-md/relaxed">
            <span class="font-bolle uppercase text-xl">{form}</span>
            <span class="opacity-60 text-sm block md:inline md:ml-2"
              >{where}</span
            >
          </dd>
        </div>
      {/each}
    </dl>
    <div class="mt-8 p-4" use:Box>
      <div use:Marker={"pink"} class="p-4">
        <p class={paragraphClasses}>
          <strong use:Underline>Zwei Zielgruppen auf einer Seite?</strong>
          Nach Abschnitt trennen, nicht mitten im Absatz wechseln.
          <code class="font-mono text-sm">/info</code> spricht bei Anreise und Gesundheit
          die Eltern an und wechselt bei der Packliste zum Kind – genau dort, wo
          sich die lesende Person wirklich ändert.
        </p>
      </div>
    </div>
  </section>

  <SeparatorLine />

  <!-- Gendern -->
  <section class={sectionClasses.wide}>
    <h2 class={[titleClasses, "mb-4"]}>
      <span use:Marker class="inline-block">Gendern</span>
    </h2>
    <p class={[leadParagraphClasses, "mb-6"]}>
      Erst neutral, dann Gendersternchen. Der Doppelpunkt kommt nicht vor – er
      verhält sich in Screenreadern schlechter.
    </p>
    <div class="flex flex-col md:flex-row gap-6">
      <article class="flex-1 p-5" use:Box>
        <h3 class={[subHeadlineClasses, "mb-3"]}>
          <span use:Marker={"green"} class="inline-block">Zuerst</span>
        </h3>
        <p class={paragraphClasses}>
          Eine neutrale Form – bereits der vorherrschende Stil auf der Seite und
          am besten vorlesbar.
        </p>
        <ul class="list-disc ms-5 space-y-1 text-md/relaxed">
          <li>Teilnehmende</li>
          <li>Betreuende</li>
          <li>Sorgeberechtigte</li>
          <li>Ehrenamtliche</li>
          <li>Ansprechperson</li>
          <li>Kinder und Jugendliche</li>
        </ul>
      </article>
      <article class="flex-1 p-5" use:Box>
        <h3 class={[subHeadlineClasses, "mb-3"]}>
          <span use:Marker class="inline-block">Wenn es keine gibt</span>
        </h3>
        <p class={paragraphClasses}>
          Dann das Sternchen. Es ist die Hausform.
        </p>
        <ul class="list-disc ms-5 space-y-1 text-md/relaxed">
          <li>Inklusionshelfer*in</li>
          <li>Ärzt*in</li>
        </ul>
      </article>
    </div>
  </section>

  <SeparatorLine />

  <!-- Stimme -->
  <section class={sectionClasses.wide}>
    <h2 class={[titleClasses, "mb-4"]}>
      Die <span use:Marker class="inline-block">Stimme</span>
    </h2>
    <p class={[leadParagraphClasses, "mb-8"]}>
      Warm und direkt, ehrlich über Grenzen, nie behördlich. Links steht jeweils
      eine Formulierung, die nicht zu uns gehört – rechts die, die es tut.
    </p>
    <div class="space-y-10">
      {#each voice as { rule, weak, strong } (rule)}
        <article>
          <h3 class={[subHeadlineClasses, "mb-4"]}>{rule}</h3>
          <div class="flex flex-col md:flex-row gap-4">
            <p
              class="flex-1 p-4 rounded-2xl [corner-shape:squircle] border-2 border-red text-md/relaxed text-pretty"
            >
              <span class="font-mono text-xs uppercase block mb-2 text-red"
                >So nicht</span
              >
              {weak}
            </p>
            <p
              class="flex-1 p-4 rounded-2xl [corner-shape:squircle] border-2 border-black bg-yellow-light/30 text-md/relaxed text-pretty"
            >
              <span class="font-mono text-xs uppercase block mb-2">So schon</span
              >
              {strong}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <SeparatorLine />

  <!-- Checkliste -->
  <section class={sectionClasses.default}>
    <h2 class={[titleClasses, "mb-4"]}>
      Vor dem <span use:Marker class="inline-block">Veröffentlichen</span>
    </h2>
    <p class={[leadParagraphClasses, "mb-6"]}>
      Zum Abhaken – die Punkte funktionieren wie die Packliste auf
      <code class="font-mono text-sm">/info</code>.
    </p>
    <ul class="packlist space-y-3 text-md/relaxed md:text-lg/relaxed">
      <Check>Genau ein <strong>h1</strong>, keine übersprungene Ebene</Check>
      <Check>Eine <strong>Anrede</strong> durchgehend, passend zur Zielgruppe</Check>
      <Check>Neutrale Formen wo möglich, <strong>*in</strong> wo nicht</Check>
      <Check>
        Datum, Preis, Adresse und URL aus <strong>data.json</strong> gelesen
      </Check>
      <Check>Eine <strong>use:Marker</strong> pro Überschrift</Check>
      <Check>Jede Schwierigkeit endet mit einem <strong>nächsten Schritt</strong></Check>
      <Check>Externe Links mit <strong>„öffnet in neuem Tab“</strong> im aria-label</Check>
      <Check><strong>npm run check</strong> läuft durch</Check>
    </ul>
  </section>
</div>

<style>
  /* Same list reset the packing list on /info uses — Check.svelte supplies the
     per-item marker and strike-through. */
  .packlist {
    list-style: none;
    padding: 0;
  }
</style>
