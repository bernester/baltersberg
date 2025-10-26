<script>
  import { headlineClasses, linkClasses, sectionClasses } from "$lib/styles";

  const QuestionClasses = "text-lg md:text-xl font-bold mb-4";
  const AnswerClasses = "text-md/relaxed md:text-lg/relaxed mb-8";
</script>

<section id="faq" class={`${sectionClasses.default}`}>
  <h2 class={`${headlineClasses} text-center mb-8`}>Häufige Fragen</h2>

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
      wundervollen Erinnerungen. Daneben bekommt man für die 10 Tage der
      Freizeit eine Aufwandsentschädigung von 14 €/Tag. Kosten für die An- und
      Abreise werden ebenfalls im Rahmen unserer Möglichkeiten erstattet.
      Verpflegung und Unterkunft ist natürlich kostenlos.
    </p>
  </article>
  <article>
    <h3 class={QuestionClasses}>Wie viel Zeit muss man investieren?</h3>
    <p class={AnswerClasses}>
      Die ganze Freizeit von Kick-Off bis Nachtreffen sind 16 Tage. Natürlich
      ist es gar nicht leicht sich so viel Zeit frei zu halten. Wir freuen uns
      aber um jegliche Unterstützung, egal wie lange.
    </p>
  </article>
  <p class="text-xl font-bold mb-4">
    Du hast noch weitere Fragen? Schreibe uns einfach an <a
      href="mailto:hallo@freizeitban.de"
      class={linkClasses}
      target="_blank"
      rel="noopener noreferrer">hallo@freizeitban.de</a
    >
  </p>
</section>
