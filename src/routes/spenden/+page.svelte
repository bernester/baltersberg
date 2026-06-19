<script lang="ts">
  import BackLink from "$components/Common/BackLink.svelte";
  import { Box, Marker, Underline } from "$lib/annotate";
  import {
    buttonDefaultClasses,
    headlineClasses,
    leadParagraphClasses,
    paragraphClasses,
    primaryButtonClasses,
    secondaryButtonClasses,
    sectionClasses,
    subHeadlineClasses,
    titleClasses,
  } from "$lib/styles";
  import data from "../../data.json";

  const externalLink = {
    target: "_blank",
    rel: "nofollow noopener noreferrer",
  } as const;
</script>

<svelte:head>
  <title>Spenden – Freizeit für Alle</title>
  <meta
    name="description"
    content="Unterstütze die inklusive Sommerfreizeit der Freizeitbande e.V. – per betterplace oder Überweisung."
  />
</svelte:head>
<div class="flex flex-col gap-8">
  <!-- Hero -->
  <div class={[sectionClasses.default, "pb-0"]}>
    <BackLink />
    <section>
      <h1 class={[titleClasses, "mb-2"]}>
        <span use:Marker class="inline-block">Deine Spende</span> macht uns möglich.
      </h1>
      <p class={leadParagraphClasses}>
        Jeder Beitrag – ob groß oder klein – schenkt uns Spielraum: die
        Freiheit, das zu tun, was richtig und wichtig ist, mutig Neues
        auszuprobieren und kurzfristig auf das zu reagieren, was die Kinder
        gerade brauchen.
      </p>
      <p class={leadParagraphClasses}>
        Diese Beweglichkeit brauchen wir, um wirklich für alle da sein zu
        können.
        <strong>Danke für deine Unterstützung!</strong>
      </p>
    </section>
  </div>
  <div class={[sectionClasses.wide, "py-0"]}>
    <!-- Spendenwege -->
    <section>
      <h2 class={[headlineClasses, "mb-8 text-center"]}>
        So kannst du <span use:Marker class="inline-block">helfen</span>
      </h2>
      <div class="flex flex-col md:flex-row gap-8">
        <!-- betterplace -->
        <article class="flex-1 py-4 px-6" use:Box>
          <h3 class={[subHeadlineClasses, "mb-2"]}>betterplace</h3>
          <p class={paragraphClasses}>
            Schnell und sicher online spenden – inklusive Spendenbescheinigung.
            So können wir flexibel dort helfen, wo es gerade am nötigsten ist.
          </p>
          <a
            href={data.donation.betterplace}
            class={[
              buttonDefaultClasses,
              primaryButtonClasses,
              "btn-interaction",
            ]}
            aria-label="Auf betterplace spenden (öffnet in neuem Tab)"
            {...externalLink}>Auf betterplace spenden</a
          >
        </article>

        <!-- Überweisung -->
        <article class="flex-1 py-4 px-6" use:Box>
          <h3 class={[subHeadlineClasses, "mb-2"]}>Überweisung</h3>
          <p class={paragraphClasses}>
            Lieber direkt? Überweise deine Spende an unser Vereinskonto.
            Verwendungszweck: <strong>Spende</strong>.
          </p>
          <address class="not-italic text-md/relaxed md:text-lg/relaxed">
            {data.donation.bank.holder}<br />
            <span class="whitespace-nowrap"
              >IBAN: {data.donation.bank.iban}</span
            ><br />
            BIC: {data.donation.bank.bic}<br />
            {data.donation.bank.bankName}
          </address>
        </article>

        {#if data.donation.paypal}
          <!-- PayPal -->
          <article class="flex flex-1 flex-col gap-4 p-4" use:Box>
            <h3 class={subHeadlineClasses}>PayPal</h3>
            <p class={paragraphClasses}>
              Mit wenigen Klicks und ohne Kontodaten – ideal für die schnelle
              Spende zwischendurch.
            </p>
            <a
              href={data.donation.paypal}
              class={[
                buttonDefaultClasses,
                secondaryButtonClasses,
                "btn-interaction",
              ]}
              aria-label="Mit PayPal spenden (öffnet in neuem Tab)"
              {...externalLink}>Mit PayPal spenden</a
            >
          </article>
        {/if}
      </div>
    </section>
  </div>
  <div class={[sectionClasses.default, "pt-0"]}>
    <section>
      <h2 class={[headlineClasses, "mb-4"]}>
        Wofür wir deine <span use:Marker class="inline-block">Spenden</span> brauchen
      </h2>
      <ul
        class="list-disc ms-6 space-y-2 text-md/relaxed md:text-lg/relaxed text-balance"
      >
        <li>
          <strong>Soli-Plätze:</strong> Ausgleich für Teilnahmebeiträge, die Familien
          nicht oder nur teilweise tragen können
        </li>
        <li>
          <strong>Inklusionskosten:</strong> Persönliche Assistenz, barrierearme
          Ausstattung und individuelle Lösungen
        </li>
        <li>
          <strong>Material und Programm:</strong> Bastel- und Werkzeug, Sportgeräte
          und Honorare für externe Workshops
        </li>
        <li>
          <strong>Verpflegung:</strong> Frische, regionale, vegetarische Lebensmittel
          für die gesamte Freizeit
        </li>
        <li>
          <strong>Infrastruktur:</strong> Zelte, Küchenausstattung, Sanitäranlagen
          und Transport
        </li>
      </ul>
    </section>
  </div>
</div>
