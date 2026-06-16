<script lang="ts">
  import SeparatorLine from "$components/Common/separator-line.svelte";
  import { Marker, Underline } from "$lib/annotate";
  import { headlineClasses, linkClasses, sectionClasses } from "$lib/styles";
  import data from "../../data.json";

  const QuestionClasses =
    "text-lg md:text-2xl/relaxed text-pretty font-medium mb-4";
  const AnswerClasses = "text-md/relaxed md:text-lg/relaxed text-pretty mb-4";
  const AnswerListClasses =
    "list-disc text-md/relaxed md:text-lg/relaxed text-pretty mb-4 ml-8";
</script>

<section id="faq" class={sectionClasses.default}>
  <h2 class={`${headlineClasses} text-center mb-8`}>
    Häufige <span use:Marker class="inline-block">Fragen</span>
  </h2>

  <article>
    <h3 class={QuestionClasses}>
      Mein Kind ist <span use:Underline>noch nicht 9 Jahre alt</span>. Kann es
      trotzdem mitmachen?
    </h3>
    <p class={AnswerClasses}>
      Das Alter 9 bis 14 Jahre ist eine Orientierung. Es ist keine feste
      Altersgrenze. Unsere Freizeit ist für Kinder und Jugendliche zwischen 9
      und 14 Jahren ausgelegt. In diesem Alter lässt sich das bunte Lagerleben
      mit all seinen Spielen, Aktionen und Erlebnissen am besten genießen.
    </p>
    <p class={AnswerClasses}>
      Wir machen aber Ausnahmen. Zum Beispiel, wenn bereits ein Geschwisterkind
      teilnimmt oder ein persönlicher Bezug zur Freizeit besteht, können
      Ausnahmen gern individuell besprochen werden. Sprecht uns einfach an –
      gemeinsam finden wir eine gute Lösung!
    </p>
  </article>

  <SeparatorLine />

  <article>
    <h3 class={QuestionClasses}>
      Gibt es noch <span use:Underline>weitere finanzielle Unterstützung?</span>
    </h3>
    <p class={AnswerClasses}>
      Geld soll niemals ein Grund sein, nicht dabei sein zu können. Neben
      unseren drei einkommensabhängigen Beiträgen finden wir gemeinsam mit euch
      eine Lösung, die passt. Zum Beispiel:
    </p>
    <ul class={AnswerListClasses}>
      <li>Zahlung in Raten oder zu einem späteren Zeitpunkt</li>
      <li>
        Unterstützung beim Antrag auf das Bildungs- und Teilhabepaket (BuT) oder
        für einen Zuschuss über das Jugendamt
      </li>
    </ul>
    <p class={AnswerClasses}>
      Schreibt uns einfach kurz an <a
        href="mailto:{data.contact.email}"
        class={linkClasses}>{data.contact.email}</a
      >, alles weitere besprechen wir dann vertraulich.
    </p>
  </article>

  <SeparatorLine />

  <article>
    <h3 class={QuestionClasses}>
      Könnt ihr <span use:Underline>besondere Ernährungsbedürfnisse</span> berücksichtigen?
    </h3>
    <p class={AnswerClasses}>
      Wir kochen ausschließlich vegetarisch und vegan. Das hat hygienische und
      ökologische Gründe.
    </p>
    <p class={AnswerClasses}>
      Bei Allergien und Unverträglichkeiten tun wir unser Bestes. Wir haben
      bereits Erfahrung mit vielen Allergien, zum Beispiel Gluten oder Laktose.
      Ob wir ein bestimmtes Bedürfnis erfüllen können, klären wir gerne im
      Voraus gemeinsam mit euch.
    </p>
    <p class={AnswerClasses}>
      Schreibt uns einfach an <a
        href="mailto:{data.contact.email}"
        class={linkClasses}>{data.contact.email}</a
      >, was wir wissen müssen.
    </p>
  </article>

  <SeparatorLine />

  <article>
    <h3 class={QuestionClasses}>
      <span use:Underline>Wo schlafen</span> die Kinder?
    </h3>
    <p class={AnswerClasses}>
      Die Kinder schlafen in großen Zelten (LANCO SG200), aufgeteilt in kleine
      Gruppen von etwa 8 Kindern. Die Gruppen sind nach Geschlecht getrennt.
    </p>
    <p class={AnswerClasses}>
      Jede Gruppe hat zwei feste Betreuende, die sogenannten Buddies. Sie
      begleiten die Kinder durch den Alltag, sind Ansprechperson bei
      persönlichen Anliegen und helfen zum Beispiel bei Heimweh oder Konflikten
      in der Gruppe.
    </p>
  </article>

  <SeparatorLine />

  <article>
    <h3 class={QuestionClasses}>
      Können auch
      <span use:Underline>Kinder mit Behinderung</span> teilnehmen?
    </h3>
    <p class={AnswerClasses}>
      Ja, wir möchten grundsätzlich allen die Teilnahme ermöglichen. Wir haben
      bereits Erfahrung mit Teilnehmenden mit körperlichen, kognitiven und
      psychischen Beeinträchtigungen und arbeiten traumasensibel und
      bedürfnisorientiert.
    </p>
    <p class={AnswerClasses}>
      Inklusion ist uns wichtig, aber wir nehmen sie auch ernst. Sie stellt das
      ganze Team vor Herausforderungen, die wir sorgfältig abwägen. Dazu kommt,
      dass das Gelände natürliche Gegebenheiten hat und in vielen Bereichen
      nicht barrierefrei ist.
    </p>
    <p class={AnswerClasses}>
      Was in eurem Fall möglich ist, schauen wir uns gemeinsam an. Gerne auch
      mit einer Inklusionshelfer*in an der Seite.
    </p>
    <p class={AnswerClasses}>
      Schreibt uns einfach an <a
        href="mailto:{data.contact.email}"
        class={linkClasses}>{data.contact.email}</a
      >, damit wir gemeinsam eine Lösung finden.
    </p>
  </article>

  <SeparatorLine />

  <p class="text-xl font-bold mb-4 text-center">
    <span use:Marker>Noch Fragen?</span> Schreibt uns an
    <a href="mailto:{data.contact.email}" class={linkClasses}
      >{data.contact.email}</a
    >
  </p>
</section>
