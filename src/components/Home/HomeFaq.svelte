<script>
  import { Marker } from "$lib/annotate";
  import { headlineClasses, linkClasses, sectionClasses } from "$lib/styles";

  const QuestionClasses = "text-lg md:text-xl font-bold mb-4";
  const AnswerClasses = "text-md/relaxed md:text-lg/relaxed mb-8";
</script>

<section id="faq" class={`${sectionClasses.default}`}>
  <h2 class={`${headlineClasses} text-center mb-8`}>
    Häufige <span use:Marker class="inline-block">Fragen</span>
  </h2>

  <article>
    <h3 class={QuestionClasses}>
      Mein Kind ist noch nicht 9 Jahre alt. Kann es trotzdem mitmachen?
    </h3>
    <p class={AnswerClasses}>
      Unser Zeltlager ist für Kinder und Jugendliche zwischen 9 und 14 Jahren
      ausgelegt. In diesem Alter lässt sich das bunte Lagerleben mit all seinen
      Spielen, Aktionen und Erlebnissen am besten genießen. Wenn bereits ein
      Geschwisterkind teilnimmt oder ein persönlicher Bezug zum Zeltlager
      besteht, können Ausnahmen gern individuell besprochen werden. Sprecht uns
      einfach an – gemeinsam finden wir eine gute Lösung!
    </p>
  </article>

  <article>
    <h3 class={QuestionClasses}>
      Ich bin mir nicht sicher, ob mein Kind die Freizeit gut aufnehmen wird.
    </h3>
    <p class={AnswerClasses}>
      Das ist absolut Verständlich. Wir stehen euch dabei gerne zur Seite eine
      gute Lösung zu finden.
    </p>
  </article>

  <p class="text-xl font-bold mb-4 text-center">
    Noch Fragen? Schreibt uns an <a
      href="mailto:hallo@freizeitban.de"
      class={linkClasses}
      target="_blank"
      rel="noopener noreferrer">hallo@freizeitban.de</a
    >
  </p>
</section>
