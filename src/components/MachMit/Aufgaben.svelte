<script>
  import { Marker, Underline } from "$lib/annotate";
  import {
    headlineClasses,
    primaryButtonClasses,
    sectionClasses,
    subHeadlineClasses,
  } from "$lib/styles";

  const ParagraphClasses = "text-md/relaxed md:text-lg/relaxed text-pretty";
</script>

<section class={`${sectionClasses.default}`}>
  <h2 class={`${headlineClasses} text-center mb-8`}>Was gibt es zu tun?</h2>
  <p class="text-md/relaxed md:text-lg/relaxed text-center text-pretty mb-8">
    Eine Sommerfreizeit ist wie ein kleines Dorf. Und unsere Freizeit ist <span
      use:Underline>ein ganz besonderes Dorf</span
    > mit vielen, unfassbar engagierten und wundervoll kreativen Menschen, die für
    ein unvergessliches Sommerabenteuer sorgen.
  </p>
  <div class="text-center">
    <a
      href="https://tally.so/r/nrAk42"
      class={`${primaryButtonClasses} !text-green-light`}
      rel="nofollow"
      target="blank">Werde Teil des Teams</a
    >
  </div>
</section>
<section class={`${sectionClasses.wide}`}>
  <section class="grid grid-cols-2 gap-y-20 gap-x-8">
    <article>
      <h3
        class={`${subHeadlineClasses} mb-4 inline-block`}
        use:Marker={"green"}
      >
        <span use:Marker={"green"}>Betreuung</span>
      </h3>
      <p class={ParagraphClasses}>
        Als Zeltbuddy bist du die <span use:Underline
          >Hauptansprech&shy;personen</span
        > für eine Zeltgruppe mit ca. 8 Kids. Der Rest des Teams sorgt dafür, dass
        du dich voll und ganz auf diese Aufgabe konzentrieren kannst.
      </p>
    </article>
    <article>
      <h3
        class={`${subHeadlineClasses} mb-4 inline-block`}
        use:Marker={"green"}
      >
        <span use:Marker={"green"}>Programm</span>
      </h3>
      <p class={ParagraphClasses}>
        Unser Programm ist freiwillig und bedürfnisorientiert. Damit das klappt,
        kümmern sich viele kreative und emphatische Menschen um <span
          use:Underline>Spiel, Spaß, Abenteuer, Kreativität und Erholung.</span
        >
      </p>
    </article>
    <article>
      <h3
        class={`${subHeadlineClasses} mb-4 inline-block`}
        use:Marker={"green"}
      >
        <span use:Marker={"green"}>Küche</span>
      </h3>
      <p class={ParagraphClasses}>
        In Jule, unserem Küchenzelt, zaubert das Küchenteam täglich vier
        Mahlzeiten. <span use:Underline
          >Vegetarisch, regional und unfassbar lecker.</span
        >
      </p>
    </article>
    <article>
      <h3 class={`${subHeadlineClasses} mb-4 inline-block`}>
        <span use:Marker={"green"}>Badeausicht </span>
      </h3>
      <p class={ParagraphClasses}>
        Der Badesee ist ein besonders wichtiger Ort. Als Badeaufsicht sorgst du
        dafür, <span use:Underline
          >dass niemand auf den Badespaß verzichten muss</span
        > und alles sicher abläuft.
      </p>
    </article>
    <article>
      <h3 class={`${subHeadlineClasses} mb-4`}>
        <span use:Marker={"green"}>Und der ganze Rest</span>
      </h3>
      <p class={ParagraphClasses}>
        Daneben gibt es noch viele weitere wichtige Aufgaben. Von Einkaufen,
        Recyling, Sauberkeit und kleinen Reparaturen.
      </p>
    </article>
  </section>
</section>
