<script>
  import { Marker, Underline } from "$lib/annotate";
  import {
    headlineClasses,
    primaryButtonClasses,
    subHeadlineClasses,
  } from "$lib/styles";
</script>

<section class="max-w-screen-sm mx-auto py-8 mb-8">
  <h2 class={`${headlineClasses} text-center mb-8`}>Was gibt es zu tun?</h2>
  <p class="text-lg/relaxed text-center text-pretty mb-8">
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
<section class="max-w-screen-lg mx-auto py-8 mb-8">
  <section class="grid grid-cols-2 gap-y-20 gap-x-8">
    <article>
      <h3
        class={`${subHeadlineClasses} mb-4 inline-block`}
        use:Marker={"green"}
      >
        Betreuung
      </h3>
      <p class="text-lg/relaxed text-pretty">
        Als Zeltbuddy bist du die <span use:Underline
          >Hauptansprechpersonen</span
        > für eine Zeltgruppe mit ca. 8 Kids. Der Rest des Teams sorgt dafür, dass
        du dich voll und ganz auf diese Aufgabe konzentrieren kannst.
      </p>
    </article>
    <article>
      <h3
        class={`${subHeadlineClasses} mb-4 inline-block`}
        use:Marker={"green"}
      >
        Programm
      </h3>
      <p class="text-lg/relaxed text-pretty">
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
        Küche
      </h3>
      <p class="text-lg/relaxed text-pretty">
        Essen ist die wichtigste Mahlzeit des Tages. In Jule, unserem
        Küchenzelt, zaubert das Küchenteam täglich vier Mahlzeiten. <span
          use:Underline>Vegetarisch, regional und unfassbar lecker.</span
        >
      </p>
    </article>
    <article>
      <h3
        class={`${subHeadlineClasses} mb-4 inline-block`}
        use:Marker={"green"}
      >
        Badeausicht
      </h3>
      <p class="text-lg/relaxed text-pretty">
        Der Badesee ist ein besonders wichtiger Ort. Als Badeaufsicht sorgst du
        dafür, <span use:Underline
          >dass damit niemand auf den Badespaß verzichten muss</span
        > und alles sicher abläuft.
      </p>
    </article>
    <article>
      <h3
        class={`${subHeadlineClasses} mb-4 inline-block`}
        use:Marker={"green"}
      >
        Und der ganze Rest
      </h3>
      <p class="text-lg/relaxed text-pretty">
        Daneben gibt es noch viele weitere wichtige Aufgaben und Aufgaben. Von
        Einkaufen, Recyling, Sauberkeit und kleinen Reparaturen.
      </p>
    </article>
  </section>
</section>
