<script>
  import Divider from "$components/Common/Divider.svelte";
  import { Marker, Underline } from "$lib/annotate";
  import { sectionClasses } from "$lib/styles";

  const paragraphClasses =
    "text-md/relaxed md:text-lg/relaxed text-pretty mb-4";
  const h2Classes =
    "text-3xl/tight md:text-6xl/tight font-bolle uppercase mt-8 mb-4";
  const h3Classes =
    "text-2xl/tight md:text-4xl/tight font-bolle uppercase mt-8 mb-4";
  const listItemClasses =
    "text-md/relaxed md:text-lg/relaxed text-pretty mb-4 mb-4";
</script>

<section class={`${sectionClasses.default}`}>
  <div class="section-content p-8">
    <h1 class="text-4xl/tight md:text-7xl/tight font-bolle uppercase mb-6">
      Das Freizeitbanden <span use:Marker>Manifest</span>
    </h1>
    <p class={paragraphClasses}>
      Die Freizeitbande ist eine Gemeinschaft engagierter Freiwilliger mit
      pädagogischer Ausbildung und vielfältiger Erfahrung in der Kinder- und
      Jugendarbeit, die sich zum Ziel gesetzt hat, Zeltlager neu und
      ganzheitlich zu denken und zu gestalten.
    </p>
    <p class={paragraphClasses}>
      Die Freizeitbande setzt auf Inklusion und bedürfnisorientierte
      Freizeitpädagogik.
    </p>
    <p class={paragraphClasses}>
      Die Freizeitbande ist ein Ort für Alle, unabhängig von Fähigkeiten,
      Geschlecht, Alter, Religion, Kultur oder finanzieller Situation, um
      gemeinsam Freizeit zu gestalten und zu erleben. Dabei orientieren wir uns
      an vier Grundsätzen.
    </p>

    <Divider />

    <h2 class={h2Classes}>Wir sind <span use:Marker>bunt.</span></h2>
    <p class={paragraphClasses}>
      Bunt steht für Inklusion. Für Begegnung und ein respektvolles Miteinander.
      Wir schaffen ein sicheres Umfeld, in dem alle die Möglichkeit haben
      sollen, menschliche Vielfalt zu erleben, auszuhalten und anzunehmen.
    </p>

    <h3 class={h3Classes}>So leben wir das:</h3>
    <ul>
      <li class={listItemClasses}>
        <strong use:Underline>Hürden beseitigen:</strong> Geld darf kein Hindernis
        sein. Mit unserem dreistufigen Beitrag ermöglichen wir, dass auch Kinder
        aus Familien mit wenig oder ohne festes Einkommen sorgenfrei mitmachen können.
        Eventuelle Finanzierungslücken decken wir mit Hilfe von Spenden und Fördermitteln.
      </li>
      <li class={listItemClasses}>
        <strong use:Underline>Barrieren beseitigen:</strong> Wir wollen möglichst
        allen die Teilnahme in der Freizeitbande ermöglichen. Im direkten Austausch
        suchen wir individuelle Lösungen für noch bestehende Barrieren. Für individuelle
        Bedürfnisse bieten wir flexible Teilnahmemodelle an, wie beispielsweise die
        Teilnahme mit persönlicher Assistenz oder ohne Übernachtung.
      </li>
      <li class={listItemClasses}>
        <strong use:Underline>Vielfalt im Team:</strong> Vielfalt zeigt sich auch
        in unserem Team – jede Perspektive bereichert uns. Wir freuen uns über alle,
        die unsere Bande noch bunter, lauter, wilder und geborgener machen.
      </li>
    </ul>

    <Divider />

    <h2 class={h2Classes}>Wir sind <span use:Marker>laut.</span></h2>
    <p class={paragraphClasses}>
      Laut steht für Ausgelassenheit, Selbstentfaltung, Meinungsäußerung und
      Mitbestimmung. Die Freizeitbande bietet einen sicheren und offenen Raum,
      in dem alle ihre Gefühle und Bedürfnisse ausdrücken und von den Ansichten
      und Bedürfnissen anderer lernen können.
    </p>

    <h3 class={h3Classes}>So klingt das bei uns:</h3>
    <ul>
      <li class={listItemClasses}>
        <strong use:Underline>Nichts über uns ohne uns:</strong> Mitgestalten und
        Mitbestimmen sind wichtig, um ein vielfältiges Miteinander zu bewältigen.
        Im Lageralltag besprechen Kinder und Erwachsene gemeinsam Wünsche, Herausforderungen
        sowie Regeln für ein solidarisches Miteinander.
      </li>
      <li class={listItemClasses}>
        <strong use:Underline>Freiwilligkeit:</strong> Alle Angebote basieren auf
        echter Freiwilligkeit. Kinder und Jugendliche entscheiden selbst, worauf
        sie Lust haben – denn Motivation entsteht aus Interesse, nicht aus Zwang.
        Wir wollen Angebote schaffen, die Interesse wecken und motivieren und individuelle
        Bedürfnisse zulassen.
      </li>
    </ul>

    <Divider />

    <h2 class={h2Classes}>Wir sind <span use:Marker>wild.</span></h2>
    <p class={paragraphClasses}>
      Wild steht für Mut, Lebensfreude, Kreativität und die Möglichkeit
      selbstbestimmt und selbstbewusst die eigenen Grenzen zu erkunden. Die
      Freizeitbande schafft Angebote, die Impulse setzen, Neugierde wecken und
      Selbstbewusstsein fördern. Sei es sozial, intellektuell, aktiv oder
      kreativ.
    </p>

    <h3 class={h3Classes}>So entfalten wir das:</h3>
    <ul>
      <li class={listItemClasses}>
        <strong use:Underline>Programmvielfalt:</strong> Unser Programm orientiert
        sich jeden Tag neu an Stimmung, Wetter und Bedürfnissen. Wir achten aber
        immer auf eine ausgewogene Mischung an bunten, lauten, wilden und geborgenen
        Angeboten.
      </li>
      <li class={listItemClasses}>
        <strong use:Underline>Impulse von außen:</strong> Wir suchen aktiv nach Impulsen
        und Unterstützung von außen. Bei Vereinen, Unternehmen oder Einzelpersonen.
        Sei es in den Bereichen Beruf, Sport, Kunst, Kultur, Natur oder Gesellschaft.
      </li>
    </ul>

    <Divider />

    <h2 class={h2Classes}>Wir sind <span use:Marker>geborgen.</span></h2>
    <p class={paragraphClasses}>
      Geborgenheit steht für die Sicherung aller Grundbedürfnisse. Für ein
      warmes und sicheres Zuhause. Für eine bewusste und gesunde Ernährung. Für
      das wohlige Gefühl gehört und gesehen zu werden. Für einen Platz, an dem
      man seine eigenen Bedürfnisse nach Ruhe oder Gemeinschaft an erste Stelle
      setzen kann.
    </p>

    <h3 class={h3Classes}>So schaffen wir Geborgenheit:</h3>
    <ul>
      <li class={listItemClasses}>
        <strong use:Underline>Bewusste und gesunde Ernährung:</strong> Sonne, frische
        Luft machen hungrig und leckeres Essen macht glücklich. Unser Küchenteam
        zaubert jeden Tag 4 leckere vegetarische Mahlzeiten aus überwiegend regionalen
        Zutaten.
      </li>
      <li class={listItemClasses}>
        <strong use:Underline>Hoher Betreuungsschlüssel:</strong> Mit einem 16-köpfigen
        Kernteam bieten wir einen durchschnittlichen Betreuungsschlüssel von 1:2.
        Für Teilnehmende mit erhöhtem Betreuungsbedarf finden wir im Austausch mit
        den Sorgeberechtigten eine individuelle Lösung.
      </li>
      <li class={listItemClasses}>
        <strong use:Underline>Ruhe und Rückzugsbereiche:</strong> Ob eine dösige
        Pause an der Hör-Buche, ein Spaziergang in kleiner Runde oder gemeinsames
        Kochen im Küchenzelt – wir bieten Raum zum Durchatmen und Auftanken.
      </li>
      <li class={listItemClasses}>
        <strong use:Underline>Sicherheit:</strong> Wir schulen unser Team für einen
        pädagogischen Umgang auf Augenhöhe und reflektieren unser Handeln und unsere
        Strukturen stetig, unter anderem durch das Entwickeln eines Schutzkonzeptes.
      </li>
    </ul>

    <Divider />

    <p class={paragraphClasses}>
      <strong use:Underline>Das ist unsere Freizeitbande.</strong> Für alle, die
      dazugehören wollen – genau so, wie sie sind.
    </p>
  </div>
</section>
