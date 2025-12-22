<script>
  import data from "../../data.json";
  import { Circle, Underline } from "$lib/annotate";
  import { headlineClasses, sectionClasses } from "$lib/styles";
  import { formatDate, formatDateTime } from "$lib/utils";

  const TermineTitleClasses =
    "text-2xl/none md:text-3xl/none font-bolle uppercase mb-2";
  const TermineSummaryClasses = "text-md md:text-lg";
</script>

<section class={`${sectionClasses.wide}`}>
  <h2 class={`${headlineClasses} text-center mb-12 md:mb-20`}>
    Termine <span use:Circle={"green"}>2026</span>
  </h2>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
    <article>
      <h3 class={TermineTitleClasses}>
        <span use:Underline class="inline-block">Kick-Off</span> Wochenende
      </h3>
      <p class={TermineSummaryClasses}>
        {formatDateTime(data.dates.vbt.start)} bis
        {formatDateTime(data.dates.vbt.end)}
      </p>
    </article>
    <article>
      <h3 class={TermineTitleClasses}>
        <span use:Underline class="inline-block">Aufbau</span> und Schulungen
      </h3>
      <p class={TermineSummaryClasses}>
        {formatDate(data.dates.aufbau.start)} bis
        {formatDate(data.dates.aufbau.end)}
      </p>
    </article>
    <article>
      <h3 class={TermineTitleClasses}>
        <span use:Underline class="inline-block">Freizeit</span> für Alle
      </h3>
      <p class={TermineSummaryClasses}>
        {formatDate(data.dates.camp.start)} bis
        {formatDate(data.dates.camp.end)}
      </p>
    </article>
    <article>
      <h3 class={TermineTitleClasses}>
        <span use:Underline class="inline-block">Abbau</span> und Abreise
      </h3>
      <p class={TermineSummaryClasses}>
        {formatDate(data.dates.abbau.start)} bis
        {formatDate(data.dates.abbau.end)}
      </p>
    </article>
  </div>
</section>
