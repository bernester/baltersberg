<script lang="ts">
  import { titleClasses, linkClasses, sectionClasses } from "$lib/styles";
  import data from "../../data.json";

  const QuestionClasses = "text-lg md:text-xl font-bold mb-4";
  const AnswerClasses = "text-md/relaxed md:text-lg/relaxed mb-8";

  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  // Das Kick-Off-Wochenende steht noch nicht in data.json — sein Datum wird
  // erst abgestimmt, seine Länge steht aber fest.
  const VBT_DAYS = 2;
  // Der Abreisetag am Ende des Abbaus zählt nicht als voller Tag, deshalb
  // ohne +1.
  const teamDays =
    Math.round(
      (new Date(data.dates.abbau.end).getTime() -
        new Date(data.dates.aufbau.start).getTime()) /
        MS_PER_DAY,
    ) + VBT_DAYS;
</script>

<section id="faq" class={sectionClasses.default}>
  <h2 class={[titleClasses, "text-center mb-8"]}>Häufige Fragen</h2>

  <article>
    <h3 class={QuestionClasses}>Ab wie vielen Jahren kann man mitmachen?</h3>
    <p class={AnswerClasses}>
      Du kannst bereits mit 16 Jahren Teil des Teams werden. Natürlich kannst du
      dann noch nicht die volle Verantwortung übernehmen, sondern unterstützt
      das Team als Nachwuchsteami.
    </p>
  </article>
  <article>
    <h3 class={QuestionClasses}>Bekommt man etwas dafür?</h3>
    <p class={AnswerClasses}>
      Bei der Freizeitbande wird man vor allem reich an Erfahrungen und
      wundervollen Erinnerungen. Daneben bekommt man für die 9 Tage der
      Freizeit eine Aufwandsentschädigung von 14 €/Tag. Kosten für die An- und
      Abreise werden ebenfalls im Rahmen unserer Möglichkeiten erstattet.
      Verpflegung und Unterkunft ist natürlich kostenlos.
    </p>
  </article>
  <article>
    <h3 class={QuestionClasses}>Wie viel Zeit muss man investieren?</h3>
    <p class={AnswerClasses}>
      Vom Kick-Off-Wochenende bis zum Abbau sind es {teamDays} Tage. Dazu kommt
      noch das Nachtreffen. Natürlich ist es gar nicht leicht sich so viel Zeit
      frei zu halten. Wir freuen uns aber um jegliche Unterstützung, egal wie
      lange.
    </p>
  </article>
  <p class="text-xl font-bold mb-4">
    Du hast noch weitere Fragen? Schreibe uns einfach an <a
      href="mailto:{data.contact.email}"
      class={linkClasses}>{data.contact.email}</a
    >
  </p>
</section>
